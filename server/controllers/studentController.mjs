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

export const updateStudent = (request, response) => {
  const {
    body: { id, name, favoriteSubject, academicYear, code },
  } = request;
  Student.findByIdAndUpdate(id, { name, favoriteSubject, academicYear, code })
    .then((student) => {
      response.send({
        success: true,
        message: "Student updated Successfully",
      });
    })
    .catch((err) => {
      response.send({
        success: false,
        message: "Error encouted, try again.",
      });
    });
};

export const deleteStudent = (request, response) => {
  const {
    body: { id },
  } = request;
  Student.findByIdAndDelete(id)
    .then((student) => {
      if (student) {
        response.send({
          success: true,
          message: "Student deleted successfully.",
        });
      } else {
        response.send({
          success: false,
          message: "Error encouted, try again.",
        });
      }
    })
    .catch((err) => {
      response.send({
        success: true,
        message: "Error encouted, try again.",
      });
    });
};

export const autoFetchStudent = (request, response) => {
  const {
    query: { name },
  } = request;
  if (name) {
    Student.find({ name: { $regex: "" + name + "", $options: "i" } })
      .then((students) => {
        response.send({
          success: true,
          message: "Successfully retrieved.",
          students,
        });
      })
      .catch((err) => {
        response.send({
          success: false,
          message: "Error Fetching data.",
          students: [],
        });
      });
  } else {
    response.send({
      success: false,
      message: "Empty list.",
      students: [],
    });
  }
};

export const fetchStudent = (request, response) => {
  const { params } = request;
  Student.findOne({ code: params.studentCode })
    .then((student) => {
      if (student) {
        response.send({
          success: true,
          message: "Student fetched successfully",
          student,
        });
      } else {
        response.send({
          success: false,
          message: "Student not found",
          student: [],
        });
      }
    })
    .catch((err) => {
      response.send({
        success: false,
        message: "Error encouted, try again.",
        student: [],
      });
    });
};
