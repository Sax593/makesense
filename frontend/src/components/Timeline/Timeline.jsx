import "./Style.scss";

export default function Timeline() {
  const items = [
    {
      name: "10/12/2022",
      active: true,
    },
    {
      name: "18/12/2022",
      active: true,
    },
    {
      name: "05/05/2023",
      active: true,
    },
    {
      name: "28/01/2023",
      active: false,
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
