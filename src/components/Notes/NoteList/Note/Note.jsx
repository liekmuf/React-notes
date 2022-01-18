import trashIcon from "../../../../icons/trash.svg"
import folderIcon from "../../../../icons/folder.svg"
import pencilIcon from "../../../../icons/pencil.svg"
import NoteForm from "../../NoteForm/NoteForm"
import { useState } from "react"

const Note = ({ name, created, category, content, dates, onDelete, onArchive, onEdit }) => {
    const [isEditMode, setEditMode] = useState(false)
    const saveNote=(name, category, content)=>{
        onEdit(name, category, content)
        setEditMode(false)
    }

    if(isEditMode) return <NoteForm oldName={name} oldCategory={category} oldContent={content} saveNote={saveNote}/>
    
    return  <div className="row w-100 p-2 border border-secondaty pr-0 mb-2"><li className="row w-100 p-2">
        <div className="col-2 font-weight-bold">{name}</div>
        <div className="col-2">{created}</div>
        <div className="col-2">{category}</div>
        <div className="col-3">{content?.slice(0, 24)} </div>
        <div className="col-2"> {dates?.[0] || ""}</div>
        <div className="col-1">
            <img onClick={()=>setEditMode(true)} src={pencilIcon} className="note__button" alt=""></img>
            <img onClick={onArchive} src={folderIcon} className="note__button" alt=""></img>
            <img onClick={onDelete} src={trashIcon} className="note__button" alt=""></img>
        </div>
    </li>
    </div>
    
}
export default Note