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

import {
  formBoostingRank,
  formNetWinsRank,
  formPlacementsRank,
} from "../components/BoostingSection/data";
import {
  COLORS,
  FORM_PREFERENCES_NAMES_EN,
  FORM_PREFERENCES_NAMES_ES,
  TITLES,
} from "./constants";
import { SPANISH } from "../context/languaje/types";

export const convertColor = (color) => {
  switch (color) {
    case COLORS.PURPLE:
      return "#d441ff";
    case COLORS.GREEN:
      return "#00de8a";
    case COLORS.BLUE:
      return "#39c5d6";
    case COLORS.RED:
      return "#ff3147";
    case COLORS.GOLD:
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
  if (
    indexName === FORM_PREFERENCES_NAMES_EN.SUMMONERS ||
    indexName === FORM_PREFERENCES_NAMES_EN.ROL ||
    indexName === FORM_PREFERENCES_NAMES_ES.SUMMONERS ||
    indexName === FORM_PREFERENCES_NAMES_ES.ROL
  ) {
    return {
      label: indexName,
      items: [...(items[indexName]?.items || []), `${key} (${item[key]}) `],
    };
  }
  if (
    indexName === FORM_PREFERENCES_NAMES_ES.CHAMPIONS ||
    indexName === FORM_PREFERENCES_NAMES_EN.CHAMPIONS
  ) {
    return {
      label: indexName,
      items: [...(items[indexName]?.items || []), `${item[key].join(", ")}`],
    };
  }
  if (
    indexName === FORM_PREFERENCES_NAMES_ES.FROM ||
    indexName === FORM_PREFERENCES_NAMES_ES.TO ||
    indexName === FORM_PREFERENCES_NAMES_ES.PREVIOUS_RANK ||
    indexName === FORM_PREFERENCES_NAMES_EN.FROM ||
    indexName === FORM_PREFERENCES_NAMES_EN.TO ||
    indexName === FORM_PREFERENCES_NAMES_EN.PREVIOUS_RANK
  ) {
    return {
      label: indexName,
      items: item[key]?.league
        ? divisionCondition(item[key].league, item, key)
        : null,
    };
  }
  if (
    indexName === FORM_PREFERENCES_NAMES_ES.VICTORIES ||
    indexName === FORM_PREFERENCES_NAMES_ES.PLACEMENT_GAMES ||
    indexName === FORM_PREFERENCES_NAMES_EN.VICTORIES ||
    indexName === FORM_PREFERENCES_NAMES_EN.PLACEMENT_GAMES
  ) {
    return {
      label: indexName,
      items: item[key]?.nroGames ? item[key].nroGames + "" : "",
    };
  }
  return {
    label: key,
    items:
      typeof item[key] === "boolean" ? (item[key] ? "Yes" : "No") : item[key],
  };
};

export const summaryBuilder = (item, languaje = SPANISH) => {
  const keys = Object.keys(item);
  const result = {};
  keys.forEach((key) => {
    let indexName = "";
    switch (key) {
      case FORM_PREFERENCES_NAMES_ES.MAIN:
      case FORM_PREFERENCES_NAMES_ES.SECONDARY:
      case FORM_PREFERENCES_NAMES_EN.MAIN:
      case FORM_PREFERENCES_NAMES_EN.SECONDARY:
        indexName =
          languaje === SPANISH
            ? FORM_PREFERENCES_NAMES_ES.ROL
            : FORM_PREFERENCES_NAMES_EN.ROL;
        break;
      case "D":
      case "F":
        indexName =
          languaje === SPANISH
            ? FORM_PREFERENCES_NAMES_ES.SUMMONERS
            : FORM_PREFERENCES_NAMES_EN.SUMMONERS;
        break;
      case FORM_PREFERENCES_NAMES_ES.CURRENT_RANK:
      case FORM_PREFERENCES_NAMES_EN.CURRENT_RANK:
        indexName =
          languaje === SPANISH
            ? FORM_PREFERENCES_NAMES_ES.FROM
            : FORM_PREFERENCES_NAMES_EN.FROM;
        break;
      case FORM_PREFERENCES_NAMES_ES.DESIRED_RANK:
      case FORM_PREFERENCES_NAMES_EN.DESIRED_RANK:
        indexName =
          languaje === SPANISH
            ? FORM_PREFERENCES_NAMES_ES.TO
            : FORM_PREFERENCES_NAMES_EN.TO;
        break;
      case FORM_PREFERENCES_NAMES_ES.CHAMPIONS_POOL:
      case FORM_PREFERENCES_NAMES_EN.CHAMPIONS_POOL:
        indexName =
          languaje === SPANISH
            ? FORM_PREFERENCES_NAMES_ES.CHAMPIONS
            : FORM_PREFERENCES_NAMES_EN.CHAMPIONS;
        break;
      case FORM_PREFERENCES_NAMES_ES.NUMBER_OF_WINS:
      case FORM_PREFERENCES_NAMES_EN.NUMBER_OF_WINS:
        indexName =
          languaje === SPANISH
            ? FORM_PREFERENCES_NAMES_ES.VICTORIES
            : FORM_PREFERENCES_NAMES_EN.VICTORIES;
        break;
      case FORM_PREFERENCES_NAMES_ES.NUMBER_OF_GAMES:
      case FORM_PREFERENCES_NAMES_EN.NUMBER_OF_GAMES:
        indexName =
          languaje === SPANISH
            ? FORM_PREFERENCES_NAMES_ES.PLACEMENT_GAMES
            : FORM_PREFERENCES_NAMES_EN.PLACEMENT_GAMES;
        break;
      default:
        indexName = key;
        break;
    }
    result[indexName] = objBuilder(indexName, result, item, key);
  });
  return Object.values(result) || [];
};

export const isBtnAvailable = (item, formName) => {
  if (
    (!item[FORM_PREFERENCES_NAMES_ES.QUEUE] ||
      !item[FORM_PREFERENCES_NAMES_ES.SERVER]) &&
    (!item[FORM_PREFERENCES_NAMES_EN.QUEUE] ||
      !item[FORM_PREFERENCES_NAMES_EN.SERVER])
  ) {
    return false;
  }
  if (formName === TITLES.DIVISIONBOOST) {
    if (
      (item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.league ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.league) &&
      (item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.lps ||
        item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.lpGain ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.lpGain) &&
      (item[FORM_PREFERENCES_NAMES_ES.DESIRED_RANK]?.league ||
        item[FORM_PREFERENCES_NAMES_EN.DESIRED_RANK]?.league) &&
      (item[FORM_PREFERENCES_NAMES_ES.DESIRED_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.DESIRED_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.DESIRED_RANK]?.lps ||
        item[FORM_PREFERENCES_NAMES_ES.DESIRED_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES_ES.DESIRED_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_EN.DESIRED_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_ES.DESIRED_RANK]?.lpGain ||
        item[FORM_PREFERENCES_NAMES_EN.DESIRED_RANK]?.lpGain)
    ) {
      return true;
    }
  }
  if (formName === TITLES.NETWINS) {
    if (
      (item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.league ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.league) &&
      (item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.lps ||
        item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_ES.CURRENT_RANK]?.lpGain ||
        item[FORM_PREFERENCES_NAMES_EN.CURRENT_RANK]?.lpGain) &&
      (item[FORM_PREFERENCES_NAMES_ES.NUMBER_OF_WINS]?.nroGames > 0 ||
        item[FORM_PREFERENCES_NAMES_EN.NUMBER_OF_WINS]?.nroGames > 0)
    ) {
      return true;
    }
  }
  if (formName === TITLES.PLACEMENTS) {
    if (
      (item[FORM_PREFERENCES_NAMES_ES.PREVIOUS_RANK]?.league ||
        item[FORM_PREFERENCES_NAMES_EN.PREVIOUS_RANK]?.league) &&
      (item[FORM_PREFERENCES_NAMES_ES.PREVIOUS_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.PREVIOUS_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES_EN.PREVIOUS_RANK]?.lps ||
        item[FORM_PREFERENCES_NAMES_ES.PREVIOUS_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES_ES.PREVIOUS_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_EN.PREVIOUS_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES_ES.PREVIOUS_RANK]?.lpGain ||
        item[FORM_PREFERENCES_NAMES_EN.PREVIOUS_RANK]?.lpGain) &&
      (item[FORM_PREFERENCES_NAMES_ES.NUMBER_OF_GAMES]?.nroGames > 0 ||
        item[FORM_PREFERENCES_NAMES_EN.NUMBER_OF_GAMES]?.nroGames > 0)
    ) {
      return true;
    }
  }
  return false;
};

export const formRankBuilder = (title) => {
  switch (title) {
    case TITLES.PLACEMENTS:
      return formPlacementsRank;
    case TITLES.NETWINS:
      return formNetWinsRank;
    default:
      return formBoostingRank;
  }
};

export const isOrderEmptyValidator = (form = {}) =>
  Object.keys(form)
    .map((a) => JSON.stringify(form[a]))
    .every((a) => a === JSON.stringify({}));
