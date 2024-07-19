import { Marks } from "../models/marks.mjs";
import { Student } from "../models/student.mjs";

export const addMarks = (request, response) => {
  const {
    body: { subjectId, studentCode, marks, trimester },
  } = request;
  // search student by studentCode in order to get the ID
  Student.findOne({ code: studentCode })
    .then((student) => {
      if (student) {
        const newMarks = new Marks({
          subjectId,
          marks,
          trimester,
          studentId: student._id,
        });
        // check if student has marks to avoid duplication before inserting
        Marks.find({ studentId: student._id })
          .then((studentMarksList) => {
            if (studentMarksList.length > 0) {
              studentMarksList.forEach((studentMarks) => {
                const nowDate = new Date();
                const nowYear = nowDate.getFullYear();
                const markingDate = new Date(studentMarks.createdAt);
                const markingYear = markingDate.getFullYear();

                if (
                  studentMarks.subjectId == subjectId &&
                  markingYear == nowYear &&
                  studentMarks.trimester == trimester
                ) {
                  return response.send({
                    success: false,
                    message: `Marks already inserted for trimester ${trimester} of this year`,
                  });
                } 
              });
               // insert marks
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
              // insert marks as student has none
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
            }
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

export const fetchStudentMarks = (request, response) => {
  const { params } = request;
  Student.findOne({ code: params.studentCode })
    .then((student) => {
      if (student) {
        Marks.find({ studentId: student._id })
          .populate("subjectId")
          .exec()
          .then((studentMarks) => {
            if (studentMarks.length > 0) {
              return response.send({
                success: true,
                message: "Marks fetched successfully",
                studentMarks,
              });
            } else {
              return response.send({
                success: false,
                message: "not Marks found",
              });
            }
          }).catch((err)=>{
            return response.send({
              success: false,
              message: "Error encouted, please try again.",
            });
          })
      } else {
        return response.send({
          success: false,
          message: "Student not found",
        });
      }
    })
    .catch((err) => {
      return response.send({
        success: false,
        message: "Error encounted, please try again.",
      });
    });
};
