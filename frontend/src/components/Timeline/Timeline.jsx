import { DateTime } from "luxon";
import propTypes from "prop-types";
import "./Style.scss";

export default function Timeline({ suggestData }) {
  const format = "yyyy/MM/dd";

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();
  today = `${yyyy}/${mm}/${dd}`;

  const isDateInPast = (dateToTest) => {
    const dataDate = DateTime.fromISO(dateToTest).toFormat(format);
    return today >= dataDate;
  };
  const items = [
    {
      name: `${DateTime.fromISO(suggestData.date).toFormat(format)}`,
      active: true,
    },
    {
      name: `${DateTime.fromISO(suggestData.contribution_date).toFormat(
        format
      )}`,
      active: isDateInPast(suggestData.contribution_date),
    },
    {
      name: `${DateTime.fromISO(suggestData.vote_date).toFormat(format)}`,
      active: isDateInPast(suggestData.vote_date),
    },
    {
      name: `${DateTime.fromISO(suggestData.final_date).toFormat(format)}`,
      active: isDateInPast(suggestData.final_date),
    },
  ];
  const totalItems = items.length;
  const numberOfActiveItems = items.filter((item) => item.active).length;
  const progressBarWidth =
    totalItems > 1 ? ((numberOfActiveItems - 1) / (totalItems - 1)) * 100 : 0;

  return (
    <div className="timeline">
      <div
        className="timelineProgress"
        style={{ width: `${progressBarWidth}%` }}
      />
      <div className="timelineItems">
        {items.map((item) => (
          <div className={`timelineItem${item.active ? " active" : ""}`}>
            <div className="timelineContent"> {item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Timeline.propTypes = {
  suggestData: propTypes.shape({
    date: propTypes.instanceOf(Date).isRequired,
    contribution_date: propTypes.instanceOf(Date).isRequired,
    vote_date: propTypes.instanceOf(Date).isRequired,
    final_date: propTypes.instanceOf(Date).isRequired,
  }).isRequired,
};
