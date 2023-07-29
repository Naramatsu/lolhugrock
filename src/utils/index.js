import Flash from "../assets/Flash.png";
import Cleanse from "../assets/Cleanse.png";
import Exhaust from "../assets/Exhaust.png";
import Barrier from "../assets/Barrier.png";
import Ghost from "../assets/Ghost.png";
import Heal from "../assets/Heal.png";
import Ignite from "../assets/Ignite.png";
import Smite from "../assets/Smite.png";
import Teleport from "../assets/Teleport.png";
import All from "../assets/Icon_All.svg";
import Top from "../assets/Icon_Top.svg";
import Jungle from "../assets/Icon_Jungle.svg";
import Mid from "../assets/Icon_Mid.svg";
import Adc from "../assets/Icon_Adc.svg";
import Support from "../assets/Icon_Support.svg";

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

export const imgBuilder = (option) => {
  switch (option) {
    case "Flash":
      return Flash;
    case "Cleanse":
      return Cleanse;
    case "Exhaust":
      return Exhaust;
    case "Barrier":
      return Barrier;
    case "Ghost":
      return Ghost;
    case "Heal":
      return Heal;
    case "Ignite":
      return Ignite;
    case "Smite":
      return Smite;
    case "Teleport":
      return Teleport;
    case "Top":
      return Top;
    case "Jungle":
      return Jungle;
    case "Mid":
      return Mid;
    case "Adc":
      return Adc;
    case "Support":
      return Support;
    default:
      return All;
  }
};
