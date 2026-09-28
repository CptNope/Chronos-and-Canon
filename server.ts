import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with required User-Agent
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const hasValidKey = !!apiKey && apiKey !== 'MY_GEMINI_API_KEY';
  res.json({
    status: 'ok',
    hasApiKey: hasValidKey,
    service: 'Chronos & Canon Ancient Text Archive API',
    timestamp: new Date().toISOString()
  });
});

// AI Research Assistant API endpoint
app.post('/api/assistant', async (req, res) => {
  try {
    const { prompt, researchMode = 'COMPARATIVE' } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt in request body.' });
    }

    const ai = getGenAI();
    if (!ai) {
      // Fallback with rich scholarly grounding if API key not injected
      return res.json({
        reply: generateScholarlyFallback(prompt, researchMode)
      });
    }

    const systemInstruction = `You are the scholarly AI Research Assistant for "Chronos & Canon: Ancient Text Comparative Archive".

PRIMARY PURPOSE & RULES:
1. Ground your answers primarily in ancient textual primary sources (Hebrew Bible, Second Temple Jewish literature, Dead Sea Scrolls, Mesopotamian/Babylonian epics, Ugaritic/Canaanite tablets, Greco-Roman mythology, Vedic/Hindu scriptures, Zoroastrian Avesta, Maya Popol Vuh).
2. NEVER turn speculative connections into historical facts. Always distinguish:
   - DOCUMENTED: Direct quotation, manuscript evidence, explicit reference, or demonstrable textual relationship.
   - STRONG: A relationship widely recognized in relevant peer-reviewed scholarship.
   - COMPARATIVE: A meaningful structural, literary, or mythological parallel without evidence of direct dependence.
   - POSSIBLE: A plausible but debated hypothesis.
   - SPECULATIVE: An interesting hypothesis lacking strong historical or manuscript evidence.
3. CURRENT USER MODE: ${researchMode} MODE.
   - In SCHOLARLY mode: restrict discussion to Documented and Strong evidence.
   - In COMPARATIVE mode: include cross-cultural parallels.
   - In EXPLORATORY / SPECULATIVE mode: clearly flag plausible and speculative theories as unproven.
4. Specific Guidance:
   - For Genesis 6:1–4, link to 1 Enoch 6–16 (Book of Watchers), Book of Giants, Numbers 13:33 (Anakim), Deuteronomy 2–3 (Rephaim / Og of Bashan), Ugaritic rpum (KTU 1.108), Jude 6 & 14–15, 2 Peter 2:4 (tartaroō).
   - Do NOT present figures such as Heracles, Gilgamesh, or the Norse Jötnar as Nephilim. Describe them as comparative traditions.
   - For ancient referenced lost books (Book of Jasher, Wars of the LORD), explain that the ancient works are lost and distinct from later surviving pseudepigrapha of the same title.
   - For 2 Esdras 14 (The 70 Books for the Wise), explain it is an exploratory hypothesis/reconstruction of Second Temple esoteric literature, as no surviving list exists.
   - Clearly distinguish DATE OF STORY / SETTING from ESTIMATED DATE OF COMPOSITION from DATE OF EARLIEST SURVIVING MANUSCRIPT.
5. Provide clear, structured, well-formatted markdown answers with precise citations.`;

    // 8-second timeout promise race for responsiveness
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Gemini API timeout')), 8000)
    );

    const generatePromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.2,
      }
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);
    const reply = response.text || "No response generated from the model.";
    return res.json({ reply });
  } catch (error: any) {
    console.warn('Falling back to database-grounded response:', error.message);
    const { prompt = '', researchMode = 'COMPARATIVE' } = req.body || {};
    return res.json({
      reply: generateScholarlyFallback(prompt, researchMode)
    });
  }
});

function generateScholarlyFallback(query: string, mode: string): string {
  const q = query.toLowerCase();

  if (q.includes('genesis 6') && (q.includes('enoch') || q.includes('watcher') || q.includes('compare'))) {
    return `### Scholarly Comparative Analysis: Genesis 6:1–4 and 1 Enoch 6–16

**Evidence Classification: DOCUMENTED (Direct Textual Expansion)**

1. **Genesis 6:1–4 (The Archaic Vignette)**:
   • Describes the "sons of God" (בְּנֵי הָאֱלֹהִים, *bene ha-elohim*) taking human wives, producing the *Nephilim* and "mighty men of old, men of renown" (*gibborim*, אַנְשֵׁי הַשֵּׁם).
   • In Semitic idiom and Ugaritic parallels (*bn ʾil*), the phrase designates divine council members rather than human rulers.

2. **1 Enoch 6–16 (Book of the Watchers Expansion)**:
   • **Descent**: 200 Watchers (עִירִין, *ʿIrin*) lead by Shemihazah and Asael descend upon the summit of **Mount Hermon** in the days of Jared.
   • **Oath**: They bind themselves by mutual curses (*ḥerem*, whence Hermon).
   • **Offspring**: The union produces enormous giants (recorded as 300 cubits in Greek/Syncellus witnesses) who turn upon humanity and devour them.
   • **Forbidden Arts**: Asael teaches metallurgy, weapons, cosmetics, and sorcery—a motif scholars identify as an intentional polemic against the Mesopotamian myth of the *Apkallu* (seven pre-flood sages).

3. **New Testament Reception**:
   • **Jude 6**: Directly cites the Watchers bound in eternal darkness for judgment.
   • **2 Peter 2:4**: Uses the Greek mythological verb *tartaroō* ("cast into Tartarus") to describe their imprisonment until judgment.`;
  }

  if (q.includes('rephaim') || q.includes('rpum') || q.includes('og')) {
    return `### Primary Evidence: Biblical Rephaim and Ugaritic rpum

**Evidence Classification: DOCUMENTED (Historical Inscription & Toponymic Match)**

1. **Biblical Witness**:
   • Deuteronomy 1:4 and Joshua 12:4 explicitly state that **Og king of Bashan** was the remnant of the **Rephaim**, reigning from **Ashtaroth and Edrei**.
   • Deuteronomy 3:11 describes his iron bedstead (*ʿereś barzel*) measuring 9 cubits (approx. 13.5 feet).

2. **Ugaritic Inscription (KTU 1.108 / RS 24.252)**:
   • Clay cuneiform tablet excavated at Ras Shamra (13th c. BCE) invokes the divine monarch **Rapiu** (*rpu mlk ʿlm*).
   • The tablet specifies that Rapiu sits enthroned at **Ashtaroth** (*b-ʿṯtrt*) and rules at **Edrei** (*b-ʾidrʿy*).

3. **Scholarly Significance**:
   • The exact match of twin capitals (**Ashtaroth & Edrei**) confirms that biblical accounts of the Rephaim in Bashan preserve authentic memories of Late Bronze Age Northwest Semitic ancestral warrior kings.
   • In Ugarit, the *rpum* were divinized royal departed ancestors invoked at memorial banquets (*marzeah*). In biblical literature, they were transformed into legendary pre-Israelite giant inhabitants and shades in Sheol.`;
  }

  if (q.includes('jude') && q.includes('enoch')) {
    return `### Direct Quotation: Jude 14–15 and 1 Enoch 1:9

**Evidence Classification: DOCUMENTED (Direct Quotation & Manuscript Attestation)**

1. **Direct Quotation**:
   • **Jude 14–15**: *"Enoch, the seventh from Adam, prophesied about them, saying: 'Behold, the Lord came with ten thousands of his holy ones, to execute judgment upon all...'"*
   • **1 Enoch 1:9**: Attested in the Greek Akhmim fragment and in the Dead Sea Scrolls Aramaic scroll **4Q204** (4QEn^c ar Col. I).
   • The formula *"Enoch, the seventh from Adam"* (*hebdomos apo Adam*) reflects 1 Enoch 60:8 and Jubilees 7:39.

2. **Watcher Imprisonment (Jude 6)**:
   • Jude 6 invokes the angels who abandoned their proper dwelling and are held in eternal chains under darkness—mirroring 1 Enoch 10:4–12 where Michael and Raphael bind the Watchers in the subterranean abyss.`;
  }

  if (q.includes('flood')) {
    return `### Ancient Near Eastern Flood Traditions Prior to the 1st Century AD

**Evidence Classifications: DOCUMENTED / STRONG (Near Eastern) | COMPARATIVE (Global)**

1. **Epic of Ziusudra / Eridu Genesis (Sumerian, ca. 1600 BCE)**:
   The earliest documented written flood narrative; King Ziusudra builds a vessel and is granted immortality by the gods.

2. **Epic of Atrahasis (Old Babylonian Akkadian, ca. 1700–1640 BCE)**:
   The god Enki warns Atrahasis through a reed wall to dismantle his house, build a boat, and pitch it with bitumen. Enlil had sent the deluge to silence human noise.

3. **Epic of Gilgamesh XI (Standard Babylonian, ca. 1200–1000 BCE)**:
   Utnapishtim recounts the deluge to Gilgamesh: ship grounded on Mount Nimush (Nisir); seven-day storm; release of dove, swallow, and raven; post-flood sacrifice with sweet savor.

4. **Comparative Traditions**:
   • **Greek Deucalion (Hesiod / Pindar, 7th–5th c. BCE)**: Zeus destroys the Bronze Age race; Deucalion and Pyrrha survive on Mount Parnassus.
   • **Vedic Manu (Shatapatha Brahmana, ca. 8th–6th c. BCE)**: King Manu rescued by the horned fish Matsya, landing on the Northern Mountain.`;
  }

  if (q.includes('divine council') || q.includes('sons of god') || q.includes('psalm 82')) {
    return `### The Divine Council & Sons of God across Northwest Semitic Literature

**Evidence Classification: DOCUMENTED (Shared Northwest Semitic Idiom)**

1. **Biblical Occurrences**:
   • **Psalm 82:1, 6**: *"God presides in the divine assembly; he renders judgment among the gods (elohim)... I said, 'You are gods; you are all sons of the Most High (bene Elyon).' But you will die like mere mortals."*
   • **Psalm 89:5–7**: Council of the holy ones (*sod qedoshim*).
   • **Job 1:6, 2:1, 38:7**: The sons of God (*bene ha-elohim*) presenting themselves before Yahweh.
   • **Deuteronomy 32:8 (4QDeut^j / LXX)**: God set the boundaries of nations according to the number of the sons of God.

2. **Ugaritic Parallels (Baal Cycle & El Texts)**:
   • The Assembly of El (*phr mʿd* / *ʿdt ʾilm*).
   • The junior gods are termed *bn ʾil* ("sons of El") gathered under the supreme creator god El and his consort Athirat.

3. **Scholarly Consensus**:
   The Hebrew Bible preserves the conceptual framework of the Northwest Semitic divine council, but radically redefines it: the subordinate gods are stripped of their autonomous divinity and subjected to moral judgment for failing to judge the weak justly (Psalm 82).`;
  }

  // Default scholarly response
  return `### Scholarly Research Dossier: "${query}"

**Research Mode: ${mode}**

1. **Methodological Framing**:
   In ancient comparative studies, we strictly separate:
   • **DOCUMENTED & STRONG**: Direct quotations, manuscript witnesses, and shared West Semitic vocabulary (e.g., Jude 14 quoting 1 Enoch, or Isaiah 27 reproducing Ugaritic *Lotan* formulas).
   • **COMPARATIVE**: Universal archetypes across disconnected civilizations (e.g., giant races, world trees, dragon battles in Norse, Vedic, or Mesoamerican literature) that represent independent cultural motifs rather than historical diffusion.
   • **POSSIBLE & SPECULATIVE**: Plausible historical hypotheses that lack direct manuscript proof.

2. **Key Primary Texts in Corpus**:
   • Genesis 6:1–4 & 1 Enoch 6–16 (Watchers & Nephilim)
   • Deuteronomy 2–3 & Ugaritic KTU 1.108 (Rephaim & Ashtaroth/Edrei)
   • Epic of Gilgamesh XI & Epic of Atrahasis III (Great Deluge)
   • Baal Cycle KTU 1.5 & Isaiah 27:1 (Chaoskampf against Leviathan/Lotan)
   • 2 Esdras 14 (The 70 Books for the Wise - Exploratory Hypothesis)

You can explore these texts in the **Compare View** or map their network in the **Relationship Graph**.`;
}

// Configure Vite integration for dev server or static serving for production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Chronos & Canon server listening on port ${PORT}`);
  });
}

startServer();
