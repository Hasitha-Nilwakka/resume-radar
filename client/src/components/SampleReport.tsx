import { createPortal } from "react-dom";
import ResultPanel from "./ResultPanel";
import { mockData } from "../data/mockData";
import AnalyzeButton from "./AnalyzeButton";

interface SampleReportProps {
    closeReport : () => void
}

export default function SampleReport({closeReport} : SampleReportProps) {

    return createPortal(
        <div className="
                2xl:w-[80%] mx-auto
                fixed flex flex-col
                inset-0
                item-center
                overflow-scroll
                bg-white dark:bg-black
        ">
            <div className="flex justify-between px-4 py-5">
                <p className="text-theme-purple dark:text-dark-purple text-xl font-semibold md:text-2xl">This is an example output</p>
                <button
                    onClick={closeReport} 
                    className="cursor-pointer border px-2 rounded-lg shadow-sm shadow-theme-pink dark:shadow-dark-bright-green text-theme-pink dark:text-dark-bright-green">X</button>
            </div>
            <ResultPanel {...mockData}/>
            <div className="flex justify-center">
                <AnalyzeButton onClick={closeReport} text="Try with your data"/>
            </div>
        </div>,
        document.body
    )
}