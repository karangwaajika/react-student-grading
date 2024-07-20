import { Subject } from "../models/subject.mjs";

export const addSubject = (request, response) => {
  const { body } = request;
  const sub = new Subject(body);
  const name = body.name;
  Subject.findOne({ name })
    .then((subj) => {
      if (subj) {
        return response.send({
          success: false,
          message: `${subj.name} already exist`,
          subject: {},
        });
      } else {
        Subject.create(sub)
          .then((newSubj) => {
            return response.send({
              success: true,
              message: "Added successfully",
              subject: {
                name: newSubj.name,
                category: newSubj.category,
                date: newSubj.date,
              },
            });
          })
          .catch((err) => {
            return response.send({
              success: false,
              message: "Error encouted, try again.",
              subject: {},
            });
          });
      }
    })
    .catch((err) => {
      return response.send({
        success: false,
        message: "Error encouted, try again.",
        subject: {},
      });
    });
};

export const viewSubjects = (request, response) => {
  Subject.find()
    .then((subjects) => {
      return response.send({
        success: true,
        message: "Data retrieved Successfully",
        subjects,
      });
    })
    .catch((err) => {
      return response.send({
        success: false,
        message: "Error encouted, try again.",
        subjects: {},
      });
    });
};

export const updateSubject = (request, response) => {
  const {
    body: { id, name, category, date },
  } = request;
  Subject.findByIdAndUpdate(id, { name, category, date })
    .then((sub) => {
      return response.send({
        success: true,
        message: "Subject Updated Successfully.",
        subjects: {},
      });
    })
    .catch((err) => {
      return response.send({
        success: false,
        message: "Error encouted, try again.",
        subjects: {},
      });
    });
};

export const deleteSubject = (request, response) => {
  const {
    body: { id },
  } = request;
  Subject.findByIdAndDelete(id)
    .then((subject) => {
      if (subject) {
        return response.send({
          success: true,
          message: "Subject deleted successfully",
          subjects: {},
        });
      } else {
        return response.send({
          success: false,
          message: "Error encouted, try again.",
          subjects: {},
        });
      }
    })
    .catch((err) => {
      return response.send({
        success: false,
        message: "Error encouted, try again.",
        subjects: {},
      });
    });
};
