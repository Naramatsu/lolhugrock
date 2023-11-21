import { BsHandThumbsUpFill, BsInfoLg, BsQuestionLg } from "react-icons/bs";
import {
  ABOUT_US,
  FREQUENT_QUESTIONS,
  RECENT_WORKS,
  ROUTES,
} from "../../utils/constants";

export const btnLinks = (languaje) => [
  {
    link: ROUTES.RECENTWORKS,
    icon: <BsHandThumbsUpFill />,
    label: RECENT_WORKS[languaje],
  },
  {
    link: ROUTES.ABOUTUS,
    icon: <BsInfoLg />,
    label: ABOUT_US[languaje],
  },
  {
    link: ROUTES.FREQUENTQUESTIONS,
    icon: <BsQuestionLg />,
    label: FREQUENT_QUESTIONS[languaje],
  },
];
