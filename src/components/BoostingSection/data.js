import { allDivisionsList, allLanesList, allSummonersList } from "../../utils";
import { champions } from "./allChamps";

export const formPreferences = [
  {
    name: "Server",
    shape: "chip",
    items: [
      { value: "NA", name: "NA" },
      { value: "LAN", name: "LAN" },
      { value: "LAS", name: "LAS" },
      { value: "BR", name: "BR" },
    ],
  },
  {
    name: "Queue",
    items: [
      { value: "Solo Queue", name: "Solo Queue" },
      { value: "Flex Queue", name: "Flex Queue" },
    ],
  },
  {
    name: "Rol",
    type: "select",
    items: [
      {
        label: "Principal",
        options: allLanesList,
      },
      {
        label: "Secundario",
        options: allLanesList,
      },
    ],
  },
  {
    name: "Summoners",
    type: "select",
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
  name: "Preferences",
  type: "multiple",
  items: [
    {
      label: "Pool de campeones",
      type: "select",
      options: champions,
    },
    {
      label: "Duo Queue",
      type: "toggle",
    },
    {
      label: "Orden Premium",
      type: "toggle",
    },
  ],
};

export const formBoostingRank = [
  {
    name: "boostingRank",
    label: "Rango Actual",
    type: "divisional",
    items: allDivisionsList,
  },
  {
    name: "desiredRank",
    label: "Rango Deseado",
    type: "divisional",
    items: allDivisionsList,
  },
];

export const formPlacementsRank = [
  {
    name: "placementsRank",
    label: "Rango Anterior",
    type: "divisional",
    items: allDivisionsList,
  },
  {
    name: "nroPlacements",
    label: "Número de juegos",
    type: "range",
    min: 1,
    max: 5,
  },
];

export const formNetWinsRank = [
  {
    name: "nwtWinsRank",
    label: "Rango Actual",
    type: "divisional",
    items: allDivisionsList,
  },
  {
    name: "nroNetWins",
    label: "Número de juegos",
    type: "range",
    min: 1,
    max: 10,
  },
];
