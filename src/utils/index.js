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
} from "../layout/BoostingSection/data";
import {
  ANYFILL,
  COLORS,
  COP,
  FORM_PREFERENCES_NAMES_EN,
  FORM_PREFERENCES_NAMES_ES,
  LEAGUES,
  TITLES,
  coachTypes,
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

export const summonerAndLaneImgBuilder = (option) => {
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
    case LEAGUES.Unranked:
      return Unranked;
    case LEAGUES.Iron:
      return Iron;
    case LEAGUES.Bronze:
      return Bronze;
    case LEAGUES.Silver:
      return Silver;
    case LEAGUES.Gold:
      return Gold;
    case LEAGUES.Platinum:
      return Platinum;
    case LEAGUES.Diamond:
      return Diamond;
    case LEAGUES.Master:
      return Master;
    case LEAGUES.GrandMaster:
      return GrandMaster;
    case LEAGUES.Challenger:
      return Challenger;
    default:
      return All;
  }
};

export const divisionFrameBuilder = (option) => {
  switch (option) {
    case LEAGUES.Iron:
      return IronFrame;
    case LEAGUES.Bronze:
      return BronzeFrame;
    case LEAGUES.Silver:
      return SilverFrame;
    case LEAGUES.Gold:
      return GoldFrame;
    case LEAGUES.Platinum:
      return PlatinumFrame;
    case LEAGUES.Diamond:
      return DiamondFrame;
    case LEAGUES.Master:
      return MasterFrame;
    case LEAGUES.GrandMaster:
      return GrandMasterFrame;
    case LEAGUES.Challenger:
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
  if (league === LEAGUES.Unranked) return [item[key]?.league];
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

export const validateFormCurrentDesiredRank = (type) => {
  if (highElo.includes(type?.league)) {
    return type?.lps && type?.lpGain;
  }
  return type?.division && type?.lpGroup;
};

export const isBtnAvailable = (item, formName, languaje) => {
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  if (
    !item[FORM_PREFERENCES_NAMES.QUEUE] ||
    !item[FORM_PREFERENCES_NAMES.SERVER]
  )
    return false;

  if (formName === TITLES.DIVISIONBOOST) {
    if (
      calculateCreditsByDivisions(
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK],
        item[FORM_PREFERENCES_NAMES.DESIRED_RANK]
      ) === 0
    )
      return false;
    if (
      validateFormCurrentDesiredRank(
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK]
      ) &&
      validateFormCurrentDesiredRank(item[FORM_PREFERENCES_NAMES.DESIRED_RANK])
    ) {
      return true;
    }
  }
  if (formName === TITLES.NETWINS) {
    if (
      validateFormCurrentDesiredRank(
        item[FORM_PREFERENCES_NAMES.CURRENT_RANK]
      ) &&
      item[FORM_PREFERENCES_NAMES.NUMBER_OF_WINS]?.nroGames > 0
    ) {
      return true;
    }
  }
  if (formName === TITLES.PLACEMENTS) {
    if (
      validateFormCurrentDesiredRank(
        item[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]
      ) &&
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

export const encryptData = (text) =>
  cryptoJS.AES.encrypt(
    JSON.stringify(text),
    process.env.REACT_APP_SECRET_PASSWORD
  ).toString();

export const decryptData = (text) => {
  const bytes = cryptoJS.AES.decrypt(
    text,
    process.env.REACT_APP_SECRET_PASSWORD
  );
  return JSON.parse(bytes.toString(cryptoJS.enc.Utf8));
};

export const divisionCredits = (option) => {
  switch (option) {
    case LEAGUES.Unranked:
      return encryptData(process.env.REACT_APP_CREDIT_UNRANKED);
    case LEAGUES.Iron:
      return encryptData(process.env.REACT_APP_CREDIT_IRON);
    case LEAGUES.Bronze:
      return encryptData(process.env.REACT_APP_CREDIT_BRONZE);
    case LEAGUES.Silver:
      return encryptData(process.env.REACT_APP_CREDIT_SILVER);
    case LEAGUES.Gold:
      return encryptData(process.env.REACT_APP_CREDIT_GOLD);
    case LEAGUES.Platinum:
      return encryptData(process.env.REACT_APP_CREDIT_PLATINUM);
    case LEAGUES.Diamond:
      return encryptData(process.env.REACT_APP_CREDIT_DIAMOND);
    case LEAGUES.Master:
      return encryptData(process.env.REACT_APP_CREDIT_MASTER);
    case LEAGUES.GrandMaster:
      return encryptData(process.env.REACT_APP_CREDIT_GRANDMASTER);
    case LEAGUES.Challenger:
      return encryptData(process.env.REACT_APP_CREDIT_CHALLENGER);
    default:
      return 0;
  }
};

export const preferencesCredits = (option, languaje) => {
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  switch (option) {
    case FORM_PREFERENCES_NAMES.QUEUE:
      return encryptData(process.env.REACT_APP_CREDIT_QUEUE);
    case FORM_PREFERENCES_NAMES.MAIN:
      return encryptData(process.env.REACT_APP_CREDIT_MAIN_ROL);
    case FORM_PREFERENCES_NAMES.SECONDARY:
      return encryptData(process.env.REACT_APP_CREDIT_SECUNDARY_ROL);
    case "D":
      return encryptData(process.env.REACT_APP_CREDIT_SUMMONER_D);
    case "F":
      return encryptData(process.env.REACT_APP_CREDIT_SUMMONER_F);
    case FORM_PREFERENCES_NAMES.CHAMPIONS_POOL:
      return encryptData(process.env.REACT_APP_CREDIT_CHAMPIONS_POOL);
    case FORM_PREFERENCES_NAMES.DUO_QUEUE:
      return encryptData(process.env.REACT_APP_CREDIT_DUO_QUEUE);
    case FORM_PREFERENCES_NAMES.ORDER_PREMIUM:
      return encryptData(process.env.REACT_APP_CREDIT_ORDER_PREMIUM);
    default:
      return 0;
  }
};

export const coaches = {
  JUJO: "Jujo",
  HOBBLER: "Hobbler",
  HUGROCK: "Hugrock",
};

export const validateCoachCreditsByTypeAndCurrency = (
  type,
  currency,
  creditSingleCOP,
  creditSingleUSD,
  creditTeamCOP,
  creditTeamUSD
) => {
  if (type === coachTypes.SINGLE) {
    if (currency === COP) return encryptData(creditSingleCOP);
    return encryptData(creditSingleUSD);
  } else {
    if (currency === COP) return encryptData(creditTeamCOP);
    return encryptData(creditTeamUSD);
  }
};

export const coachCredits = (name, type, currency) => {
  switch (name) {
    case coaches.JUJO:
      return validateCoachCreditsByTypeAndCurrency(
        type,
        currency,
        process.env.REACT_APP_CREDIT_JUJO_INDIVIDUAL_HOUR_COP,
        process.env.REACT_APP_CREDIT_JUJO_INDIVIDUAL_HOUR_USD,
        process.env.REACT_APP_CREDIT_JUJO_GROUP_HOUR_COP,
        process.env.REACT_APP_CREDIT_JUJO_GROUP_HOUR_USD
      );
    case coaches.HOBBLER:
      return validateCoachCreditsByTypeAndCurrency(
        type,
        currency,
        process.env.REACT_APP_CREDIT_HOBBLER_INDIVIDUAL_HOUR_COP,
        process.env.REACT_APP_CREDIT_HOBBLER_INDIVIDUAL_HOUR_USD,
        process.env.REACT_APP_CREDIT_HOBBLER_GROUP_HOUR_COP,
        process.env.REACT_APP_CREDIT_HOBBLER_GROUP_HOUR_USD
      );
    case coaches.HUGROCK:
      return validateCoachCreditsByTypeAndCurrency(
        type,
        currency,
        process.env.REACT_APP_CREDIT_HUGROCK_INDIVIDUAL_HOUR_COP,
        process.env.REACT_APP_CREDIT_HUGROCK_INDIVIDUAL_HOUR_USD,
        process.env.REACT_APP_CREDIT_HUGROCK_GROUP_HOUR_COP,
        process.env.REACT_APP_CREDIT_HUGROCK_GROUP_HOUR_USD
      );
    default:
      return 0;
  }
};

export const steps = [
  { league: LEAGUES.Unranked, credits: divisionCredits(LEAGUES.Unranked) },
  { league: `${LEAGUES.Iron} IV`, credits: divisionCredits(LEAGUES.Iron) },
  { league: `${LEAGUES.Iron} III`, credits: divisionCredits(LEAGUES.Iron) },
  { league: `${LEAGUES.Iron} II`, credits: divisionCredits(LEAGUES.Iron) },
  { league: `${LEAGUES.Iron} I`, credits: divisionCredits(LEAGUES.Iron) },
  { league: `${LEAGUES.Bronze} IV`, credits: divisionCredits(LEAGUES.Bronze) },
  { league: `${LEAGUES.Bronze} III`, credits: divisionCredits(LEAGUES.Bronze) },
  { league: `${LEAGUES.Bronze} II`, credits: divisionCredits(LEAGUES.Bronze) },
  { league: `${LEAGUES.Bronze} I`, credits: divisionCredits(LEAGUES.Bronze) },
  { league: `${LEAGUES.Silver} IV`, credits: divisionCredits(LEAGUES.Silver) },
  { league: `${LEAGUES.Silver} III`, credits: divisionCredits(LEAGUES.Silver) },
  { league: `${LEAGUES.Silver} II`, credits: divisionCredits(LEAGUES.Silver) },
  { league: `${LEAGUES.Silver} I`, credits: divisionCredits(LEAGUES.Silver) },
  { league: `${LEAGUES.Gold} IV`, credits: divisionCredits(LEAGUES.Gold) },
  { league: `${LEAGUES.Gold} III`, credits: divisionCredits(LEAGUES.Gold) },
  { league: `${LEAGUES.Gold} II`, credits: divisionCredits(LEAGUES.Gold) },
  { league: `${LEAGUES.Gold} I`, credits: divisionCredits(LEAGUES.Gold) },
  {
    league: `${LEAGUES.Platinum} IV`,
    credits: divisionCredits(LEAGUES.Platinum),
  },
  {
    league: `${LEAGUES.Platinum} III`,
    credits: divisionCredits(LEAGUES.Platinum),
  },
  {
    league: `${LEAGUES.Platinum} II`,
    credits: divisionCredits(LEAGUES.Platinum),
  },
  {
    league: `${LEAGUES.Platinum} I`,
    credits: divisionCredits(LEAGUES.Platinum),
  },
  {
    league: `${LEAGUES.Diamond} IV`,
    credits: divisionCredits(LEAGUES.Diamond),
  },
  {
    league: `${LEAGUES.Diamond} III`,
    credits: divisionCredits(LEAGUES.Diamond),
  },
  {
    league: `${LEAGUES.Diamond} II`,
    credits: divisionCredits(LEAGUES.Diamond),
  },
  { league: `${LEAGUES.Diamond} I`, credits: divisionCredits(LEAGUES.Diamond) },
  { league: LEAGUES.Master, credits: divisionCredits(LEAGUES.Master) },
  {
    league: LEAGUES.GrandMaster,
    credits: divisionCredits(LEAGUES.GrandMaster),
  },
  {
    league: LEAGUES.Challenger,
    credits: divisionCredits(LEAGUES.Challenger),
  },
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

export const calculateCreditsByOtherPreferences = (param, languaje) =>
  Math.round(parseFloat(decryptData(preferencesCredits(param, languaje))));

export const calculateCreditsByDivisions = (rank, desired) => {
  if (rank.league === LEAGUES.Unranked) return 0;
  let total = 0;
  const rankFormatted = divisionFormat(rank.league, rank.division);
  const rankIndex = steps.findIndex((step) => step.league === rankFormatted);
  const desiredFormatted = divisionFormat(desired.league, desired?.division);
  const desiredIndex = steps.findIndex(
    (step) => step.league === desiredFormatted
  );

  if (rankIndex > desiredIndex) return 0;

  for (let i = rankIndex + 1; i <= desiredIndex; i++) {
    total =
      Math.round((total + parseFloat(decryptData(steps[i].credits))) * 10) / 10;
  }

  if (highElo.includes(desired.league))
    total +=
      (total * desired?.lps) /
      parseInt(process.env.REACT_APP_REGULATION_POINTS);

  return total;
};

export const calculateCreditsByPreferences = (form, languaje) => {
  const FORM_PREFERENCES_NAMES =
    languaje === SPANISH
      ? FORM_PREFERENCES_NAMES_ES
      : FORM_PREFERENCES_NAMES_EN;
  let total = 0;
  if (
    validateFormCurrentDesiredRank(form[FORM_PREFERENCES_NAMES.CURRENT_RANK]) &&
    validateFormCurrentDesiredRank(form[FORM_PREFERENCES_NAMES.DESIRED_RANK])
  ) {
    total += calculateCreditsByDivisions(
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK],
      form[FORM_PREFERENCES_NAMES.DESIRED_RANK]
    );
  }

  if (
    validateFormCurrentDesiredRank(form[FORM_PREFERENCES_NAMES.CURRENT_RANK]) &&
    form[FORM_PREFERENCES_NAMES.NUMBER_OF_WINS]?.nroGames > 0
  ) {
    total += calculateCreditsByNroGames(
      form[FORM_PREFERENCES_NAMES.CURRENT_RANK],
      form[FORM_PREFERENCES_NAMES.NUMBER_OF_WINS].nroGames
    );
  }

  if (
    validateFormCurrentDesiredRank(
      form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK]
    ) &&
    form[FORM_PREFERENCES_NAMES.NUMBER_OF_GAMES]?.nroGames > 0
  ) {
    total += calculateCreditsByNroGames(
      form[FORM_PREFERENCES_NAMES.PREVIOUS_RANK],
      form[FORM_PREFERENCES_NAMES.NUMBER_OF_GAMES].nroGames
    );
  }

  if (form[FORM_PREFERENCES_NAMES.QUEUE])
    total += calculateCreditsByOtherPreferences(
      FORM_PREFERENCES_NAMES.QUEUE,
      languaje
    );

  if (
    form[[FORM_PREFERENCES_NAMES.MAIN]] &&
    form[[FORM_PREFERENCES_NAMES.MAIN]] !== ANYFILL
  )
    total += calculateCreditsByOtherPreferences(
      FORM_PREFERENCES_NAMES.MAIN,
      languaje
    );

  if (
    form[FORM_PREFERENCES_NAMES.SECONDARY] &&
    form[[FORM_PREFERENCES_NAMES.SECONDARY]] !== ANYFILL
  )
    total += calculateCreditsByOtherPreferences(
      FORM_PREFERENCES_NAMES.SECONDARY,
      languaje
    );

  if (form.D && form.D !== ANYFILL)
    total += calculateCreditsByOtherPreferences("D", languaje);

  if (form.F && form.F !== ANYFILL)
    total += calculateCreditsByOtherPreferences("F", languaje);

  if (form[FORM_PREFERENCES_NAMES.CHAMPIONS_POOL])
    total +=
      form[FORM_PREFERENCES_NAMES.CHAMPIONS_POOL]?.length *
      calculateCreditsByOtherPreferences(
        FORM_PREFERENCES_NAMES.CHAMPIONS_POOL,
        languaje
      );

  if (form[FORM_PREFERENCES_NAMES.DUO_QUEUE])
    total += calculateCreditsByOtherPreferences(
      FORM_PREFERENCES_NAMES.DUO_QUEUE,
      languaje
    );

  if (form[FORM_PREFERENCES_NAMES.ORDER_PREMIUM])
    total += calculateCreditsByOtherPreferences(
      FORM_PREFERENCES_NAMES.ORDER_PREMIUM,
      languaje
    );
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
  if (
    item === coachTypes.INDIVIDUAL_CAPITALIZED ||
    item === coachTypes.SINGLE_CAPITALIZED
  )
    return coachTypes.SINGLE;
  return coachTypes.TEAM;
};
