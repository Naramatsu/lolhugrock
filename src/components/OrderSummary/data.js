import { ENGLISH, SPANISH } from "../../context/languaje/types";

export const noPreferencesSelectedLabel = {
  [SPANISH]: "Aún no hay preferencias seleccionadas.",
  [ENGLISH]: "There are no preferences selected yet.",
};

export const orderSummaryMessageTemplate = (link) => ({
  [SPANISH]: `Hola Coachboost!!!
    Acabo de realizar esta cotización: ${link}
    Me gustaría contactar con ustedes para saber los metodos de pago.`,
  [ENGLISH]: `Hey Coachboost!!!
    I just made this quote: ${link}
    I would like to contact you to find out the payment methods.`,
});
