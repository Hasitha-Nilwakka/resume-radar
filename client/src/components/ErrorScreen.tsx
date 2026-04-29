interface ErrorScreenProps {
    setShowError : () => void
}

export default function ErrorScreen({setShowError} : ErrorScreenProps) {
    return (
    <div className="fixed inset-0 flex justify-center items-center dark:bg-white/70 bg-black/90 w-screen h-screen px-5 z-100"> 
        <div className="bg-white dark:bg-black px-5 py-5 rounded-lg shadow-theme-pink inset-shadow-theme-pink dark:shadow-dark-bright-green dark:inset-shadow-dark-bright-green inset-shadow-xs shadow-xs">
            <div 
                className="flex justify-end pb-2"
            >
                    <button className="text-theme-orange dark:text-dark-bright-green text-lg font-bold" onClick={setShowError}>X</button>
            </div>
            <div className="mb-5">
                <p className="text-theme-purple dark:text-dark-bright-green font-semibold text-lg">An error occured while analyzing data. Please try again in a while</p>
            </div>
        </div>
    </div>
    )
}