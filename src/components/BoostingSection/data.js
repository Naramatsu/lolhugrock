export const formPreferences = [
  {
    title: "Servidor",
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
