import { useEffect, useState } from "react";
import type { Remember } from "../types";
import type { Dispatch, SetStateAction } from "react";
import RemembersComp from "../componoments/Remembers";

export default function Search({SearchInput, Remembers, setRemembers}: {SearchInput: string, Remembers: Remember[] | undefined, setRemembers : Dispatch<SetStateAction<Remember[] | undefined>> }) {
  const [results, setResults] = useState<Remember[]>()
  useEffect(()=>{
    const list = Remembers?.filter(item => item.Value.includes(SearchInput) || item.Name.includes(SearchInput))
    setResults(list)
  }, [SearchInput])
  return <div className="px-4 pt-6 flex flex-col text-text gap-4">
    <h1 className="font-mono font-medium text-4xl text-text">Results</h1>
    <div>
        <RemembersComp Remembers={Remembers} setRemembers={setRemembers} Results={results} typeofsort={"Search"}/>
    </div>
  </div>;
}