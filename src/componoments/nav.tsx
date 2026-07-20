import { useNavigate } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
export default function Nav({SearchInput, setSearchInput}: {SearchInput: string, setSearchInput: Dispatch<SetStateAction<string>>;}) {
    const navigate = useNavigate();
    const SearchKeyPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            navigate("/search")
        }
    }
    return(
    <>
        <nav className="h-18 bg-surface flex px-4 justify-between flex-row items-center border-b border-border">
            <div id="Logo" onClick={()=> navigate("/")} className="cursor-pointer">
                <svg width="68" height="43.19" className="text-brand" viewBox="0 0 74 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M60.7128 25.5885L62.1769 31.0526L60.1769 34.5167L51.5167 29.5167L45.5167 39.909L42.7846 40.641L42.0526 37.909L48.0526 27.5167L39.3923 22.5167L41.3923 19.0526L46.8564 17.5885L53.8564 5.4641L52.1244 4.4641L54.1244 1L71.4449 11L69.4449 14.4641L67.7128 13.4641L60.7128 25.5885ZM46.3287 21.9026L57.2406 28.2026L56.3987 25.0607L64.2487 11.4641L57.3205 7.4641L49.4705 21.0607L46.3287 21.9026Z" />
                    <path d="M2.944 32.8038V9.44385H10.176C11.5627 9.44385 12.7787 9.73185 13.824 10.3078C14.8693 10.8625 15.68 11.6412 16.256 12.6438C16.832 13.6465 17.12 14.8198 17.12 16.1638C17.12 17.7425 16.704 19.0972 15.872 20.2278C15.0613 21.3585 13.952 22.1372 12.544 22.5638L17.44 32.8038H14.048L9.568 22.8838H5.824V32.8038H2.944ZM5.824 20.2918H10.176C11.3707 20.2918 12.3307 19.9185 13.056 19.1718C13.7813 18.4038 14.144 17.4012 14.144 16.1638C14.144 14.9052 13.7813 13.9025 13.056 13.1558C12.3307 12.4092 11.3707 12.0358 10.176 12.0358H5.824V20.2918ZM22.3875 32.8038V9.44385H35.8275V12.0678H25.2355V19.2998H34.7075V21.8918H25.2355V30.1798H35.8275V32.8038H22.3875Z" />
                </svg>
            </div>
            <div id="Search-Bar" className="mr-3">
                <div className="flex items-center justify-center">
                    <input type="text" className="w-56 h-10 placeholder-text-secondary p-4 bg-background border-border border-2 rounded-4xl text-text hover:outline-brand hover:outline-1 focus:outline-1 focus:outline-brand " placeholder="Search memories..." value={SearchInput} onChange={(e)=> setSearchInput(e.currentTarget.value)} onKeyDown={SearchKeyPressed}/>
                    <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="-ml-10 text-text-secondary">
                        <path d="M26.4 27.9777L17.7557 19.3333C17.089 19.8962 16.3149 20.337 15.4333 20.6557C14.5518 20.9741 13.6148 21.1333 12.6223 21.1333C10.2148 21.1333 8.17589 20.2981 6.50567 18.6277C4.83522 16.9574 4 14.9334 4 12.5557C4 10.1779 4.83522 8.15378 6.50567 6.48333C8.17589 4.81289 10.2073 3.97767 12.6 3.97767C14.9778 3.97767 16.9981 4.81289 18.661 6.48333C20.3241 8.15378 21.1557 10.1779 21.1557 12.5557C21.1557 13.5186 21.0001 14.4408 20.689 15.3223C20.3779 16.2037 19.926 17.0148 19.3333 17.7557L28 26.3777L26.4 27.9777ZM12.6 18.911C14.3556 18.911 15.85 18.2907 17.0833 17.05C18.3167 15.8093 18.9333 14.3112 18.9333 12.5557C18.9333 10.8001 18.3167 9.30189 17.0833 8.061C15.85 6.82033 14.3556 6.2 12.6 6.2C10.8296 6.2 9.324 6.82033 8.08333 8.061C6.84267 9.30189 6.22233 10.8001 6.22233 12.5557C6.22233 14.3112 6.84267 15.8093 8.08333 17.05C9.324 18.2907 10.8296 18.911 12.6 18.911Z" />
                    </svg>
                </div>
            </div>
        </nav>
    </>
  )
}
