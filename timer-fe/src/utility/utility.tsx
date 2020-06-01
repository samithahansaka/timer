export const convertTimeToDisplay = (time: number, format: string): string => {
  if (time === 0) {
    return format === FORMAT_ONE ? "00:00.000" : "00:00:00";
  }
  const minutes = Math.round(time / 60);
  const seconds = Math.round(time) % 60;
  const milliseconds = parseInt(time.toFixed(1).split(".")[1]) * 100;

  if (format === FORMAT_ONE) {
    return (
      pad(minutes + "", 2, "0") +
      ":" +
      pad(seconds + "", 2, "0") +
      "." +
      pad(milliseconds + "", 3, "0")
    );
  } else {
    return pad(minutes + "", 2, "0") + ":" + seconds + ".00";
  }
};

export const pad = (num: string, size: number, character: string): string => {
  return character.repeat(size - num.length > 0 ? size - num.length : 0) + num;
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const FORMAT_ONE = "FORMAT_ONE";
export const FORMAT_TWO = "FORMAT_TWO";
export const MILLISECOND_FORMAT = "000";
export const SECOND_FORMAT = "00";
export const API_URL = "http://localhost:5000";

export interface Action {
  type: string;
  value: number;
}
