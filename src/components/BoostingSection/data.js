export const serverAndQueueForm = [
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
];
