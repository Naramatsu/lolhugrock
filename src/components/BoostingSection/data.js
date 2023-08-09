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
      { value: "soloq", name: "Solo Queue" },
      { value: "flex", name: "Flex Queue" },
    ],
  },
  {
    name: "Roll",
    type: "select",
    items: [
      {
        label: "Principal",
        options: ["Any", "TOP", "JG", "MID", "ADC", "SUPP"],
      },
      {
        label: "Secundario",
        options: ["Any", "TOP", "JG", "MID", "ADC", "SUPP"],
      },
    ],
  },
  {
    name: "Summoners",
    type: "select",
    items: [
      {
        label: "D",
        options: [
          "Any",
          "Flash",
          "Cleanse",
          "Exhaust",
          "Barrier",
          "Ghost",
          "Heal",
          "Ignite",
          "Smite",
          "Teleport",
        ],
      },
      {
        label: "F",
        options: [
          "Any",
          "Flash",
          "Cleanse",
          "Exhaust",
          "Barrier",
          "Ghost",
          "Heal",
          "Ignite",
          "Smite",
          "Teleport",
        ],
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
    items: [
      "Unranked",
      "Iron",
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Master",
      "GrandMaster",
      "Challenger",
    ],
  },
  {
    name: "desiredRank",
    label: "Rango Deseado",
    items: [
      "Unranked",
      "Iron",
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Master",
      "GrandMaster",
      "Challenger",
    ],
  },
];
