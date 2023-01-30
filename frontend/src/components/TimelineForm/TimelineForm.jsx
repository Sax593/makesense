import "./Style.scss";

export default function TimelineForm() {
  const items = [
    {
      name: "10/12/2022",
      active: true,
    },
    {
      name: "05/05/2023",
      active: false,
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
    <div className="timelineForm">
      <div
        className="timelineProgress"
        style={{ width: `${progressBarWidth}%` }}
      />
      <div className="timelineItemsForm">
        {items.map((item) => (
          <div className={`timelineItemForm${item.active ? " active" : ""}`}>
            <div className="timelineContentForm"> {item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
