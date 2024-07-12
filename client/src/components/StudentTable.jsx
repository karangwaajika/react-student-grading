export default function StudentTable({
    students,
    openModal,
    rowToEdit,
    rowToDelete,
  }) {
    return (
      <>
        <table>
          <caption>Student List</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Academic Year</th>
              <th>Subject</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => {
                return (
                  <tr key={index + 1}>
                    <td data-cell="nbr">{index + 1}</td>
                    <td data-cell="name">{student.name}</td>
                    <td data-cell="code">{student.code}</td>
                    <td data-cell="academicYear">{student.academicYear}</td>
                    <td data-cell="favoriteSubject">{student.favoriteSubject.name}</td>
                    <td data-cell="date">{student.createdAt}</td>
                    <td data-cell="action">
                      <i
                        className="fa fa-pencil"
                        onClick={() => {
                          rowToEdit(index);
                        }}
                      ></i>{" "}
                      <i
                        className="fa fa-trash-can"
                        style={{ color: "red" }}
                        onClick={() => {
                          rowToDelete(index);
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", color: "red" }}>
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }
  