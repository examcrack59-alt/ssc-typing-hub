import mtsMock1 from "./mts-mock-1";
import mtsMock2 from "./mts-mock-2";
import mtsMock3 from "./mts-mock-3";
import mtsMock4 from "./mts-mock-4";
import mtsMock5 from "./mts-mock-5";
import mtsMock6 from "./mts-mock-6";
import mtsMock7 from "./mts-mock-7";
import mtsMock8 from "./mts-mock-8";
import mtsMock9 from "./mts-mock-9";
import mtsMock10 from "./mts-mock-10";
import mtsMock11 from "./mts-mock-11";
import mtsMock12 from "./mts-mock-12";
import mtsMock13 from "./mts-mock-13";
import mtsMock14 from "./mts-mock-14";
import mtsMock15 from "./mts-mock-15";
import mtsMock16 from "./mts-mock-16";
import mtsMock17 from "./mts-mock-17";
import mtsMock18 from "./mts-mock-18";
import mtsMock19 from "./mts-mock-19";
import mtsMock20 from "./mts-mock-20";

export const mtsMockPassages = {
  "mts-mock-1": mtsMock1,
  "mts-mock-2": mtsMock2,
  "mts-mock-3": mtsMock3,
  "mts-mock-4": mtsMock4,
  "mts-mock-5": mtsMock5,
  "mts-mock-6": mtsMock6,
  "mts-mock-7": mtsMock7,
  "mts-mock-8": mtsMock8,
  "mts-mock-9": mtsMock9,
  "mts-mock-10": mtsMock10,
  "mts-mock-11": mtsMock11,
  "mts-mock-12": mtsMock12,
  "mts-mock-13": mtsMock13,
  "mts-mock-14": mtsMock14,
  "mts-mock-15": mtsMock15,
  "mts-mock-16": mtsMock16,
  "mts-mock-17": mtsMock17,
  "mts-mock-18": mtsMock18,
  "mts-mock-19": mtsMock19,
  "mts-mock-20": mtsMock20,
} as const;

export type MtsMockPassageId = keyof typeof mtsMockPassages;