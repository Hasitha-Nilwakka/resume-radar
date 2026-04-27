import { createPortal } from "react-dom";

interface ConfirmModelProps {
    onConfirm : () => void
    onCancel : () => void
}

export default function ConfirmModal({onConfirm, onCancel} : ConfirmModelProps) {
    return createPortal(
        <div
            onClick={onCancel}
            className="
                fixed inset-0
                flex justify-center items-center
                bg-black/70 dark:bg-white/70
                px-5 md:px-20 lg:px-50 xl:px-70
            ">
            <div 
                onClick={(e) => e.stopPropagation()}
                className="
                bg-white dark:bg-black
                px-5 py-5 md:py-7 lg:px-10 lg:py-10
                rounded-lg
                flex flex-col
                gap-7
                ">
                <p className="
                    text-lg font-semibold 
                    text-theme-navy-blue dark:text-dark-bright-green
                ">This will show a mock demo of how results of an analysis looks like. Do you want to proceed ?</p>
                <div className="flex justify-center gap-5 md:gap-10 ">
                    <button
                    onClick={onConfirm} 
                    className="
                        cursor-pointer
                        hover:scale-105 transition
                        border 
                        px-5 py-2 
                        rounded-xl 
                        text-lg font-semibold 
                        shadow-theme-orange dark:shadow-dark-crayan shadow-sm 
                        text-theme-orange dark:text-dark-crayan">Let's Go</button>
                    <button 
                    onClick={onCancel}
                    className="
                        cursor-pointer
                        hover:scale-105 transition
                        border 
                        px-5 py-2 
                        rounded-xl 
                        text-lg font-semibold 
                        shadow-theme-purple dark:shadow-dark-purple shadow-sm 
                        text-theme-purple dark:text-dark-purple">Cancel</button>
                </div>
            </div>
        </div>,
        document.body
    )
}