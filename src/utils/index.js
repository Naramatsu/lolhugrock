import Flash from "../assets/summoners/Flash.png";
import Cleanse from "../assets/summoners/Cleanse.png";
import Exhaust from "../assets/summoners/Exhaust.png";
import Barrier from "../assets/summoners/Barrier.png";
import Ghost from "../assets/summoners/Ghost.png";
import Heal from "../assets/summoners/Heal.png";
import Ignite from "../assets/summoners/Ignite.png";
import Smite from "../assets/summoners/Smite.png";
import Teleport from "../assets/summoners/Teleport.png";

import All from "../assets/Icon_All.svg";

import Top from "../assets/lanes/Icon_Top.svg";
import Jungle from "../assets/lanes/Icon_Jungle.svg";
import Mid from "../assets/lanes/Icon_Mid.svg";
import Adc from "../assets/lanes/Icon_Adc.svg";
import Support from "../assets/lanes/Icon_Support.svg";

import Unranked from "../assets/divisions/Unranked.png";
import Iron from "../assets/divisions/Iron.png";
import Bronze from "../assets/divisions/Bronze.png";
import Silver from "../assets/divisions/Silver.png";
import Gold from "../assets/divisions/Gold.png";
import Platinum from "../assets/divisions/Platinum.png";
import Diamond from "../assets/divisions/Diamond.png";
import Master from "../assets/divisions/Master.png";
import GrandMaster from "../assets/divisions/GrandMaster.png";
import Challenger from "../assets/divisions/Challenger.png";

import IronFrame from "../assets/divisions/IronFrame.png";
import BronzeFrame from "../assets/divisions/BronzeFrame.png";
import SilverFrame from "../assets/divisions/SilverFrame.png";
import GoldFrame from "../assets/divisions/GoldFrame.png";
import PlatinumFrame from "../assets/divisions/PlatinumFrame.png";
import DiamondFrame from "../assets/divisions/DiamondFrame.png";
import MasterFrame from "../assets/divisions/MasterFrame.png";
import GrandMasterFrame from "../assets/divisions/GrandMasterFrame.png";
import ChallengerFrame from "../assets/divisions/ChallengerFrame.png";

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

export const divisionImgBuilder = (option) => {
  switch (option) {
    case "Unranked":
      return Unranked;
    case "Iron":
      return Iron;
    case "Bronze":
      return Bronze;
    case "Silver":
      return Silver;
    case "Gold":
      return Gold;
    case "Platinum":
      return Platinum;
    case "Diamond":
      return Diamond;
    case "Master":
      return Master;
    case "GrandMaster":
      return GrandMaster;
    case "Challenger":
      return Challenger;
    default:
      return All;
  }
};

export const divisionFrameBuilder = (option) => {
  switch (option) {
    case "Iron":
      return IronFrame;
    case "Bronze":
      return BronzeFrame;
    case "Silver":
      return SilverFrame;
    case "Gold":
      return GoldFrame;
    case "Platinum":
      return PlatinumFrame;
    case "Diamond":
      return DiamondFrame;
    case "Master":
      return MasterFrame;
    case "GrandMaster":
      return GrandMasterFrame;
    case "Challenger":
      return ChallengerFrame;
    default:
      return "";
  }
};
