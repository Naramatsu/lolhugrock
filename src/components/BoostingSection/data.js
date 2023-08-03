import { champions } from "./allChamps";

export const formPreferences = [
  {
    title: "Server",
    name: "server",
    shape: "chip",
    items: [
      { value: "NA", name: "NA" },
      { value: "LAN", name: "LAN" },
      { value: "LAS", name: "LAS" },
      { value: "BR", name: "BR" },
    ],
  },
  {
    title: "Queue",
    name: "queue",
    items: [
      { value: "soloq", name: "Solo Queue" },
      { value: "flex", name: "Flex Queue" },
    ],
  },
  {
    title: "Roll",
    name: "roll",
    type: "select",
    items: [
      {
        label: "Principal",
        options: ["Any", "Top", "Jungle", "Mid", "Adc", "Support"],
      },
      {
        label: "Secundario",
        options: ["Any", "Top", "Jungle", "Mid", "Adc", "Support"],
      },
    ],
  },
  {
    title: "Summoners",
    name: "summoners",
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
  title: "Preferences",
  name: "preferences",
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
    title: "Boosting Rank",
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
    title: "Boosting Rank",
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
