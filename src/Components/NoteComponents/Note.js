import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from '@mui/icons-material/Edit';
function Note({ id, text, deleteNote, editNote }) {
  return (
    <div className="note">
      <div className="note__body" dangerouslySetInnerHTML={{ __html: text }}></div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
        <EditIcon onClick={() => editNote(id)}
          aria-hidden="true"></EditIcon>
      </div>
    </div>
  );
}

export default Note;
