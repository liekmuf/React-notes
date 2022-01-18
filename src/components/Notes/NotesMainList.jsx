import { useSelector } from "react-redux"
import NotesList from "./NoteList/NotesList"
import NoteListHeader from "./NoteList/NoteListHeader"
import NoteForm from "./NoteForm/NoteForm"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addNote } from "../../redux/notesReducer"

const NotesMainList = ({ showArchive }) => {
    const [isFormHidden, setFormHidden] = useState(true)
    const notes = useSelector(state => state.notes.filter(note => note.isActive))

    const dispatch = useDispatch()
    
    const createNote = (name, category, content) => {
        dispatch(addNote(name, category, content))
        setFormHidden(true)
    }
    const onNewNote = () => setFormHidden(false)

    return <div>
        <NoteListHeader listName="Notes" onArchive={showArchive} onNewNote={onNewNote}/>
        {isFormHidden || <NoteForm saveNote={createNote}/>}
        <NotesList notes={notes} />
    </div>
}
export default NotesMainList