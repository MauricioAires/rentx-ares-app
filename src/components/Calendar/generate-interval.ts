import { eachDayOfInterval, format } from "date-fns";

import { MarkedDatesProps, DayProps } from ".";
import { getPlatformDate } from "../../utils/formatters/get-platform-date";

interface GenerateIntervalProps {
  start: DayProps;
  end: DayProps;
  mainColor: string;
  mainLightColor: string;
}

export function generateInterval({
  start,
  end,
  mainColor,
  mainLightColor,
}: GenerateIntervalProps) {
  let interval: MarkedDatesProps = {};

  const intervalDates = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  intervalDates.forEach((item) => {
    const date = format(getPlatformDate(item), "yyyy-MM-dd");

    interval = {
      ...interval,
      [date]: {
        color:
          start.dateString === date || end.dateString === date
            ? mainColor
            : mainLightColor,
        textColor:
          start.dateString === date || end.dateString === date
            ? mainLightColor
            : mainColor,
      },
    };
  });

  return interval;
}
