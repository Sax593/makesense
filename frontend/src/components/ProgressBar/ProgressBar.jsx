import propTypes from "prop-types";
import "./style.scss";

export default function ProgressBar({ priority }) {
  return (
    <div className="containerprogress">
      {priority === 0 ? (
        <div className="fillerprogressnull">
          <span className="labelprogress">1%</span>
        </div>
      ) : (
        ""
      )}
      {priority === 1 ? (
        <div className="fillerprogresslow">
          <span className="labelprogress">25%</span>
        </div>
      ) : (
        ""
      )}
      {priority === 2 ? (
        <div className="fillerprogressmedium">
          <span className="labelprogress">50%</span>
        </div>
      ) : (
        ""
      )}
      {priority === 3 ? (
        <div className="fillerprogressheight">
          <span className="labelprogress">75%</span>
        </div>
      ) : (
        ""
      )}
      {priority === 4 ? (
        <div className="fillerprogressclosed">
          <span className="labelprogress">100%</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

ProgressBar.propTypes = {
  priority: propTypes.number.isRequired,
};
