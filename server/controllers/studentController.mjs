import { Student } from "../models/student.mjs";

export const addStudent = (request, response) => {
  const {
    body: { name, code, academicYear, favoriteSubject },
  } = request;
  const student = new Student({
    name,
    code,
    academicYear,
    favoriteSubject,
  });

  Student.findOne({ code })
    .then((std) => {
      if (std) {
        return response.send({
          success: false,
          message: `${std.code} already exist`,
        });
      } else {
        Student.create(student)
          .then((newStudent) => {
            return response.send({
              success: true,
              message: "Student added successfully",
            });
          })
          .catch((err) => {
            console.log(err);
            return response.send({
              success: false,
              message: "Error encouted, try again.",
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return response.send({
        success: false,
        message: "Error encouted, try again.",
      });
    });
};

export const viewStudents = (request, response) => {
  Student.find({})
    .populate("favoriteSubject")
    .exec()
    .then((students) => {
      response.send({
        success: true,
        message: "Data retrieved Successfully",
        students,
      });
    })
    .catch((err) => {
      response.send({
        success: false,
        message: "Error encouted, try again.",
      });
    });
};