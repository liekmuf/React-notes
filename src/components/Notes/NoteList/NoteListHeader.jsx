import folder from "../../../icons/folder.svg"

const NoteListHeader = ({ listName, onArchive, onNewNote}) => {
    return <div>
        <h3>{listName}</h3>
        <li className="row w-100 bg-secondary text-white rounded p-2 mb-2 pr-0">
            <div className="col-2 ">
                Name
            </div>
            <div className="col-2">
                Created
            </div>
            <div className="col-2">
                Category
            </div>
            <div className="col-3">
                Content
            </div>
            <div className="col-2">
                Dates
            </div>
            <div className="col-1">
            <img src={folder} alt="" className="note__button" onClick={onArchive}/>
                {onNewNote&&<span onClick={onNewNote} className="button new-note__button"> New </span>}
            </div>
        </li>
    </div>
}
export default NoteListHeader