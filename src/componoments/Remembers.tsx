import type { Remember } from "../types";
import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Typeof } from "../types";

import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

export default function Remembers({Remembers, setRemembers, typeofsort, Results, setPopUpValue} : {Remembers : Remember[] | undefined, setRemembers: Dispatch<SetStateAction<Remember[] | undefined>>, typeofsort: Typeof, Results: Remember[] | undefined, setPopUpValue: Dispatch<SetStateAction<string>>}) {
      useEffect(() => {
    hljs.highlightAll();
  });
  return <div className="flex flex-col gap-3 w-full">
        {(typeofsort == "All" ? Remembers : Results)?.map((remember)=>{
            const copytoclipboard = () => {
                navigator.clipboard.writeText(remember.Value)
                setPopUpValue("Copied to Clipboard")
            }
            const deleateRemember = () => {
                    const updatedUsers = Remembers?.filter(item => item.Id !== remember.Id);
                    setRemembers(updatedUsers)
                    setPopUpValue("Deleated")
            }
            return(
                <div key={remember.Id} id={`Remember${remember.Id}`} className="bg-surface text-text rounded-r-3xl rounded-l-md flex flex-row justify-start font-main border border-border w-full">
                    <span className="w-4 bg-brand inline-block rounded-l-md shrink-0 hover:bg-brand-hover"></span>
                    <div className="flex flex-col overflow-hidden p-3 gap-2 w-full">
                        
                        <div className="flex flex-row justify-between gap-2">
                            <h1 className="font-mono">{remember.Name}</h1>
                            <div className="flex flex-row gap-1.5">
                                <button onClick={deleateRemember} className="text-text-secondary hover:text-red-400 cursor-pointer active:text-red-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                </button>
                                <button onClick={copytoclipboard} className="text-text-secondary hover:text-text active:text-text cursor-pointer ">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"/></svg>
                                </button>
                            </div>
                        </div>
                        {remember.Type == "Code" ?
                        <pre className="w-full text-wrap overflow-hidden rounded-xl border border-border">
                            <code>
                                {remember.Value}
                            </code>
                            
                        </pre> : 
                        <p className="text-text-secondary font-mono">{remember.Value}</p>}
                    </div>
                </div>
            )
        })}
  </div>;
}