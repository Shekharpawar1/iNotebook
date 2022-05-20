

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

