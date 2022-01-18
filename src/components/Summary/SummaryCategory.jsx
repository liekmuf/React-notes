import { useSelector } from "react-redux"

const SummaryCategory = ({ category }) => {
    const active = useSelector(state => state.notes.filter(note => note.category === category && note.isActive).length)
    const archived = useSelector(state => state.notes.filter(note => note.category === category && !note.isActive).length )

    return <div className="row w-100 p-2 border border-secondaty pr-0 mb-2 accordion-header ">
        <div className="col-5 ">{category}</div>
        <div className="col-3 ">{active}</div>
        <div className="col-3 ">{archived}</div>
    </div>
}
export default SummaryCategory