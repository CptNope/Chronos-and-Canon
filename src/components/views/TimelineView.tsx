import React, { useState } from 'react';
import { texts } from '../../data/texts';
import { manuscripts } from '../../data/manuscripts';
import { useLanguage } from '../../i18n/LanguageContext';
import { Clock, Calendar, Filter, Sparkles, AlertCircle } from 'lucide-react';

export const TimelineView: React.FC = () => {
  const { t, language } = useLanguage();
  const [timelineGrouping, setTimelineGrouping] = useState<'COMPOSITION' | 'SETTING' | 'MANUSCRIPT'>('COMPOSITION');
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  // Sort texts chronologically based on numeric composition BCE
  const sortedTexts = [...texts].sort((a, b) => a.chronology.numericCompositionBCE - b.chronology.numericCompositionBCE);

  const filteredTexts = filterCategory === 'ALL'
    ? sortedTexts
    : sortedTexts.filter(t => t.category === filterCategory);

  return (
    <div className="space-y-6">
      {/* Header and Explanation */}
      <div className="p-6 rounded-2xl bg-[#161311] border border-[#a48c68]/20 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#c99738] uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              {t.timeline.title}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              {language === 'es' ? 'Cronología de Textos y Manuscritos Antiguos' : language === 'pt' ? 'Linha do Tempo de Textos e Manuscritos Antigos' : 'Ancient Text & Manuscript Timeline'}
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1 max-w-3xl">
              {t.timeline.subtitle}
            </p>
          </div>

          {/* Grouping Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-[#201a14] border border-[#3b3226]">
            <button
              onClick={() => setTimelineGrouping('COMPOSITION')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                timelineGrouping === 'COMPOSITION'
                  ? 'bg-[#c99738] text-[#12100e]'
                  : 'text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              {language === 'es' ? 'Por Fecha de Composición' : language === 'pt' ? 'Por Data de Composição' : 'By Composition Date'}
            </button>
            <button
              onClick={() => setTimelineGrouping('SETTING')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                timelineGrouping === 'SETTING'
                  ? 'bg-[#c99738] text-[#12100e]'
                  : 'text-[#a48c68] hover:text-[#e8e2d5]'
              }`}
            >
              {language === 'es' ? 'Por Escenario del Relato' : language === 'pt' ? 'Por Cenário do Relato' : 'By Story Setting'}
            </button>
          </div>
        </div>

        {/* Critical Methodological Banner */}
        <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-600/30 text-amber-200/90 text-xs leading-relaxed space-y-1">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-300">
            <AlertCircle className="w-4 h-4 text-amber-400" />
            {language === 'es'
              ? 'Método Académico: La falacia de colapsar el escenario narrativo en la fecha de composición'
              : language === 'pt'
              ? 'Método Acadêmico: A falácia de colapsar o cenário narrativo na data de composição'
              : 'Scholarly Method: The Fallacy of Collapsing Setting into Composition'}
          </div>
          <p>
            {language === 'es'
              ? 'Las obras seudoepigráficas y mitológicas antiguas (como 1 Enoc, Jubileos o Atrahasis) con frecuencia sitúan sus relatos en tiempos primordiales o prediluvianos ("Escenario del Relato"). Sin embargo, la crítica textual e histórica sitúa su composición redactada en crisis históricas precisas (época helenística, exilio o Bronce Tardío), mientras que nuestros manuscritos físicos sobrevivientes pueden datar de siglos más tarde todavía.'
              : language === 'pt'
              ? 'As obras pseudoepígrafas e mitológicas antigas (como 1 Enoque, Jubileus ou Atrahasis) frequentemente situam as suas narrativas em tempos primordiais ou pré-diluvianos ("Cenário do Relato"). Contudo, a crítica textual e histórica data a sua composição real em crises históricas específicas, ao passo que os nossos manuscritos físicos sobreviventes podem datar de séculos mais tarde ainda.'
              : 'Ancient pseudepigrapha and mythological works (such as 1 Enoch, Jubilees, or Atrahasis) frequently frame their narratives in primeval or antediluvian times ("Claimed Setting"). However, critical scholarship dates their actual written codification to specific historical crises, while our physical manuscript witnesses may date centuries later still.'}
          </p>
        </div>
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 md:pl-10 space-y-8 before:content-[''] before:absolute before:left-3 md:before:left-5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#c99738] before:via-[#60a5fa] before:to-[#c99738]/20">
        {filteredTexts.map(text => (
          <div key={text.id} className="relative group">
            {/* Timeline Marker Point */}
            <div className="absolute -left-[27px] md:-left-[35px] top-4 w-4 h-4 rounded-full bg-[#181512] border-2 border-[#c99738] group-hover:border-[#f5d77f] group-hover:scale-125 transition-transform shadow-md" />

            {/* Timeline Entry Card */}
            <div className="p-6 rounded-2xl bg-[#151210] border border-[#a48c68]/30 shadow-xl space-y-3.5 hover:border-[#c99738]/60 transition text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-[#28211a]">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-[#201a14] text-[#c99738] border border-[#c99738]/30">
                    {text.chronology.estimatedDateOfComposition.split('(')[0]}
                  </span>
                  <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-[#2a2219] text-[#a48c68]">
                    {text.category}
                  </span>
                </div>
                <span className="text-xs text-[#a48c68] font-mono">
                  {text.originalLanguage}
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#f5d77f]">
                {text.title}
              </h3>

              <p className="text-sm text-[#ded5c7] leading-relaxed">
                {text.summary}
              </p>

              {/* Explicit Tripartite Distinction */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] space-y-1">
                  <div className="text-[10px] uppercase font-bold text-[#c99738]">
                    {language === 'es' ? '1. Escenario del Relato' : language === 'pt' ? '1. Cenário do Relato' : '1. Claimed Setting'}
                  </div>
                  <div className="text-xs text-[#e8e2d5] font-serif">
                    {text.chronology.dateOfStorySetting}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] space-y-1">
                  <div className="text-[10px] uppercase font-bold text-[#60a5fa]">
                    {language === 'es' ? '2. Composición Estimada' : language === 'pt' ? '2. Composição Estimada' : '2. Estimated Composition'}
                  </div>
                  <div className="text-xs text-[#e8e2d5] font-serif">
                    {text.chronology.estimatedDateOfComposition}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#1b1713] border border-[#2b241c] space-y-1">
                  <div className="text-[10px] uppercase font-bold text-[#34d399]">
                    {language === 'es' ? '3. Manuscrito Más Antiguo' : language === 'pt' ? '3. Manuscrito Mais Antigo' : '3. Earliest Surviving MS'}
                  </div>
                  <div className="text-xs text-[#e8e2d5] font-serif">
                    {text.chronology.dateOfEarliestSurvivingManuscript}
                  </div>
                </div>
              </div>

              {/* Physical Witnesses */}
              <div className="pt-2 text-xs text-[#8e806e] flex items-center gap-1.5 flex-wrap">
                <strong className="text-[#a48c68]">
                  {language === 'es' ? 'Testigos Manuscritos Primarios:' : language === 'pt' ? 'Testemunhos Manuscritos Primários:' : 'Primary Witness Scrolls:'}
                </strong>
                {text.primaryManuscriptWitnesses.map((witness, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-[#100e0c] border border-[#262019] text-[#b8ad9e] font-mono text-[11px]">
                    {witness}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
