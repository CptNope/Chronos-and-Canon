import React from 'react';
import { EvidenceLevel, RelationshipType } from '../../types';
import { ShieldCheck, Award, GitCompare, HelpCircle, AlertTriangle } from 'lucide-react';

interface EvidenceBadgeProps {
  level: EvidenceLevel;
  relationshipType?: RelationshipType;
  showTooltip?: boolean;
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ level, relationshipType }) => {
  const getLevelConfig = () => {
    switch (level) {
      case 'DOCUMENTED':
        return {
          bg: 'bg-emerald-950/70 text-emerald-300 border-emerald-600/50',
          icon: ShieldCheck,
          label: 'DOCUMENTED',
          desc: 'Direct quotation, manuscript witness, or demonstrable textual dependence.'
        };
      case 'STRONG':
        return {
          bg: 'bg-blue-950/70 text-blue-300 border-blue-500/50',
          icon: Award,
          label: 'STRONG',
          desc: 'Widely recognized relationship in relevant peer-reviewed scholarship.'
        };
      case 'COMPARATIVE':
        return {
          bg: 'bg-amber-950/60 text-amber-300 border-amber-600/50',
          icon: GitCompare,
          label: 'COMPARATIVE',
          desc: 'Meaningful structural, mythic, or thematic parallel without proof of direct transmission.'
        };
      case 'POSSIBLE':
        return {
          bg: 'bg-purple-950/60 text-purple-300 border-purple-500/50',
          icon: HelpCircle,
          label: 'POSSIBLE',
          desc: 'Plausible historical or literary hypothesis, subject to scholarly debate.'
        };
      case 'SPECULATIVE':
        return {
          bg: 'bg-red-950/60 text-red-300 border-red-500/50',
          icon: AlertTriangle,
          label: 'SPECULATIVE',
          desc: 'Hypothesis for which firm historical or manuscript evidence is currently lacking.'
        };
    }
  };

  const config = getLevelConfig();
  const Icon = config.icon;

  return (
    <div className="inline-flex flex-wrap items-center gap-1.5" title={config.desc}>
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wider uppercase border ${config.bg}`}>
        <Icon className="w-3 h-3 flex-shrink-0" />
        <span>{config.label}</span>
      </span>

      {relationshipType && (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium tracking-wide bg-[#201a14] text-[#d4c3aa] border border-[#a48c68]/20">
          {relationshipType}
        </span>
      )}
    </div>
  );
};
