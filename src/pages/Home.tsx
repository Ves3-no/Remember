import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TypeofRemember, Remember } from "../types";

import RemembersComp from "../componoments/Remembers";


export default function Home({NewID, setNewID, Remembers, setRemembers, setPopUpValue }: {NewID : number, setNewID: Dispatch<SetStateAction<number>>, Remembers: Remember[] | undefined, setRemembers : Dispatch<SetStateAction<Remember[] | undefined>>, setPopUpValue: Dispatch<SetStateAction<string>>  }) {
  const [Name, setName] = useState<string>("")
  const [Value, setValue] = useState<string>("")
  const [Type, setType] = useState<TypeofRemember>("Code")
  const createNewRemember = () =>{
    if(Name == "" || Value == "" || NewID == undefined ){
      return
    }
    const NewRemember: Remember = {
      Name: Name,
      Value: Value,
      Type: Type,
      Id: NewID
    }
    setName("")
    setValue("")
    setRemembers((prevRemembers) => [...(prevRemembers ?? []), NewRemember])
    setNewID(NewID+1)
  }
  return <>
      <div id="Home" className="text-text font-main px-4 pt-6 flex flex-col scrollbar-none gap-4">
        <div id="Hearo" className="tracking-[0.03em] ">
          <h1 className="font-mono font-medium text-4xl">REmember</h1>
          <p className="text-text-secondary font-mono">-By <a href="http://ves3.no" className="cursor-pointer hover:text-brand active:text-brand">Ves3.no</a></p>
        </div>
        <div id="New-Remember-Card" className="bg-surface-light rounded-2xl border-surface border flex-col px-3 py-4.5">
            <div className="flex gap-1.5 items-center justify-between w-full py-1 ">
              <input type="text" id="Name-Input" onChange={(e)=> setName(e.currentTarget.value)} className="bg-surface border w-full border-background p-3 text-[16px] rounded-lg h-8 placeholder:text-text-secondary text-text hover:outline-brand hover:outline-1 focus:outline-1 focus:outline-brand " placeholder="Name" value={Name} />
              <select id="Chose-Code/Note" value={Type} onChange={(e)=> setType(e.currentTarget.value as TypeofRemember)} className="bg-surface border border-background p-1 text-[14px] rounded-lg h-8 placeholder:text-text-secondary text-text hover:bg-brand focus:bg-brand hover:border-surface focus:border-surface focus:outline-none ">
                <option value="Code">Code</option>
                <option value="Note">Note</option>
              </select>
              <button id="Create" onClick={createNewRemember} className="text-surface bg-brand h-8 aspect-square cursor-pointer flex items-center justify-center rounded-full hover:bg-brand-hover active:bg-brand-hover">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5716 13.4284H0V10.5716H10.5716V0H13.4284V10.5716H24V13.4284H13.4284V24H10.5716V13.4284Z"/>
                  </svg>
              </button>
            </div>
            <textarea id="Code/Notes-Input" onChange={(e)=> setValue(e.currentTarget.value)} value={Value} className="w-full mt-2.5 bg-surface border border-background p-1.5 text-[16px] rounded-lg h-18 placeholder:text-text-secondary text-text hover:outline-brand hover:outline-1 focus:outline-1 focus:outline-brand resize-none scrollbar-none" />
        </div>
        <div id="Remember-List-Holder">
          <h2 className="tracking-[0.03em] font-mono font-medium text-2xl ">REmembers</h2>
          <div id="Remember-List" className="flex flec-col mt-4 overflow-scroll scrollbar-none">
            <RemembersComp Remembers={Remembers} setRemembers={setRemembers} Results={undefined} typeofsort={"All"} setPopUpValue={setPopUpValue} />
          </div>
        </div>
      </div>
  </>;
}
