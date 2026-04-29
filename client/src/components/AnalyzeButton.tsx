interface AnalyzeButtonProps {
    onClick : () => void
    text : string
    disabled : boolean
}

export default function AnalyzeButton( {onClick, text, disabled} : AnalyzeButtonProps) {
    return (
        <div className="flex justify-center mt-8 mb-8">
            <button 
            onClick={onClick}
            disabled={disabled} 
            className={`
                ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
                ${disabled && 'opacity-50'}
                ${disabled ? 'hover-scale-100' : 'hover:scale-105'}
                bg-linear-to-r from-[#9333ea] to-[#ef4444]
                transition
                text-white 
                px-8 py-4 
                rounded-2xl text-center font-extrabold 
                shadow-2xs`}>
                <div className="flex gap-2">
                    <div className="flex justify-center gap-1 items-center">
                        <span className="h-2 w-1 rounded-full bg-white animate-bounce"></span>
                        <span className="h-3 w-1 rounded-full bg-white animate-bounce [animation-delay:.2s]"></span>
                        <span className="h-4 w-1 rounded-full bg-white animate-bounce [animation-delay:.4s]"></span>
                    </div>
                    <p className="text-xl">{text}</p>
                    <div className="flex justify-center gap-1 items-center">
                        <span className="h-4 w-1 rounded-full bg-white animate-bounce"></span>
                        <span className="h-3 w-1 rounded-full bg-white animate-bounce [animation-delay:.2s]"></span>
                        <span className="h-2 w-1 rounded-full bg-white animate-bounce [animation-delay:.4s]"></span>
                    </div>
                </div>
            </button>
      </div>
    )
}