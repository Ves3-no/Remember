import type { Remember } from "../types";

export default function Remembers({Remembers} : {Remembers : Remember[] | undefined}) {
  return <>
        {Remembers?.map((remember)=>{
            return(
                <div key={remember.Id} id={`Remember${remember.Id}`}>
                    
                </div>
            )
        })}
  </>;
}