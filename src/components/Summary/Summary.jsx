import { useSelector } from "react-redux"
import SummaryCategory from "./SummaryCategory"
import SummaryHead from "./SummaryHead"

const Summary = () =>{
    const categoties = useSelector(state=>state.categories)
    return <div>
        <SummaryHead/>
        {categoties.map(category=><SummaryCategory category={category}/>)}
    </div>
}
export default Summary