import cryptoJS from "crypto-js";

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
  ANYFILL,
  COLORS,
  FORM_PREFERENCES_NAMES_EN,
  FORM_PREFERENCES_NAMES_ES,
  TITLES,
  highElo,
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
    case COLORS.ORANGE:
      return "#F39C12";
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

export const objBuilder = (indexName, items, item, key, languaje) => {
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  if (
    indexName === FORM_PREFERENCES_NAMES.SUMMONERS ||
    indexName === FORM_PREFERENCES_NAMES.ROL
  ) {
    return {
      label: indexName,
      items: [...(items[indexName]?.items || []), `${key} (${item[key]}) `],
    };
  }
  if (indexName === FORM_PREFERENCES_NAMES.CHAMPIONS) {
    return {
      label: indexName,
      items: [...(items[indexName]?.items || []), `${item[key].join(", ")}`],
    };
  }
  if (
    indexName === FORM_PREFERENCES_NAMES.FROM ||
    indexName === FORM_PREFERENCES_NAMES.TO ||
    indexName === FORM_PREFERENCES_NAMES.PREVIOUS_RANK
  ) {
    return {
      label: indexName,
      items: item[key]?.league
        ? divisionCondition(item[key].league, item, key)
        : null,
    };
  }
  if (
    indexName === FORM_PREFERENCES_NAMES.VICTORIES ||
    indexName === FORM_PREFERENCES_NAMES.PLACEMENT_GAMES
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
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  const keys = Object.keys(item);
  const result = {};
  keys.forEach((key) => {
    let indexName = "";
    switch (key) {
      case FORM_PREFERENCES_NAMES.MAIN:
      case FORM_PREFERENCES_NAMES.SECONDARY:
        indexName = FORM_PREFERENCES_NAMES.ROL;
        break;
      case "D":
      case "F":
        indexName = FORM_PREFERENCES_NAMES.SUMMONERS;
        break;
      case FORM_PREFERENCES_NAMES.CURRENT_RANK:
        indexName = FORM_PREFERENCES_NAMES.FROM;
        break;
      case FORM_PREFERENCES_NAMES.DESIRED_RANK:
        indexName = FORM_PREFERENCES_NAMES.TO;
        break;
      case FORM_PREFERENCES_NAMES.CHAMPIONS_POOL:
        indexName = FORM_PREFERENCES_NAMES.CHAMPIONS;
        break;
      case FORM_PREFERENCES_NAMES.NUMBER_OF_WINS:
        indexName = FORM_PREFERENCES_NAMES.VICTORIES;
        break;
      case FORM_PREFERENCES_NAMES.NUMBER_OF_GAMES:
        indexName = FORM_PREFERENCES_NAMES.PLACEMENT_GAMES;
        break;
      default:
        indexName = key;
        break;
    }
    result[indexName] = objBuilder(indexName, result, item, key, languaje);
  });
  return Object.values(result) || [];
};

export const isBtnAvailable = (item, formName, languaje) => {
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  if (
    !item[FORM_PREFERENCES_NAMES.QUEUE] ||
    !item[FORM_PREFERENCES_NAMES.SERVER]
  ) {
    return false;
  }
  if (formName === TITLES.DIVISIONBOOST) {
    if (
      calculateCreditsByDivisions(
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK],
        item[FORM_PREFERENCES_NAMES.DESIRED_RANK]
      ) === 0
    )
      return false;
    if (
      item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.league &&
      (item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGain) &&
      item[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.league &&
      (item[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.lpGain)
    ) {
      return true;
    }
  }
  if (formName === TITLES.NETWINS) {
    if (
      item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.league &&
      (item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGain) &&
      item[FORM_PREFERENCES_NAMES.NUMBER_OF_WINS]?.nroGames > 0
    ) {
      return true;
    }
  }
  if (formName === TITLES.PLACEMENTS) {
    if (
      item[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.league &&
      (item[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.division ||
        item[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.lps) &&
      (item[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.lpGroup ||
        item[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.lpGain) &&
      item[FORM_PREFERENCES_NAMES.NUMBER_OF_GAMES]?.nroGames > 0
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

export const encryptData = (text) => {
  return cryptoJS.AES.encrypt(
    JSON.stringify(text),
    process.env.REACT_APP_SECRET_PASSWORD
  ).toString();
};

export const decryptData = (text) => {
  const bytes = cryptoJS.AES.decrypt(
    text,
    process.env.REACT_APP_SECRET_PASSWORD
  );
  return JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
};

export const divisionCredits = (option) => {
  switch (option) {
    case "Iron":
      return encryptData(process.env.REACT_APP_CREDIT_IRON);
    case "Bronze":
      return encryptData(process.env.REACT_APP_CREDIT_BRONZE);
    case "Silver":
      return encryptData(process.env.REACT_APP_CREDIT_SILVER);
    case "Gold":
      return encryptData(process.env.REACT_APP_CREDIT_GOLD);
    case "Platinum":
      return encryptData(process.env.REACT_APP_CREDIT_PLATINUM);
    case "Diamond":
      return encryptData(process.env.REACT_APP_CREDIT_DIAMOND);
    case "Master":
      return encryptData(process.env.REACT_APP_CREDIT_MASTER);
    case "GrandMaster":
      return encryptData(process.env.REACT_APP_CREDIT_GRANDMASTER);
    case "Challenger":
      return encryptData(process.env.REACT_APP_CREDIT_CHALLENGER);
    default:
      return 0;
  }
};

export const steps = [
  { league: "Iron IV", credits: divisionCredits("Iron") },
  { league: "Iron III", credits: divisionCredits("Iron") },
  { league: "Iron II", credits: divisionCredits("Iron") },
  { league: "Iron I", credits: divisionCredits("Iron") },
  { league: "Bronze IV", credits: divisionCredits("Bronze") },
  { league: "Bronze III", credits: divisionCredits("Bronze") },
  { league: "Bronze II", credits: divisionCredits("Bronze") },
  { league: "Bronze I", credits: divisionCredits("Bronze") },
  { league: "Silver IV", credits: divisionCredits("Silver") },
  { league: "Silver III", credits: divisionCredits("Silver") },
  { league: "Silver II", credits: divisionCredits("Silver") },
  { league: "Silver I", credits: divisionCredits("Silver") },
  { league: "Gold IV", credits: divisionCredits("Gold") },
  { league: "Gold III", credits: divisionCredits("Gold") },
  { league: "Gold II", credits: divisionCredits("Gold") },
  { league: "Gold I", credits: divisionCredits("Gold") },
  { league: "Platinum IV", credits: divisionCredits("Platinum") },
  { league: "Platinum III", credits: divisionCredits("Platinum") },
  { league: "Platinum II", credits: divisionCredits("Platinum") },
  { league: "Platinum I", credits: divisionCredits("Platinum") },
  { league: "Diamond IV", credits: divisionCredits("Diamond") },
  { league: "Diamond III", credits: divisionCredits("Diamond") },
  { league: "Diamond II", credits: divisionCredits("Diamond") },
  { league: "Diamond I", credits: divisionCredits("Diamond") },
  { league: "Master", credits: divisionCredits("Master") },
  { league: "GrandMaster", credits: divisionCredits("GrandMaster") },
  { league: "Challenger", credits: divisionCredits("Challenger") },
];

export const divisionFormat = (league, division) => {
  if (highElo.includes(league)) return league;
  return `${league} ${division}`;
};

export const calculateCreditsByNroGames = (rank, nroGames) => {
  const rankFormatted = divisionFormat(rank.league, rank.division);
  const rankIndex = steps.findIndex((step) => step.league === rankFormatted);
  return (
    Math.round(parseFloat(decryptData(steps[rankIndex]?.credits) * nroGames)) ||
    0
  );
};

export const calculateCreditsByDivisions = (rank, desired) => {
  let total = 0;
  const rankFormatted = divisionFormat(rank.league, rank.division);
  const rankIndex = steps.findIndex((step) => step.league === rankFormatted);
  const desiredFormatted = divisionFormat(desired.league, desired?.division);
  const desiredIndex = steps.findIndex(
    (step) => step.league === desiredFormatted
  );
  if (highElo.includes(desired.league)) {
    return (
      (Math.round(parseFloat(decryptData(steps[desiredIndex]?.credits))) / 4) *
      desired?.lps
    );
  }

  if (rankIndex > desiredIndex) {
    return 0;
  }

  for (let i = rankIndex + 1; i <= desiredIndex; i++) {
    total =
      Math.round((total + parseFloat(decryptData(steps[i].credits))) * 10) / 10;
  }
  return total;
};

export const calculateCreditsByPreferences = (form, languaje) => {
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  let total = 0;
  if (
    form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.league &&
    (form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.division ||
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lps) &&
    (form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGroup ||
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGain) &&
    form[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.league &&
    (form[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.division ||
      form[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.lps) &&
    (form[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.lpGroup ||
      form[FORM_PREFERENCES_NAMES.DESIRED_RANK]?.lpGain)
  ) {
    total += calculateCreditsByDivisions(
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK],
      form[FORM_PREFERENCES_NAMES.DESIRED_RANK]
    );
  }

  if (
    form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.league &&
    (form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.division ||
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lps) &&
    (form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGroup ||
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK]?.lpGain) &&
    form[FORM_PREFERENCES_NAMES.NUMBER_OF_WINS]?.nroGames > 0
  ) {
    total += calculateCreditsByNroGames(
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK],
      form[FORM_PREFERENCES_NAMES.NUMBER_OF_WINS].nroGames
    );
  }

  if (
    form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.league &&
    (form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.division ||
      form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.lps) &&
    (form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.lpGroup ||
      form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]?.lpGain) &&
    form[FORM_PREFERENCES_NAMES.NUMBER_OF_GAMES]?.nroGames > 0
  ) {
    total += calculateCreditsByNroGames(
      form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK],
      form[FORM_PREFERENCES_NAMES.NUMBER_OF_GAMES].nroGames
    );
  }

  if (form[FORM_PREFERENCES_NAMES.QUEUE]) total += 1;
  if (
    form[[FORM_PREFERENCES_NAMES.MAIN]] &&
    form[[FORM_PREFERENCES_NAMES.MAIN]] !== ANYFILL
  )
    total += 1;
  if (
    form[FORM_PREFERENCES_NAMES.SECONDARY] &&
    form[[FORM_PREFERENCES_NAMES.SECONDARY]] !== ANYFILL
  )
    total += 1;
  if (form.D && form.D !== ANYFILL) total += 1;
  if (form.F && form.F !== ANYFILL) total += 1;
  if (form[FORM_PREFERENCES_NAMES.CHAMPIONS_POOL])
    total = total + form[FORM_PREFERENCES_NAMES.CHAMPIONS_POOL]?.length;
  if (form[FORM_PREFERENCES_NAMES.DUO_QUEUE]) total += 1;
  if (form[FORM_PREFERENCES_NAMES.ORDER_PREMIUM]) total += 1;
  return total;
};

export const defineCreditsValue = (form, languaje, currency) => {
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  if (form[FORM_PREFERENCES_NAMES?.SERVER]) {
    return process.env[
      `REACT_APP_CREDIT_COST_VALUE_${currency}_${
        form[FORM_PREFERENCES_NAMES.SERVER]
      }`
    ];
  }
  return 0;
};

export const currencyFormat = (currency) => ({
  style: "currency",
  currency: currency,
  minimumFractionDigits: 2,
});

export const translateToEn = (item) => {
  if (item === "Inividual" || item === "Single") return "single";
  return "team";
};
