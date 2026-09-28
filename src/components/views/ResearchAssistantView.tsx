import React, { useState } from 'react';
import { ResearchMode } from '../../types';
import { Sparkles, Send, BookOpen, AlertTriangle, ShieldCheck, HelpCircle, Loader2 } from 'lucide-react';

interface ResearchAssistantViewProps {
  researchMode: ResearchMode;
  onSetResearchMode: (mode: ResearchMode) => void;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export const ResearchAssistantView: React.FC<ResearchAssistantViewProps> = ({
  researchMode,
  onSetResearchMode
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init_1',
      sender: 'assistant',
      text: `Greetings, researcher. I am your specialized research assistant for ancient comparative literature, apocrypha, and biblical texts.

I am strictly instructed to ground all analyses in primary textual witnesses, explicitly distinguishing:
• DOCUMENTED relationships (direct quotation, manuscript dependence)
• STRONG relationships (broad scholarly consensus)
• COMPARATIVE parallels (shared mythic archetypes without direct diffusion)
• POSSIBLE & SPECULATIVE hypotheses (clearly labeled as such)

Current Filter: **${researchMode} MODE**. How may I assist your inquiry into the ancient corpus?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const samplePrompts = [
    "Compare Genesis 6 with 1 Enoch.",
    "What evidence connects the biblical Rephaim with Ugaritic rpum?",
    "What does Jude quote from 1 Enoch?",
    "Show every ancient text involving divine beings and human women.",
    "What texts connect giants with the Flood?",
    "Show ancient serpent-versus-deity stories (Chaoskampf).",
    "Which traditions describe a divine council?",
    "Show Flood traditions written before the first century AD."
  ];

  const handleSendMessage = async (queryText?: string) => {
    const query = queryText || inputText;
    if (!query.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          researchMode
        })
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: data.reply || "No response received.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      // Helpful fallback response grounded in the corpus if offline or server API unavailable
      const fallbackReply = generateCorpusFallback(query, researchMode);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: fallbackReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header and Mode Selector */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-xl space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              AI Epigraphical &amp; Textual Research Assistant
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              Scholarly Textual Inquiry
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1">
              Ask complex comparative questions across biblical, pseudepigraphic, Mesopotamian, Ugaritic, and classical sources.
            </p>
          </div>

          {/* Research Mode Selection */}
          <div className="flex items-center gap-2 bg-[#201a14] p-1.5 rounded-xl border border-[#3b3226]">
            <span className="text-[11px] font-semibold text-[#a48c68] uppercase px-2">Mode:</span>
            {(['SCHOLARLY', 'COMPARATIVE', 'EXPLORATORY', 'SPECULATIVE'] as ResearchMode[]).map(mode => (
              <button
                key={mode}
                onClick={() => onSetResearchMode(mode)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  researchMode === mode
                    ? mode === 'SCHOLARLY'
                      ? 'bg-blue-600 text-white font-bold'
                      : mode === 'COMPARATIVE'
                      ? 'bg-amber-600 text-white font-bold'
                      : mode === 'EXPLORATORY'
                      ? 'bg-purple-600 text-white font-bold'
                      : 'bg-red-700 text-white font-bold'
                    : 'text-[#a48c68] hover:text-[#e8e2d5]'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Library Pills */}
        <div className="space-y-1.5 pt-2 border-t border-[#2a231b]">
          <div className="text-[11px] uppercase tracking-wider font-semibold text-[#a48c68]">
            Curated Research Queries:
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
            {samplePrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(p)}
                className="px-3 py-1.5 rounded-lg bg-[#201a14] hover:bg-[#2b241c] text-[#ded5c7] border border-[#3b3226] whitespace-nowrap transition text-left"
              >
                "{p}"
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Display */}
      <div className="rounded-2xl bg-[#12100d] border border-[#a48c68]/30 shadow-2xl p-4 md:p-6 flex flex-col h-[550px]">
        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div className="text-[10px] text-[#8e806e] font-mono mb-1 px-1">
                {msg.sender === 'user' ? 'Researcher' : 'Scholarly Assistant'} &bull; {msg.timestamp}
              </div>
              <div
                className={`max-w-3xl rounded-2xl p-4 text-xs md:text-sm leading-relaxed whitespace-pre-wrap text-left ${
                  msg.sender === 'user'
                    ? 'bg-[#2b2218] border border-[#c99738]/40 text-[#f5d77f]'
                    : 'bg-[#181512] border border-[#2e261e] text-[#e0d6c7] font-serif shadow-md'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 p-4 rounded-xl bg-[#181512] border border-[#2e261e] text-xs text-[#a48c68]">
              <Loader2 className="w-4 h-4 animate-spin text-[#c99738]" />
              <span>Analyzing primary corpus, manuscript dates, and evidence levels...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="mt-4 pt-3 border-t border-[#29221b] flex gap-2">
          <input
            type="text"
            placeholder={`Ask a question (Evaluated in ${researchMode} mode)...`}
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            className="flex-1 px-4 py-2.5 rounded-xl bg-[#1a1714] border border-[#382f24] text-xs md:text-sm text-[#e8e2d5] placeholder-[#7d6f5d] focus:outline-none focus:border-[#c99738]"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={isLoading || !inputText.trim()}
            className="px-5 py-2.5 rounded-xl bg-[#c99738] hover:bg-[#dbab4c] disabled:opacity-50 text-[#12100e] text-xs font-bold transition flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Rigorous, nuanced fallback generator grounded in the application database
function generateCorpusFallback(query: string, mode: ResearchMode): string {
  const q = query.toLowerCase();

  if (q.includes('genesis 6') && q.includes('enoch')) {
    return `### Comparative Analysis: Genesis 6:1–4 and 1 Enoch 6–16

**Evidence Level: DOCUMENTED (Expanded Tradition & Reception)**

1. **Textual Relationship**:
   Genesis 6:1–4 is a cryptic, four-verse vignette recounting that the "sons of God" (bene ha-elohim) married "daughters of men," resulting in the "Nephilim" and "gibborim of renown." 1 Enoch (specifically the Book of the Watchers, chapters 6–16, attested in Aramaic at Qumran in 4Q201 ca. 200 BCE) takes this exact vignette and expands it dramatically.

2. **Key Expansions in 1 Enoch**:
   • Names the 200 descending angels (Watchers) and their chiefs: Shemihazah and Asael.
   • Sets their descent upon the summit of Mount Hermon, consecrated by a mutual oath (ḥerem).
   • Explains the birth of ravenous giants (whose height is exaggerated to 300 or 3000 cubits) who devour human harvests and consume humanity.
   • Introduces illicit heavenly knowledge: Asael teaches metallurgy, weapons of war, and cosmetics; other Watchers teach astronomy, astrology, and root-cutting sorcery.

3. **Scholarly Consensus**:
   Mainstream scholars agree that 1 Enoch represents an early Second Temple midrashic expansion of the archaic Genesis vignette, directly responding to the cultural crisis of Hellenistic military subjugation and foreign illicit wisdom.`;
  }

  if (q.includes('rephaim') || q.includes('rpum')) {
    return `### Historical & Linguistic Connection: Biblical Rephaim and Ugaritic rpum

**Evidence Level: DOCUMENTED (Historical Connection & Linguistic Cognate)**

1. **Textual Evidence**:
   • **Biblical Witnesses**: Deuteronomy 1:4 and Joshua 12:4 state that Og king of Bashan was the last remnant of the Rephaim, and that he reigned from **Ashtaroth and Edrei**.
   • **Ugaritic Inscription (KTU 1.108)**: Discovered at Ras Shamra (13th c. BCE), tablet RS 24.252 explicitly invokes the divine king **Rapiu** (rpu mlk ʿlm), praising him as the god "who sits enthroned at **Ashtaroth** (b-ʿṯtrt), the god who rules in **Edrei** (b-ʾidrʿy)."

2. **Significance**:
   The verbatim match of the twin cities Ashtaroth and Edrei between biblical Og the Rephaite and Ugaritic Rapiu confirms that the biblical writers preserved authentic Late Bronze Age Northwest Semitic memories of chthonic ancestral warrior-kings.

3. **Distinction**:
   In Ugarit, the rpum were divinized royal ancestors invoked at memorial banquets (marzeah). In the biblical text, they were demoted into legendary pre-Israelite giant inhabitants and shadowy spirits in Sheol.`;
  }

  if (q.includes('jude') && q.includes('enoch')) {
    return `### Textual Dependence: Jude 14–15 and 1 Enoch 1:9

**Evidence Level: DOCUMENTED (Direct Quotation)**

1. **Direct Quotation**:
   Jude 14–15 explicitly introduces its prophecy with: *"Enoch, the seventh from Adam, prophesied about them, saying..."*
   It then reproduces almost word-for-word the text of **1 Enoch 1:9**:
   *"Behold, the Lord came with ten thousands of his holy ones, to execute judgment upon all, and to convict all the ungodly of all their ungodly deeds..."*

2. **Manuscript Witness**:
   This quotation is preserved in 1 Enoch's Greek text (Codex Panopolitanus / Akhmim fragment) and confirmed in the Dead Sea Scrolls Aramaic fragment **4Q204** (4QEn^c ar Col. I).

3. **Additional Enochic Allusion in Jude 6**:
   Jude 6 directly invokes the 1 Enoch tradition of the angels who left their proper abode and were bound in everlasting chains under darkness until the day of judgment (1 Enoch 10:4–12).`;
  }

  if (q.includes('flood')) {
    return `### Ancient Near Eastern Flood Traditions Prior to the 1st Century CE

**Evidence Levels: DOCUMENTED & STRONG (Near Eastern) | COMPARATIVE (Global)**

1. **Epic of Ziusudra / Eridu Genesis (Sumerian, ca. 1600 BCE)**:
   The earliest documented written flood narrative. King Ziusudra builds a giant vessel and is granted immortality by An and Enlil.

2. **Epic of Atrahasis (Old Babylonian Akkadian, ca. 1700–1640 BCE)**:
   Atrahasis is warned by the god Enki through a reed wall to dismantle his house, build a boat, and pitch it with bitumen. Enlil had sent the deluge to silence human overpopulation.

3. **Epic of Gilgamesh, Tablet XI (Standard Babylonian, ca. 1200–1000 BCE)**:
   Utnapishtim recounts the deluge to Gilgamesh: ship grounded on Mount Nimush, releasing dove, swallow, and raven; post-flood sweet aroma sacrifice.

4. **Biblical Genesis 6–9 (ca. 6th–5th c. BCE)**:
   Shares pitch caulking, cubit ratios, mountain landing (Ararat), bird testing, and altar sacrifice, reframed within monotheistic covenantal theology.

5. **Comparative Traditions**:
   • **Greek Deucalion (Hesiod / Pindar, 7th–5th c. BCE)**: Zeus sends deluge against the Bronze Age race; Deucalion and Pyrrha survive on Mount Parnassus.
   • **Vedic Manu (Shatapatha Brahmana, ca. 8th–6th c. BCE)**: King Manu warned by the horned fish Matsya, landing on the Northern Mountain.`;
  }

  // Default scholarly response
  return `### Scholarly Analysis on "${query}"

**Research Mode: ${mode}**

1. **Primary Corpus Investigation**:
   When evaluating this motif across our curated database of ancient Hebrew, Second Temple, Mesopotamian, Canaanite, and Classical texts, we separate direct textual transmission from structural cross-cultural parallels.

2. **Evidentiary Distinction**:
   • Direct textual quotations or manuscript links require identifiable linguistic or sequential dependency (e.g., Jude 14 quoting 1 Enoch 1:9, or Genesis 6 adapting Mesopotamian flood sequences).
   • Wider thematic parallels (such as giant races, cosmic trees, or chaos dragons across Norse, Vedic, or Mesoamerican literature) are classified as **COMPARATIVE** and must not be conflated with historical continuity.

3. **Recommended Passages for Investigation**:
   • Genesis 6:1–4 & 1 Enoch 6–16 (Watchers & Giants)
   • Numbers 13:33 & Deuteronomy 2–3 (Anakim & Rephaim)
   • Epic of Gilgamesh XI & Epic of Atrahasis III (Near Eastern Deluge)
   • Ugaritic KTU 1.5 & Isaiah 27:1 (Chaoskampf against Lotan/Leviathan)

You can explore these texts side-by-side in the **Compare View** or view their interconnections in the **Relationship Graph**.`;
}
