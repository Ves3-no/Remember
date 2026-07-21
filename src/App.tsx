import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Remember } from "./types";


import Home from "./pages/Home";
import Nav from "./componoments/nav";
import Search from "./pages/Search"


export default function App() {
  const [NewID, setNewID] = useState<number>(Number(localStorage.getItem("NewID")))
  const [SearchInput, setSearchInput] = useState<string>("")
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
  return (
    <div className="bg-background scrollbar-none overflow-scroll">
      <BrowserRouter >
        <Nav SearchInput={SearchInput} setSearchInput={setSearchInput}/>

        <Routes>
          <Route path="/" element={<Home NewID={NewID} setNewID={setNewID} Remembers={Remembers} setRemembers={setRemembers}/>} />
          <Route path="/search" element={<Search SearchInput={SearchInput} Remembers={Remembers} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}