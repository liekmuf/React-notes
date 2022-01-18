import { useSelector } from "react-redux"
import NotesList from "./NoteList/NotesList"
import NoteListHeader from "./NoteList/NoteListHeader"

const NotesArchive = ({hideArchive}) => {
    const notes = useSelector(state => state.notes.filter(note => !note.isActive))
    return <div>
        <NoteListHeader listName="Archive" onArchive={hideArchive}/>
        <NotesList notes={notes} />
    </div>
}
export default NotesArchive