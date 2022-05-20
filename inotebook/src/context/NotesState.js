

import NoteContext from "./NotesContext";
// import react,{useState} from "react";


const NoteState=(props)=>{
    // const [first, setfirst] = useState(second)
    return(
        // <NoteContext Provider value={state}>
        <NoteContext Provider>
            {props.children}
        </NoteContext>
    )

}


export default NoteState

