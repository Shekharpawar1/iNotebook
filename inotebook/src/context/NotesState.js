

import {NoteContext} from "./NotesContext";
import React,{useState} from "react";


export const NoteState=(props)=>{
   const note= [{
        "_id": "62861b6fa0267fccdb11361c",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:26:55.757Z",
        "__v": 0
      },
      {
        "_id": "62861b9762f650c0de1dfb72",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:27:35.849Z",
        "__v": 0
      },
      {
        "_id": "62861b9962f650c0de1dfb74",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:27:37.195Z",
        "__v": 0
      },
      {
        "_id": "62861b9a62f650c0de1dfb76",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:27:38.529Z",
        "__v": 0
      },
      {
        "_id": "62861bb562f650c0de1dfb78",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:28:05.234Z",
        "__v": 0
      },
      {
        "_id": "62861bc3bed5cca5761a491b",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:28:19.456Z",
        "__v": 0
      },
      {
        "_id": "62861bd4bee738b70440d6c5",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:28:36.724Z",
        "__v": 0
      },
      {
        "_id": "62861c17bee738b70440d6c8",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:29:43.711Z",
        "__v": 0
      },
      {
        "_id": "62861c31fafcda846ebaa00b",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:30:09.858Z",
        "__v": 0
      },
      {
        "_id": "62861c575c66386e7576ace7",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:30:47.031Z",
        "__v": 0
      },
      {
        "_id": "62861ca4ea3e0cec262c143e",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:32:04.634Z",
        "__v": 0
      },
      {
        "_id": "62861cf590a3a3a4cb05cbad",
        "user": "6285fe0e5275f803471e6b2f",
        "title": "title",
        "description": "test note",
        "tages": "General",
        "date": "2022-05-19T10:33:25.289Z",
        "__v": 0
      }
    ]

    const [notes, setNotes] = useState(note)
    // const [first, setfirst] = useState(second)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
        {/* <NoteContext Provider> */}
            {props.children}
        </NoteContext.Provider>
    )

}


// export default NoteState

