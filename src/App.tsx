import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import type { Remember } from "./types";


import Home from "./pages/Home";
import Nav from "./componoments/nav";
import Search from "./pages/Search"


export default function App() {
  const [NewID, setNewID] = useState<number>(Number(localStorage.getItem("NewID")))
  const [SearchInput, setSearchInput] = useState<string>("")
  const [PopUpValue, setPopUpValue] = useState<string>("")
  const PopUp = useRef<HTMLDivElement>(null)
  const [Remembers, setRemembers] = useState<Remember[] | undefined>(()=>{
    const exist = localStorage.getItem("Remembers")
    return exist ? exist != "undefined" ? JSON.parse(exist) as Remember[] : undefined : undefined
  })
  useEffect(()=>{
    localStorage.setItem("NewID", String(NewID))
  }, [NewID])
  useEffect(()=>{
    localStorage.setItem("Remembers", JSON.stringify(Remembers))
  }, [Remembers])
  useEffect(()=>{
    if(PopUpValue == ""){
      return
    }
    PopUp.current?.classList.add("-translate-y-13")
    setTimeout(() => {
      PopUp.current?.classList.remove("-translate-y-13")
      
    }, 2000);
    setTimeout(() => {
      setPopUpValue("")
    }, 2200);
  }, [PopUpValue])
  return (
    <div className="bg-background scrollbar-none h-full">
      <BrowserRouter>
        <Nav SearchInput={SearchInput} setSearchInput={setSearchInput}/>

        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                NewID={NewID} 
                setNewID={setNewID} 
                Remembers={Remembers} 
                setRemembers={setRemembers} 
                setPopUpValue={setPopUpValue} 
              />
            } 
          />
          <Route 
            path="/search" 
            element={
              <Search 
                SearchInput={SearchInput} 
                Remembers={Remembers} 
                setRemembers={setRemembers} 
                setPopUpValue={setPopUpValue} 
              />
            } 
          />
        </Routes>

        <div id="popUp" ref={PopUp} className="fixed -bottom-8 bg-brand left-1/2 -translate-x-1/2 min-w-16 p-2 rounded-2xl px-4 text-center text-text transition-all ease-in-out ">
            {PopUpValue}
        </div>
      </BrowserRouter>
    </div>
  );
}