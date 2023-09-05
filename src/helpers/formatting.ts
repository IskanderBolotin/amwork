import dayjs from "dayjs";

export const firstLetterToUpperCase = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const displayDate = (date: Date) => {
  return dayjs(date).format("MMM D, h:mm A");
};
