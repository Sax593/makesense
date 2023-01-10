import Comments from "@components/Comments/Comments";

import "./Style.scss";

export default function Thread() {
  return (
    <div className="thread">
      <Comments />
      <Comments />
      <Comments />
    </div>
  );
}
