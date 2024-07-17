import { useParams } from "react-router-dom"
export default function BehaviorMarks() {
  const params = useParams()
  return <h1>Behavior Marks {params.studentCode}</h1>;
  // todo:: create a form
}
