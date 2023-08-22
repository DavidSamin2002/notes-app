import LinearProgress from "@mui/material/LinearProgress";
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";

function CreateNote({ textHandler, saveHandler, inputText }) {
 
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <div>
        <ReactQuill value={inputText}
          modules={{
            toolbar: [
              [{ 'header': [1, 2, false] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote', {'color':['black', 'red', 'blue', 'green']}],
              ['clean']
            ],
          }}
          formats={[
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote', 'color',
          ]}
       
          placeholder="Type...."
          onChange={textHandler} />
      </div>
      
      <div className="note__footer">
        <span className="label"> </span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>

    </div>
  );
}

export default CreateNote