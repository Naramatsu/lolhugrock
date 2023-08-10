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
    case "TOP":
      return Top;
    case "JG":
      return Jungle;
    case "MID":
      return Mid;
    case "ADC":
      return Adc;
    case "SUPP":
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

export const titlOptions = (options = {}) => ({
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 0.5,
  ...options,
});

const divisionCondition = (league, item, key) => {
  const highElo = ["Master", "GrandMaster", "Challenger"];
  if (highElo.includes(league))
    return [
      item[key]?.league || "",
      item[key]?.lps ? ` ${item[key].lps} LP` : "",
      item[key]?.lpGain ? `, (${item[key].lpGain} LP)` : "",
    ];
  return [
    item[key]?.league || "",
    item[key]?.division ? ` ${item[key].division}` : "",
    item[key]?.lpGroup ? `, (${item[key].lpGroup} LP)` : "",
  ];
};

export const objBuilder = (indexName, items, item, key) => {
  if (indexName === "Summoners" || indexName === "Roles") {
    return {
      label: indexName,
      items: [...(items[indexName]?.items || []), `${key} (${item[key]}) `],
    };
  }
  if (indexName === "Campeones") {
    return {
      label: indexName,
      items: [...(items[indexName]?.items || []), `${item[key].join(", ")}`],
    };
  }
  if (indexName === "Desde" || indexName === "Hasta") {
    return {
      label: indexName,
      items: item[key]?.league
        ? divisionCondition(item[key].league, item, key)
        : null,
    };
  }
  return {
    label: key,
    items:
      typeof item[key] === "boolean" ? (item[key] ? "Yes" : "No") : item[key],
  };
};

export const summaryBuilder = (item) => {
  const keys = Object.keys(item);
  const result = {};
  keys.forEach((key) => {
    let indexName = "";
    switch (key) {
      case "Principal":
      case "Secundario":
        indexName = "Roles";
        result[indexName] = objBuilder(indexName, result, item, key);
        break;
      case "D":
      case "F":
        indexName = "Summoners";
        result[indexName] = objBuilder(indexName, result, item, key);
        break;
      case "Rango Actual":
        indexName = "Desde";
        result[indexName] = objBuilder(indexName, result, item, key);
        break;
      case "Rango Deseado":
        indexName = "Hasta";
        result[indexName] = objBuilder(indexName, result, item, key);
        break;
      case "Pool de campeones":
        indexName = "Campeones";
        result[indexName] = objBuilder(indexName, result, item, key);
        break;
      default:
        indexName = key;
        result[indexName] = objBuilder(indexName, result, item, key);
        break;
    }
  });
  return Object.values(result) || [];
};

export const isBtnAvailable = (item, formName) => {
  if (formName === "Division Boost") {
    if (
      item["Queue"] &&
      item["Server"] &&
      item["Rango Actual"]?.league &&
      (item["Rango Actual"]?.division || item["Rango Actual"]?.lps) &&
      (item["Rango Actual"]?.lpGroup || item["Rango Actual"]?.lpGain) &&
      item["Rango Deseado"]?.league &&
      (item["Rango Deseado"]?.division || item["Rango Deseado"]?.lps) &&
      (item["Rango Deseado"]?.lpGroup || item["Rango Deseado"]?.lpGain)
    ) {
      return true;
    }
  }
  return false;
};
