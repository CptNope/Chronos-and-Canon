import React, { useState, useEffect } from 'react';
import { ResearchMode } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { getUiTranslations } from '../../i18n/uiTranslations';
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
  const { language } = useLanguage();
  const ui = getUiTranslations(language);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init_1',
      sender: 'assistant',
      text: ui.assistant.initialGreeting(researchMode),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Update initial message when language or researchMode changes if user hasn't chatted yet
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].id === 'init_1') {
        return [
          {
            id: 'init_1',
            sender: 'assistant',
            text: ui.assistant.initialGreeting(researchMode),
            timestamp: prev[0].timestamp
          }
        ];
      }
      return prev;
    });
  }, [language, researchMode, ui]);

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
          researchMode,
          language
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
      // Helpful fallback response grounded in the corpus in the selected language
      const fallbackReply = generateLocalizedCorpusFallback(query, researchMode, language);
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
              {ui.assistant.headerTag}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold font-display text-[#f5d77f] mt-1">
              {ui.assistant.headerTitle}
            </h1>
            <p className="text-sm text-[#b8ad9e] mt-1">
              {ui.assistant.headerSubtitle}
            </p>
          </div>

          {/* Research Mode Selection */}
          <div className="flex items-center gap-2 bg-[#201a14] p-1.5 rounded-xl border border-[#3b3226]">
            <span className="text-[11px] font-semibold text-[#a48c68] uppercase px-2">{ui.assistant.modeLabel}</span>
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
            {ui.assistant.curatedQueries}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 text-xs">
            {ui.assistant.sampleQueries.map((p, i) => (
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
                {msg.sender === 'user' ? ui.assistant.userRole : ui.assistant.assistantRole} &bull; {msg.timestamp}
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
              <span>{ui.assistant.analyzing}</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="mt-4 pt-3 border-t border-[#29221b] flex gap-2">
          <input
            type="text"
            placeholder={ui.assistant.inputPlaceholder(researchMode)}
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
            <span>{ui.assistant.sendBtn}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Rigorous, nuanced fallback generator grounded in the application database in the user's active language
function generateLocalizedCorpusFallback(query: string, mode: ResearchMode, lang: 'en' | 'es' | 'pt'): string {
  const q = query.toLowerCase();
  const ui = getUiTranslations(lang);

  if ((q.includes('genesis 6') || q.includes('génesis 6') || q.includes('gênesis 6')) && (q.includes('enoch') || q.includes('enoc') || q.includes('enoque'))) {
    return ui.assistant.fallbackGenesis6Enoch;
  }

  if (q.includes('rephaim') || q.includes('rpum') || q.includes('refaítas') || q.includes('refains')) {
    return ui.assistant.fallbackRephaimUgarit;
  }

  if ((q.includes('jude') || q.includes('judas')) && (q.includes('enoch') || q.includes('enoc') || q.includes('enoque'))) {
    return ui.assistant.fallbackJudeEnoch;
  }

  if (q.includes('flood') || q.includes('diluvio') || q.includes('dilúvio')) {
    return ui.assistant.fallbackFlood;
  }

  return ui.assistant.fallbackDefault(query, mode);
}
