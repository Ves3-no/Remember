import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { TypeofRemember, Remember } from "../types";

import RemembersComp from "../componoments/Remembers";


export default function Home({NewID, setNewID, Remembers}: {NewID : number, setNewID: Dispatch<SetStateAction<number>>, Remembers: Remember[] | undefined  }) {
  const [Name, setName] = useState<string>()
  const [Value, setValue] = useState<string>()
  const [Type, setType] = useState<TypeofRemember>()
  const createNewRemember = () =>{

  }
  return <>
      <div id="Home" className="text-text font-main px-4 pt-6 flex flex-col">
        <div id="Hearo" className="tracking-[0.03em] ">
          <h1 className="font-mono font-medium text-4xl">REmember</h1>
          <p className="text-text-secondary font-mono">-By Ves3.no</p>
        </div>
        <div id="New-Remember-Card" className="bg-surface-light">
            <input type="text" id="Name-Input"/>
            <div>
              <select id="Chose-Code/Note">
                <option value="Code">Code</option>
                <option value="Note">Note</option>
              </select>
              <button id="Create">

              </button>
            </div>
            <input type="text" id="Code/Notes-Input"/>
        </div>
        <div id="Remember-List-Holder">
          <h2 className="tracking-[0.03em] font-mono font-medium text-2xl ">REmembers</h2>
          <div id="Remember-List">
            <RemembersComp/>
          </div>
        </div>
      </div>
  </>;
}
