import { LEAGUE_COLORS } from "../../utils/constants";

const divisions = ["IV", "III", "II", "I"];
const lpGroup = ["0-29 LP", "30-59 LP", "60-100 LP"];
const lpGain = ["1-11", "12-14", "+15"];

export const divisionsConfig = {
  Unranked: {
    color: LEAGUE_COLORS.Unranked,
    divisions: [],
    lpGroup: [],
  },
  Iron: {
    color: LEAGUE_COLORS.Iron,
    divisions,
    lpGroup,
  },
  Bronze: {
    color: LEAGUE_COLORS.Bronze,
    divisions,
    lpGroup,
  },
  Silver: {
    color: LEAGUE_COLORS.Silver,
    divisions,
    lpGroup,
  },
  Gold: {
    color: LEAGUE_COLORS.Gold,
    divisions,
    lpGroup,
  },
  Platinum: {
    color: LEAGUE_COLORS.Platinum,
    divisions,
    lpGroup,
  },
  Diamond: {
    color: LEAGUE_COLORS.Diamond,
    divisions,
    lpGroup,
  },
  Master: {
    color: LEAGUE_COLORS.Master,
    lps: "0",
    lpGain,
  },
  GrandMaster: {
    color: LEAGUE_COLORS.GrandMaster,
    lps: "0",
    lpGain,
  },
  Challenger: {
    color: LEAGUE_COLORS.Challenger,
    lps: "0",
    lpGain,
  },
};
