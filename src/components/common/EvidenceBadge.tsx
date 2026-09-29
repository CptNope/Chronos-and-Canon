import React from 'react';
import { EvidenceLevel, RelationshipType } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { ShieldCheck, Award, GitCompare, HelpCircle, AlertTriangle } from 'lucide-react';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  relationshipType?: RelationshipType;
  showTooltip?: boolean;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ level, relationshipType }) => {
  const { t } = useLanguage();

  const getLevelConfig = () => {
    switch (level) {
      case 'DOCUMENTED':
        return {
          bg: 'bg-emerald-950/70 text-emerald-300 border-emerald-600/50',
          icon: ShieldCheck,
          label: t.evidence.documented,
          desc: t.evidenceDescriptions.DOCUMENTED
        };
      case 'STRONG':
        return {
          bg: 'bg-blue-950/70 text-blue-300 border-blue-500/50',
          icon: Award,
          label: t.evidence.strong,
          desc: t.evidenceDescriptions.STRONG
        };
      case 'COMPARATIVE':
        return {
          bg: 'bg-amber-950/60 text-amber-300 border-amber-600/50',
          icon: GitCompare,
          label: t.evidence.comparative,
          desc: t.evidenceDescriptions.COMPARATIVE
        };
      case 'POSSIBLE':
        return {
          bg: 'bg-purple-950/60 text-purple-300 border-purple-500/50',
          icon: HelpCircle,
          label: t.evidence.possible,
          desc: t.evidenceDescriptions.POSSIBLE
        };
      case 'SPECULATIVE':
        return {
          bg: 'bg-red-950/60 text-red-300 border-red-500/50',
          icon: AlertTriangle,
          label: t.evidence.speculative,
          desc: t.evidenceDescriptions.SPECULATIVE
        };
    }
  };

  const config = getLevelConfig();
  const Icon = config.icon;
  const translatedRelationship = relationshipType
    ? t.relationshipTypes[relationshipType] || relationshipType
    : undefined;

  return (
    <div className="inline-flex flex-wrap items-center gap-1.5" title={config.desc}>
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border ${config.bg}`}>
        <Icon className="w-3 h-3 flex-shrink-0" />
        <span>{config.label}</span>
      </span>

      {translatedRelationship && (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-[#201a14] text-[#d4c3aa] border border-[#a48c68]/20">
          {translatedRelationship}
        </span>
      )}
    </div>
  );
};
