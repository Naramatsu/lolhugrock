import { COLORS, ROUTES, TITLES } from "../../utils/constants";

export const list = [
  {
    path: ROUTES.DIVISIONBOOST,
    title: TITLES.DIVISIONBOOST,
    color: COLORS.PURPLE,
    description: () => (
      <>
        <p>
          ¿Elo bajo? ¿Quieres subir de liga mientras estudias, trabajas o haces
          cualquier otra cosa?
        </p>
        <br />
        <p>
          Contamos con jugadores profesionales que subiran tu cuenta hasta donde
          tú decidas, serás la envidia de tus amigos.
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
          ¿Elo bajo? ¿Quieres subir de liga mientras estudias, trabajas o haces
          cualquier otra cosa?
        </p>
        <br />
        <p>
          Contamos con jugadores profesionales que subiran tu cuenta hasta donde
          tú decidas, serás la envidia de tus amigos.
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
          ¿Elo bajo? ¿Quieres subir de liga mientras estudias, trabajas o haces
          cualquier otra cosa?
        </p>
        <br />
        <p>
          Contamos con jugadores profesionales que subiran tu cuenta hasta donde
          tú decidas, serás la envidia de tus amigos.
        </p>
      </>
    ),
  },
];
