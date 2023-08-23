import { ENGLISH, SPANISH } from "../../context/languaje/types";
import { ROUTES } from "../../utils/constants";

export const plans = {
  [SPANISH]: [
    {
      title: "boosting",
      path: ROUTES.BOOSTING,
      content: () => (
        <>
          <p>
            ¿Elo bajo? ¿Quieres subir de liga mientras estudias, trabajas o
            haces cualquier otra cosa?
          </p>
          <br />
          <p>
            Contamos con jugadores profesionales que subiran tu cuenta hasta
            donde tú decidas, serás la envidia de tus amigos.
          </p>
        </>
      ),
    },
    {
      title: "coaching",
      path: ROUTES.COACHING,
      content: () => (
        <>
          <p>
            Entrena bajo el mando de jugadores profesionales y challengers el
            roll que desees masterizar en la griteta del invocador.{" "}
          </p>
          <br />
          <p>
            Contamos con jugadores profesionales que te ayudaran en tu micro y
            macro game.
          </p>
        </>
      ),
    },
  ],
  [ENGLISH]: [
    {
      title: "boosting",
      path: ROUTES.BOOSTING,
      content: () => (
        <>
          <p>
            Low elo? Do you want to move up the league while you study, work or
            do anything else?
          </p>
          <br />
          <p>
            We have professional players who will raise your account to where
            you decide, you will be the envy of your friends.
          </p>
        </>
      ),
    },
    {
      title: "coaching",
      path: ROUTES.COACHING,
      content: () => (
        <>
          <p>
            Train under the command of professional players and challengers the
            roll you want to master in the summoner's yell.
          </p>
          <br />
          <p>
            We have professional players who will help you in your micro and
            macro game.
          </p>
        </>
      ),
    },
  ],
};
