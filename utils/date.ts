const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDay = (index: number): string => DAYS[index];
const getMonth = (index: number): string => MONTHS[index];

const nth = (d: number): string => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getDDDMMM = (date: Date): string => {
  const day = getDay(date.getDay());
  const month = getMonth(date.getMonth());
  const dateIndex = date.getDate();

  return `${day} ${dateIndex} ${month}`;
};

const getDMMMYY = (date: Date): string => {
  const month = getMonth(date.getMonth());
  const dateIndex = date.getDate();
  const year = date
    .getFullYear()
    .toString()
    .substr(-2);

  return `${dateIndex}${nth(dateIndex)} ${month} '${year}`;
};

const formatDate = (date: string, format: string): string => {
  if (!date) {
    return "";
  }
  const newDate = new Date(date);
  const response = {
    DDDMMM: getDDDMMM(newDate),
    DMMMYY: getDMMMYY(newDate)
  };

  return (response as any)[format];
};

export default formatDate;
