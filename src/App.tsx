import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import type { Remember } from "./types";

import Home from "./pages/Home";
import Nav from "./componoments/nav";
import Search from "./pages/Search"


export default function App() {
  const [NewID, setNewID] = useState<number>(0)
  const [SearchInput, setSearchInput] = useState<string>("")
  const [Remembers, setRemembers] = useState<Remember[]>()


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