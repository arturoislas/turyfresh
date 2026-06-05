export default function LinkCard({ href, label, icon }) {
    return (
        <a 
            href={href} 
            target="_blank"    
            rel="noopener"
            className="flex items-center gap-4 bg-[#141414] border border-[#222] rounded-xl text-white no-underline hover:border-[#3a3a3a] transition-colors"
        >
            {icon}
            {label}
        </a>
    )
}