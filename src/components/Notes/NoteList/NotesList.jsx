import { useDispatch } from "react-redux"
import { deleteNote, archiveNote, editNote } from "../../../redux/notesReducer"
import Note from "./Note/Note"

const NotesList = ({notes}) => {
    const dispatch = useDispatch()

    return <div>
        {notes.map((note) => {
            const onDelete = () => {
                dispatch(deleteNote(note.id))
            }
            const onArchive = () => {
                dispatch(archiveNote(note.id))
            } 
            const onEdit = (name, category, content) => {
                dispatch(editNote(name, category, content, note.id))
            }
            return <Note key={note.id}
                name={note.name}
                content={note.content}
                category={note.category}
                created={note.created}
                onArchive={onArchive}
                dates={note.dates}
                onDelete={onDelete}
                onEdit={onEdit}
        />
        })}
    </div>
}
export default NotesList