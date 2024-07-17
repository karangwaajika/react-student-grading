import { useParams } from "react-router-dom"
export default function SubjectMarks(){
    const params = useParams()
    return(<h1>Subject Marks {params.studentCode}</h1>)
    // todo:: create marks form
}