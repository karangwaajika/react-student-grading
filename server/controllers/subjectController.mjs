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
