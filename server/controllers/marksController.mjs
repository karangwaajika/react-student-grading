import { Marks } from "../models/marks.mjs";
import { Student } from "../models/student.mjs";

export const addMarks = (request, response) => {
  const {
    body: { subjectId, studentCode, marks },
  } = request;
  Student.findOne({ code: studentCode })
    .then((student) => {
      if (student) {
        const newMarks = new Marks({
          subjectId,
          marks,
          studentId: student._id,
        });
        Marks.create(newMarks)
          .then(() => {
            return response.send({
              success: true,
              message: "Marks inserted successfully",
            });
          })
          .catch((err) => {
            return response.send({
              success: false,
              message: "Error encouted, try again.",
            });
          });
      } else {
        return response.send({
          success: false,
          message: "Student doesn't exist",
        });
      }
    })
    .catch((err) => {
      return response.send({
        success: false,
        message: "Error encouted, try again.",
      });
    });
};
