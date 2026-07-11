import gdMock1 from "./gd-mock-1";
import gdMock2 from "./gd-mock-2";
import gdMock3 from "./gd-mock-3";
import gdMock4 from "./gd-mock-4";
import gdMock5 from "./gd-mock-5";
import gdMock6 from "./gd-mock-6";
import gdMock7 from "./gd-mock-7";
import gdMock8 from "./gd-mock-8";
import gdMock9 from "./gd-mock-9";
import gdMock10 from "./gd-mock-10";
import gdMock11 from "./gd-mock-11";
import gdMock12 from "./gd-mock-12";
import gdMock13 from "./gd-mock-13";
import gdMock14 from "./gd-mock-14";
import gdMock15 from "./gd-mock-15";
import gdMock16 from "./gd-mock-16";
import gdMock17 from "./gd-mock-17";
import gdMock18 from "./gd-mock-18";
import gdMock19 from "./gd-mock-19";
import gdMock20 from "./gd-mock-20";

export const gdMockPassages = {
  "gd-mock-1": gdMock1,
  "gd-mock-2": gdMock2,
  "gd-mock-3": gdMock3,
  "gd-mock-4": gdMock4,
  "gd-mock-5": gdMock5,
  "gd-mock-6": gdMock6,
  "gd-mock-7": gdMock7,
  "gd-mock-8": gdMock8,
  "gd-mock-9": gdMock9,
  "gd-mock-10": gdMock10,
  "gd-mock-11": gdMock11,
  "gd-mock-12": gdMock12,
  "gd-mock-13": gdMock13,
  "gd-mock-14": gdMock14,
  "gd-mock-15": gdMock15,
  "gd-mock-16": gdMock16,
  "gd-mock-17": gdMock17,
  "gd-mock-18": gdMock18,
  "gd-mock-19": gdMock19,
  "gd-mock-20": gdMock20,
} as const;

export type GdMockPassageId = keyof typeof gdMockPassages;