export default function SubjectTable({
  subjects,
  openModal,
  rowToEdit,
  rowToDelete,
}) {
  return (
    <>
      <table>
        <caption>Subject List</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.length > 0 ? (
            subjects.map((subject, index) => {
              return (
                <tr key={index + 1}>
                  <td data-cell="nbr">{index + 1}</td>
                  <td data-cell="name">{subject.name}</td>
                  <td data-cell="category">{subject.category}</td>
                  <td data-cell="date">{subject.date}</td>
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
              <td colSpan={4} style={{ textAlign: "center", color: "red" }}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
