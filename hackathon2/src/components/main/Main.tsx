
import { useEffect, useState } from "react";
import "./Main.css"
export default function Main() {
    interface Note {
        id: number;
        content: string;
    }
   const [allNotes, setAllNotes] = useState<Note[]>([]);
   const [newNote, setNewNote] = useState<Note>({
    id: Math.floor(Math.random() * 1000),
    content: ''
   });
   const handleAdd = ()=> {
    if (newNote.content === "") {
        alert("Vui lòng nhập ghi chú")
    } else {
        setAllNotes([...allNotes, newNote]);
        const allNote = JSON.stringify([...allNotes, newNote]);
        localStorage.setItem('notes', allNote);
        setNewNote({
            id: Math.floor(Math.random() * 1000),
            content: ""
        })
    }
    
   }
   const renderNotes = ()=>{
    let allNote = localStorage.getItem("notes");
    let notes = allNote? JSON.parse(allNote):[];
    setAllNotes(notes);
   }
   useEffect(() => {
    renderNotes();
   },[])
   const handleDelete = (id: number) => {
    let index = allNotes.findIndex((note) => note.id === id);
    allNotes.splice(index, 1);
    let allNote = JSON.stringify([...allNotes]);
    localStorage.setItem('notes', allNote);
    renderNotes();
   }
  return (
    <>       
    <div id="container">
        <div id="header">
            <h1>Note App</h1>
            <i className="fa-solid fa-trash"></i>
          
        </div>
        <div id="main">
            <div className="main__form">
                <div className="formInput">
                    <p className="formInput__title">Title</p>
                    <div className="formInput__input">
                        <input 
                        className="input" 
                        placeholder="Take a note" 
                        name="content"
                        value={newNote.content}
                        type="text" 
                        onChange={(e) => setNewNote({...newNote, content: e.target.value})}
                        />
                    </div>
                </div>
                <div className="btn" onClick={handleAdd}>
                    <span className="btn__add">+</span>
                </div>
            </div>
            <div className="renderApp">
                {allNotes.map((note) => (
                    <div className="renderApp__noteForm">
                    <div className="renderApp__note">
                        <p className="renderApp__note--word">
                            {note.content}
                        </p>
                    </div>
                    <div className="renderApp__delete">
                        <span className="material-symbols-outlined" style={{color:"#F1B710",fontWeight:"900"}} onClick={()=>handleDelete(note.id)}>
                            delete
                        </span>
                    </div>
                    
                </div>
                ))}
                
               
                

            </div>

        </div>
    </div>


    </>
  )
}
