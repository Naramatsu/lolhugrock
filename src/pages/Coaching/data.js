import { ENGLISH, SPANISH } from "../../context/languaje/types";
import { coachCredits, coaches, decryptData } from "../../utils";
import { COP, USD, coachTypes } from "../../utils/constants";
import JujoImg from "../../assets/coachs/Jujo.webp";
import HobblerImg from "../../assets/coachs/Hobbler.webp";
import HugrockImg from "../../assets/coachs/Hugrock.webp";

export const mainDescription = {
  [SPANISH]: `Las clases de coaching se hacen por discord o a preferencia del cliente, tiene una duracion de 1 hora por clase, para coordinar el horario se hace un grupo de whatsapp y siempre nos adaptamos a los horarios del cliente.`,
  [ENGLISH]: `Coaching classes are done by discord or client preference, has a duration of 1 hour per class, to coordinate the schedule is a group of whatsapp and we always adapt to the client's schedule. client's schedule.`,
};

export const ourCoachsTitle = {
  [SPANISH]: "Nuestros Coachs",
  [ENGLISH]: "Our Coaches",
};

export const coachesList = [
  {
    name: "Jujo",
    lanes: ["TOP"],
    img: JujoImg,
    creditCost: {
      single: {
        [COP]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.JUJO, coachTypes.SINGLE, COP))
          )
        ),
        [USD]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.JUJO, coachTypes.SINGLE, USD))
          )
        ),
      },
      team: {
        [COP]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.JUJO, coachTypes.TEAM, COP))
          )
        ),
        [USD]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.JUJO, coachTypes.TEAM, USD))
          )
        ),
      },
    },
    description: {
      [SPANISH]:
        "Fue Main TOP Colombiano durante 3 años (época competitiva). En el 2021 daria un giro a su carrera ya que descubriría que su talento natural y maximo es ser coach, con su entendimiento del juego, claridad disciplina y manejo de un equipo logro ser campeon varios años en colombia y ser el mejor coach de colombia durante estos años competidos.",
      [ENGLISH]:
        "He was Colombian Main TOP for 3 years (competitive period). In 2021 would give a twist to his career as he would discover that his natural talent and maximum is to be coach, with his understanding of the game, clarity, discipline and management of a team managed to be champion several years in Colombia and be the best coach in Colombia during these competitive years.",
    },
  },
  {
    name: "Hobbler",
    lanes: ["MID"],
    img: HobblerImg,
    creditCost: {
      single: {
        [COP]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HOBBLER, coachTypes.SINGLE, COP))
          )
        ),
        [USD]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HOBBLER, coachTypes.SINGLE, USD))
          )
        ),
      },
      team: {
        [COP]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HOBBLER, coachTypes.TEAM, COP))
          )
        ),
        [USD]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HOBBLER, coachTypes.TEAM, USD))
          )
        ),
      },
    },
    description: {
      [SPANISH]:
        "Jugo en la LLA con equipos como dash9 y just toys havoks. y terminaría su carrera en colombia ganando prácticamente todo desde 2018 a 2023 su juego sólido y mecánicas increíbles lo llevarÍan a soliarsen a seiya cuando competía a su máximo nivel siendo uno de los mejores mids de ese entonces en la LLA con un conocimiento del juego excepcional y habilidad nata de un niño leyenda que aún continúa.",
      [ENGLISH]:
        "He played in the LLA with teams like dash9 and just toys havoks. and would finish his career in colombia winning practically everything from 2018 to 2023 his solid game and incredible mechanics would lead him to soliarsen to seiya when he was competing at his highest level being one of the best mids at that time in the LLA with an exceptional game knowledge and born skill of a legend kid that still continues.",
    },
  },
  {
    name: "Hugrock",
    lanes: ["JG", "ADC", "SUPP"],
    img: HugrockImg,
    creditCost: {
      single: {
        [COP]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HUGROCK, coachTypes.SINGLE, COP))
          )
        ),
        [USD]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HUGROCK, coachTypes.SINGLE, USD))
          )
        ),
      },
      team: {
        [COP]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HUGROCK, coachTypes.TEAM, COP))
          )
        ),
        [USD]: Math.round(
          parseFloat(
            decryptData(coachCredits(coaches.HUGROCK, coachTypes.TEAM, USD))
          )
        ),
      },
    },
    description: {
      [SPANISH]:
        "Fue Main TOP Colombiano durante 3 años (época competitiva). En el 2021 daria un giro a su carrera ya que descubriría que su talento natural y maximo es ser coach, con su entendimiento del juego, claridad disciplina y manejo de un equipo logro ser campeon varios años en colombia y ser el mejor coach de colombia durante estos años competidos.",
      [ENGLISH]:
        "He was Colombian Main TOP for 3 years (competitive period). In 2021 would give a twist to his career as he would discover that his natural talent and maximum is to be coach, with his understanding of the game, clarity, discipline and management of a team managed to be champion several years in Colombia and be the best coach in Colombia during these competitive years.",
    },
  },
];
