import { ENGLISH, SPANISH } from "../../context/languaje/types";

export const hours = {
  [SPANISH]: "Horas",
  [ENGLISH]: "Hours",
};

export const lock = {
  [SPANISH]: "Fijar",
  [ENGLISH]: "Lock",
};

export const cancel = {
  [SPANISH]: "Cancelar",
  [ENGLISH]: "Cancel",
};

export const pick = {
  [SPANISH]: "Seleccionar",
  [ENGLISH]: "Pick",
};

export const coachingType = {
  team: {
    [SPANISH]: "Equipo",
    [ENGLISH]: "Team",
  },
  single: {
    [SPANISH]: "Inividual",
    [ENGLISH]: "Single",
  },
};

export const coachingTypesPreferences = ["single", "team"];

export const coachMessageTemplate = ({ name, coachType, coachHours }) => ({
  [SPANISH]: `Hola Coachboost!!!
    Necesito los servicios del coach ${name}
    para un servicio (${coachType})
    por una(s) ${coachHours} hora(s).`,
  [ENGLISH]: `Hey Coachboost!!!
    I need the services of the coach ${name}
    for a service (${coachType})
    for ${coachHours} hour(s).`,
});
