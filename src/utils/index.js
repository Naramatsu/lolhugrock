export const convertColor = (color) => {
  switch (color) {
    case "purple":
      return "#d441ff";
    case "green":
      return "#00de8a";
    case "blue":
      return "#39c5d6";
    case "red":
      return "#ff3147";
    case "gold":
      return "#c8aa6e";
    default:
      return "#000";
  }
};

export const isSelected = (selected, actualItem) =>
  selected === actualItem ? "selected" : "";
