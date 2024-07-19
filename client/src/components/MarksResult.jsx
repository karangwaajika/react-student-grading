import { formatToDateString } from "../utils/dateFormatting.mjs";

export default function MarksResult({ marks }) {
  return (
    <div className="marks-result">
      <h3 style={{ marginTop: "5px" }}>Results</h3>
      <div className="container">
        {marks.map((result, index) => {
          return (
            <div className="result-grid" key={index}>
              <div>
                {result.subjectId.name} <b>{result.marks}%</b>
              </div>
              <div className="span-div">
                {result.marks >= 50 ? (
                  <i className="span span-success">Passed</i>
                ) : (
                  <i className="span span-fail">Failed</i>
                )}
              </div>
              <i className="span-date">{formatToDateString(result.createdAt)}</i>
            </div>
          );
        })}
      </div>
    </div>
  );
}
