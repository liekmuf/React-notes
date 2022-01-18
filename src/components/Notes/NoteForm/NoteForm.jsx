import { useState } from "react"
import { useSelector } from "react-redux"

const NoteForm = ({ saveNote, oldName = "", oldCategory = "", oldContent = "" }) => {
    const minFormLength = 3
    const categories = useSelector(store => store.categories)
    const [name, setName] = useState(oldName)
    const [content, setContent] = useState(oldContent)
    const [category, setCategory] = useState(oldCategory || categories[0])
    const isValid = formValue => formValue.length >= minFormLength
    const isDisabledButton = !(isValid(name) && isValid(content))
    
    const onNameChange = (event) => {
        setName(event.target.value)
    }
    const onContentChange = (event) => {
        setContent(event.target.value)
    }
    const onCategorySelect = (event) => {
        setCategory(event.target.value)
    }
    const onSaveClick = event => {
        event.preventDefault()
        setName("")
        setContent("")
        saveNote(name, category, content)
    }
    return <form className="border p-3 m-3 row pr-0  mb-4">
        <input className="form-control mb-2" placeholder="Name" value={name} onChange={onNameChange} />
        <textarea className="w-100 form-control mb-2" type="text " placeholder="Content" value={content} onChange={onContentChange} />
        <div className="d-flex justify-content-between pr-3">
            <select className="btn btn-outline-secondary dropdown-toggle mr-4" value={category} onChange={onCategorySelect}>
                {categories.map(category => <option key={category}>{category}</option>)}
            </select>
            <button disabled={isDisabledButton}className="btn row btn-secondary col-2 col-md-offset-4" onClick={onSaveClick}>Save</button>
        </div>
    </form>
}
export default NoteForm