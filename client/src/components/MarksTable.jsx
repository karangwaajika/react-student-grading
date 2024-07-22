import { formatToDateString } from "../utils/dateFormatting.mjs";
export default function MarksTable({ marks }) {
  return (
    <>
      <table>
        <caption style={{ backgroundColor: "white", color: "black" }}>
          Student Marks List
        </caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Subject</th>
            <th>Trimester</th>
            <th>Marks</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {marks.length > 0 ? (
            marks.map((studentMarks, index) => {
              return (
                <tr key={index + 1}>
                  <td data-cell="nbr">{index + 1}</td>
                  <td data-cell="name">{studentMarks.studentId.name}</td>
                  <td data-cell="code">{studentMarks.studentId.code}</td>
                  <td data-cell="subject">{studentMarks.subjectId.name}</td>
                  <td data-cell="trimester">{studentMarks.trimester}</td>
                  <td data-cell="marks">{studentMarks.marks}</td>
                  <td data-cell="date">
                    {formatToDateString(studentMarks.createdAt)}
                  </td>
                  <td data-cell="action">
                    <div className="span-div">
                      {studentMarks.marks >= 50 ? (
                        <i className="span span-success">Passed</i>
                      ) : (
                        <i className="span span-fail">Failed</i>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8} style={{ textAlign: "center", color: "red" }}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
