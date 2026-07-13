type LinkCardProps = {
  href: string
  label: string
  accent?: boolean
  disabled?: boolean
  badge?: string
}

export default function LinkCard({ href, label, accent, disabled, badge }: LinkCardProps) {
    return (
        <a 
            href={href} 
            target="_blank"    
            rel="noopener"
            className={`
                flex items-center gap-4 p-4 rounded-xl border transition-colors no-underline
                ${disabled
                    ? 'bg-[#141414] border-[#222] opacity-40 pointer-events-none'
                    : accent
                    ? 'bg-[rgba(200,245,66,0.08)] border-[#c8f542] text-[#c8f542] hover:bg-[rgba(200,245,66,0.13)]'
                    : 'bg-[#141414] border-[#222] text-white hover:border-[#3a3a3a]'
                }
            `}
        >    
            <span className="flex-1 text-sm">{label}</span>
            {badge && (
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[#222] text-[#666] uppercase tracking-wider">
                    {badge}
                </span>
            )}
            <span className="text-base">→</span>
        </a>
    )
}