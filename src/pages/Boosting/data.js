import { ENGLISH, SPANISH } from "../../context/languaje/types";
import { COLORS, ROUTES, TITLES } from "../../utils/constants";

export const boostingList = {
  [SPANISH]: [
    {
      path: ROUTES.DIVISIONBOOST,
      title: TITLES.DIVISIONBOOST,
      color: COLORS.PURPLE,
      description: () => (
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
      path: ROUTES.PLACEMENTS,
      title: TITLES.PLACEMENTS,
      color: COLORS.BLUE,
      description: () => (
        <>
          <p>
            Sabemos lo emocionante y estresante que es jugar nuestras primeras
            partidas de posicionamiento
          </p>
          <br />
          <p>
            Nuestros expertos darán todo de ellos para que tengas un gran
            comienzo y logres llegar a tu meta esa season.
          </p>
        </>
      ),
    },
    {
      path: ROUTES.NETWINS,
      title: TITLES.NETWINS,
      color: COLORS.GREEN,
      description: () => (
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
  ],
  [ENGLISH]: [
    {
      path: ROUTES.DIVISIONBOOST,
      title: TITLES.DIVISIONBOOST,
      color: COLORS.PURPLE,
      description: () => (
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
      path: ROUTES.PLACEMENTS,
      title: TITLES.PLACEMENTS,
      color: COLORS.BLUE,
      description: () => (
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
      path: ROUTES.NETWINS,
      title: TITLES.NETWINS,
      color: COLORS.GREEN,
      description: () => (
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
  ],
};
