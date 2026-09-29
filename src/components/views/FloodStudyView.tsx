import React from 'react';
import { passages } from '../../data/passages';
import { EvidenceBadge } from '../common/EvidenceBadge';
import { useLanguage } from '../../i18n/LanguageContext';
import { Waves, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';

interface FloodStudyViewProps {
  onOpenCompare?: (passageIds: string[]) => void;
}

export const FloodStudyView: React.FC<FloodStudyViewProps> = ({ onOpenCompare }) => {
  const { t, language } = useLanguage();
  const f = t.floodStudy;

  const floodPassages = [
    {
      id: 'gilgamesh_tablet_11_flood',
      tradition: language === 'es' ? 'Mesopotámica (Babilónica)' : language === 'pt' ? 'Mesopotâmica (Babilônica)' : 'Mesopotamian (Babylonian)',
      work: language === 'es' ? 'Epopeya de Gilgamesh XI' : language === 'pt' ? 'Epopeia de Gilgamesh XI' : 'Epic of Gilgamesh XI',
      hero: 'Utnapishtim',
      vessel: language === 'es' ? 'El Gran Barco (eleppu) calafateado por dentro y por fuera con brea' : language === 'pt' ? 'O Grande Barco (eleppu) calafetado por dentro e por fora com betume' : 'The Great Ship (eleppu) pitched inside and out',
      mountain: 'Mount Nimush (Nisir)',
      birds: language === 'es' ? 'Paloma, Golondrina, Cuervo' : language === 'pt' ? 'Pomba, Andorinha, Corvo' : 'Dove, Swallow, Raven',
      divineMotive: language === 'es' ? 'La ira del consejo de Enlil; Enki advierte en secreto a Utnapishtim' : language === 'pt' ? 'A ira do conselho de Enlil; Enki avisa secretamente Utnapishtim' : 'Enlil\'s council wrath; Enki secretly warns Utnapishtim',
      evidenceToGenesis: language === 'es' ? 'SÓLIDO (Dependencia textual directa)' : language === 'pt' ? 'FORTE (Dependência textual direta)' : 'STRONG (Textual dependence / shared Near Eastern source)'
    },
    {
      id: 'atrahasis_tablet_3_flood',
      tradition: language === 'es' ? 'Mesopotámica (Paleobabilónica)' : language === 'pt' ? 'Mesopotâmica (Paleobabilônica)' : 'Mesopotamian (Old Babylonian)',
      work: language === 'es' ? 'Epopeya de Atrahasis III' : language === 'pt' ? 'Epopeia de Atrahasis III' : 'Epic of Atrahasis III',
      hero: language === 'es' ? 'Atrahasis ("El Sumamente Sabio")' : language === 'pt' ? 'Atrahasis ("O Excessivamente Sábio")' : 'Atrahasis ("Exceedingly Wise")',
      vessel: language === 'es' ? 'Barca de cañas sellada con betún' : language === 'pt' ? 'Barco de juncos calafetado com betume' : 'Reed boat pitched with bitumen',
      mountain: language === 'es' ? 'Tierras altas de Mesopotamia' : language === 'pt' ? 'Terras altas da Mesopotâmia' : 'Mesopotamian highlands',
      birds: language === 'es' ? 'No preservado en la columna rota' : language === 'pt' ? 'Não preservado na coluna quebrada' : 'Not preserved on broken tablet column',
      divineMotive: language === 'es' ? 'Enlil perturbado por el ruido ensordecedor de la humanidad' : language === 'pt' ? 'Enlil perturbado pelo ruído ensurdecedor da humanidade' : 'Enlil disturbed by deafening human noise/overpopulation',
      evidenceToGenesis: language === 'es' ? 'SÓLIDO (Prototipo narrativo)' : language === 'pt' ? 'FORTE (Protótipo narrativo)' : 'STRONG (Narrative prototype)'
    },
    {
      id: 'shatapatha_brahmana_flood',
      tradition: language === 'es' ? 'Védica / Hindú' : language === 'pt' ? 'Védica / Hindu' : 'Vedic / Hindu',
      work: 'Shatapatha Brahmana I.8.1',
      hero: language === 'es' ? 'Rey Manu' : language === 'pt' ? 'Rei Manu' : 'King Manu',
      vessel: language === 'es' ? 'Nave atada con cuerda al cuerno del pez avatar Matsya' : language === 'pt' ? 'Navio atado com corda ao chifre do peixe avatar Matsya' : 'Ship tied with rope to the horn of the fish avatar Matsya',
      mountain: language === 'es' ? 'La Montaña del Norte (Himalaya)' : language === 'pt' ? 'A Montanha do Norte (Himalaia)' : 'The Northern Mountain (Himalayas)',
      birds: language === 'es' ? 'Ninguna' : language === 'pt' ? 'Nenhuma' : 'None',
      divineMotive: language === 'es' ? 'Renovación de la era cósmica al cierre del Manvantara' : language === 'pt' ? 'Renovação da era cósmica no encerramento do Manvantara' : 'Cosmic world age renewal at the close of Manvantara',
      evidenceToGenesis: language === 'es' ? 'COMPARATIVO (Motivo eurasiático independiente)' : language === 'pt' ? 'COMPARATIVO (Motivo eurasiano independente)' : 'COMPARATIVE (Independent Eurasian motif)'
    },
    {
      id: 'popol_vuh_resin_flood',
      tradition: language === 'es' ? 'Maya (Mesoamericana)' : language === 'pt' ? 'Maia (Mesoamericana)' : 'Maya (Mesoamerican)',
      work: 'Popol Vuh, Parte 1',
      hero: language === 'es' ? 'Ninguno (Destrucción de los hombres de madera)' : language === 'pt' ? 'Nenhum (Destruição dos homens de madeira)' : 'None (Total destruction of wooden people)',
      vessel: language === 'es' ? 'Sin nave; animales y ollas se rebelan contra el hombre' : language === 'pt' ? 'Sem barco; animais e panelas revoltam-se contra o homem' : 'No vessel; animals and kitchen pots revolt against mankind',
      mountain: 'N/A',
      birds: language === 'es' ? 'Ninguna' : language === 'pt' ? 'Nenhuma' : 'None',
      divineMotive: language === 'es' ? 'Los hombres de madera no pensaban ni alababan al Corazón del Cielo' : language === 'pt' ? 'Os homens de madeira não pensavam nem louvavam o Coração do Céu' : 'Wooden people had no hearts, no minds, and did not praise Heart of Sky',
      evidenceToGenesis: language === 'es' ? 'COMPARATIVO (Época creacional del Nuevo Mundo)' : language === 'pt' ? 'COMPARATIVO (Época criacional do Novo Mundo)' : 'COMPARATIVE (Independent New World creation epoch)'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-2xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
          <Waves className="w-4 h-4" />
          {f.badge}
        </div>
        <h1 className="text-2xl md:text-4xl font-bold font-display text-[#f5d77f]">
          {f.heroTitle}
        </h1>
        <p className="text-sm text-[#ded5c7] max-w-4xl leading-relaxed">
          {f.heroSubtitle}
        </p>

        {onOpenCompare && (
          <div className="pt-2">
            <button
              onClick={() => onOpenCompare(['gilgamesh_tablet_11_flood', 'atrahasis_tablet_3_flood', 'shatapatha_brahmana_flood', 'popol_vuh_resin_flood'])}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#c99738] text-[#12100e] text-xs font-bold hover:bg-[#dbab4c] transition shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>{f.compareAction} (4-Way Parallel)</span>
            </button>
          </div>
        )}
      </div>

      {/* Comparative Analytical Table */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4 overflow-x-auto text-left">
        <h3 className="text-lg font-bold font-display text-[#f5d77f]">
          {f.heroTitle}
        </h3>

        <table className="w-full text-left text-xs border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-[#362f27] text-[#c99738] font-mono uppercase text-[11px]">
              <th className="py-2.5 px-3">{f.tableWork}</th>
              <th className="py-2.5 px-3">{f.tableHero}</th>
              <th className="py-2.5 px-3">{f.tableVessel}</th>
              <th className="py-2.5 px-3">{f.tableMountain}</th>
              <th className="py-2.5 px-3">{f.tableBirds}</th>
              <th className="py-2.5 px-3">{f.tableEvidence}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#241e17] text-[#ded5c7]">
            {/* Genesis Reference Row */}
            <tr className="bg-[#201a14]/60 font-medium">
              <td className="py-3 px-3">
                <div className="font-bold text-[#f5d77f]">
                  {language === 'es' ? 'Génesis 6–9 (Biblia Hebrea)' : language === 'pt' ? 'Gênesis 6–9 (Bíblia Hebraica)' : 'Genesis 6–9 (Hebrew Bible)'}
                </div>
                <div className="text-[10px] text-[#8e806e]">
                  {language === 'es' ? 'ca. siglos VI–V a.C.' : language === 'pt' ? 'ca. séculos VI–V a.C.' : 'ca. 6th–5th c. BCE'}
                </div>
              </td>
              <td className="py-3 px-3">
                {language === 'es' ? 'Noé (justo en su generación)' : language === 'pt' ? 'Noé (justo em sua geração)' : 'Noah (righteous in his generation)'}
              </td>
              <td className="py-3 px-3">
                {language === 'es' ? 'Tevah (arca) de madera de gofer, calafateada por dentro y por fuera (kpr)' : language === 'pt' ? 'Tevah (arca) de madeira de gofer, calafetada por dentro e por fora (kpr)' : 'Tevah (ark) of gopher wood, pitched inside and out (kfr)'}
              </td>
              <td className="py-3 px-3">
                {language === 'es' ? 'Montes de Ararat' : language === 'pt' ? 'Montes de Ararat' : 'Mountains of Ararat'}
              </td>
              <td className="py-3 px-3 font-mono text-[11px]">
                {language === 'es' ? 'Cuervo → Paloma → Paloma (hoja de olivo)' : language === 'pt' ? 'Corvo → Pomba → Pomba (folha de oliveira)' : 'Raven → Dove → Dove (olive leaf)'}
              </td>
              <td className="py-3 px-3">
                <span className="text-emerald-400 font-bold">
                  {language === 'es' ? 'Texto Estándar' : language === 'pt' ? 'Texto Padrão' : 'Standard Text'}
                </span>
              </td>
            </tr>

            {floodPassages.map(fp => (
              <tr key={fp.id} className="hover:bg-[#1c1814] transition">
                <td className="py-3 px-3">
                  <div className="font-semibold text-[#e8e2d5]">{fp.work}</div>
                  <div className="text-[10px] text-[#a48c68] font-mono">{fp.tradition}</div>
                </td>
                <td className="py-3 px-3">{fp.hero}</td>
                <td className="py-3 px-3">{fp.vessel}</td>
                <td className="py-3 px-3">{fp.mountain}</td>
                <td className="py-3 px-3 font-mono text-[11px]">{fp.birds}</td>
                <td className="py-3 px-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    fp.evidenceToGenesis.includes('STRONG') || fp.evidenceToGenesis.includes('SÓLIDO') || fp.evidenceToGenesis.includes('FORTE')
                      ? 'bg-blue-950/70 border-blue-600/40 text-blue-300'
                      : 'bg-amber-950/70 border-amber-600/40 text-amber-300'
                  }`}>
                    {fp.evidenceToGenesis.split('(')[0]}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Structural Features Box */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/30 shadow-xl space-y-4 text-left">
        <div>
          <h3 className="text-base sm:text-lg font-bold font-display text-[#f5d77f]">
            {f.sharedFeaturesTitle}
          </h3>
          <p className="text-xs text-[#a48c68] mt-0.5">
            {f.sharedFeaturesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2e261e] space-y-1.5">
            <h4 className="text-xs font-bold font-display text-[#f5d77f]">
              1. {f.featureBitumen}
            </h4>
            <p className="text-xs text-[#ded5c7] leading-relaxed">
              {f.featureBitumenDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2e261e] space-y-1.5">
            <h4 className="text-xs font-bold font-display text-[#f5d77f]">
              2. {f.featureCubits}
            </h4>
            <p className="text-xs text-[#ded5c7] leading-relaxed">
              {f.featureCubitsDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2e261e] space-y-1.5">
            <h4 className="text-xs font-bold font-display text-[#f5d77f]">
              3. {f.featureBirds}
            </h4>
            <p className="text-xs text-[#ded5c7] leading-relaxed">
              {f.featureBirdsDesc}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#1b1713] border border-[#2e261e] space-y-1.5">
            <h4 className="text-xs font-bold font-display text-[#f5d77f]">
              4. {f.featureSacrifice}
            </h4>
            <p className="text-xs text-[#ded5c7] leading-relaxed">
              {f.featureSacrificeDesc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
