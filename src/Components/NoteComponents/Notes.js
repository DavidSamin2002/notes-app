import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note"; 
import { v4 as uuid } from "uuid";
import SearchBar from "../NavBarComponents/SearchBar";
function Notes() {
  //states
  const [notesSearch, setNotesSearch] = useState([]);
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  // get text and store in state
  const textHandler = (value) => {
    setInputText(value);
  };

  // add new note to the state array
  const saveHandler = () => {
    
    console.log(inputText)
    if(inputText===""){
      alert("A blank note cannot be saved");
      return ;
    }
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]);
    setNotesSearch((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]);
    //clear the textarea
    setInputText("");
   
  };
  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    setNotesSearch(filteredNotes)
  };
  const editNote = (id) => {
    debugger
    const currentNote = notes.find(note => note.id === id);
    setInputText(currentNote.text)
    deleteNote(id)
  };
  const onSearch = (value) => {
  
    
   
    if(!value){
      setNotes(notesSearch) 
      return

    }
   
   const arr = notes.filter((note) => note.text.includes(value) );
    setNotes(arr)
    
}
  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
      setNotesSearch(data)
    }
  }, []);

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      
       <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
      <br/>
   <SearchBar onSearch={onSearch} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
     
    </div>
  );
}

export default Notes;