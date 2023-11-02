import { ENGLISH, SPANISH } from "../../context/languaje/types";
import {
  ANYFILL,
  FORM_PREFERENCES_NAMES_EN,
  FORM_PREFERENCES_NAMES_ES,
  FORM_TYPES,
  LEAGUES,
  QUEUES,
  SERVERS,
} from "../../utils/constants";
import { champions } from "./allChamps";

const allDivisionsList = [
  LEAGUES.Unranked,
  LEAGUES.Iron,
  LEAGUES.Bronze,
  LEAGUES.Silver,
  LEAGUES.Gold,
  LEAGUES.Platinum,
  LEAGUES.Diamond,
  LEAGUES.Master,
  LEAGUES.GrandMaster,
  LEAGUES.Challenger,
];

const allLanesList = [ANYFILL, "TOP", "JG", "MID", "ADC", "SUPP"];

const allSummonersList = [
  ANYFILL,
  "Flash",
  "Cleanse",
  "Exhaust",
  "Barrier",
  "Ghost",
  "Heal",
  "Ignite",
  "Smite",
  "Teleport",
];

export const formPreferences = [
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.SERVER,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.SERVER,
    },
    shape: "chip",
    items: [
      { value: SERVERS.LAN, name: SERVERS.LAN },
      { value: SERVERS.LAS, name: SERVERS.LAS },
      { value: SERVERS.NA, name: SERVERS.NA },
      { value: SERVERS.BR, name: SERVERS.BR },
    ],
  },
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.QUEUE,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.QUEUE,
    },
    items: [
      { value: QUEUES.SOLO, name: QUEUES.SOLO },
      { value: QUEUES.FLEX, name: QUEUES.FLEX },
    ],
  },
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.ROL,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.ROL,
    },
    type: FORM_TYPES.SELECT,
    items: [
      {
        label: {
          [SPANISH]: FORM_PREFERENCES_NAMES_ES.MAIN,
          [ENGLISH]: FORM_PREFERENCES_NAMES_EN.MAIN,
        },
        options: allLanesList,
      },
      {
        label: {
          [SPANISH]: FORM_PREFERENCES_NAMES_ES.SECONDARY,
          [ENGLISH]: FORM_PREFERENCES_NAMES_EN.SECONDARY,
        },
        options: allLanesList,
      },
    ],
  },
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.SUMMONERS,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.SUMMONERS,
    },
    type: FORM_TYPES.SELECT,
    items: [
      {
        label: "D",
        options: allSummonersList,
      },
      {
        label: "F",
        options: allSummonersList,
      },
    ],
  },
];

export const formAdditionalPreferences = {
  name: {
    [SPANISH]: FORM_PREFERENCES_NAMES_ES.PREFERENCES,
    [ENGLISH]: FORM_PREFERENCES_NAMES_EN.PREFERENCES,
  },
  type: FORM_TYPES.MULTIPLE,
  items: [
    {
      label: {
        [SPANISH]: FORM_PREFERENCES_NAMES_ES.CHAMPIONS_POOL,
        [ENGLISH]: FORM_PREFERENCES_NAMES_EN.CHAMPIONS_POOL,
      },
      type: FORM_TYPES.SELECT,
      options: champions,
    },
    {
      label: {
        [SPANISH]: FORM_PREFERENCES_NAMES_ES.DUO_QUEUE,
        [ENGLISH]: FORM_PREFERENCES_NAMES_EN.DUO_QUEUE,
      },
      type: FORM_TYPES.TOGGLE,
    },
    {
      label: {
        [SPANISH]: FORM_PREFERENCES_NAMES_ES.ORDER_PREMIUM,
        [ENGLISH]: FORM_PREFERENCES_NAMES_EN.ORDER_PREMIUM,
      },
      type: FORM_TYPES.TOGGLE,
    },
  ],
};

export const formBoostingRank = [
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.BOOSTING_RANK_NAME,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.BOOSTING_RANK_NAME,
    },
    label: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.CURRENT_RANK,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.CURRENT_RANK,
    },
    type: FORM_TYPES.DIVISIONAL,
    items: allDivisionsList,
  },
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.DESIRED_RANK_NAME,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.DESIRED_RANK_NAME,
    },
    label: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.DESIRED_RANK,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.DESIRED_RANK,
    },
    type: FORM_TYPES.DIVISIONAL,
    items: allDivisionsList,
  },
];

export const formPlacementsRank = [
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.PLACEMENTS_RANK_NAME,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.PLACEMENTS_RANK_NAME,
    },
    label: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.PREVIOUS_RANK,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.PREVIOUS_RANK,
    },
    type: FORM_TYPES.DIVISIONAL,
    items: allDivisionsList,
  },
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.NRO_PLACEMENTS_RANK_NAME,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.NRO_PLACEMENTS_RANK_NAME,
    },
    label: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.NUMBER_OF_GAMES,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.NUMBER_OF_GAMES,
    },
    type: FORM_TYPES.RANGE,
    min: 1,
    max: 5,
  },
];

export const formNetWinsRank = [
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.NRO_PLACEMENTS_RANK_NAME,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.NRO_PLACEMENTS_RANK_NAME,
    },
    label: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.CURRENT_RANK,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.CURRENT_RANK,
    },
    type: FORM_TYPES.DIVISIONAL,
    items: allDivisionsList,
  },
  {
    name: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.NRO_NETWINS_RANK_NAME,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.NRO_NETWINS_RANK_NAME,
    },
    label: {
      [SPANISH]: FORM_PREFERENCES_NAMES_ES.NUMBER_OF_WINS,
      [ENGLISH]: FORM_PREFERENCES_NAMES_EN.NUMBER_OF_WINS,
    },
    type: FORM_TYPES.RANGE,
    min: 1,
    max: 10,
  },
];
