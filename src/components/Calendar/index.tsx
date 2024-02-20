import {
  Calendar as PrimitiveCalendar,
  LocaleConfig,
  CalendarProps,
  DateData,
} from "react-native-calendars";

import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components";

import { prBr } from "./locale-pt-br";
import { generateInterval } from "./generate-interval";

LocaleConfig.locales["pt-br"] = prBr;
LocaleConfig.defaultLocale = "pt-br";

type MarkedDatesProps = Pick<CalendarProps, "markedDates">;
type DayProps = DateData;

function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <PrimitiveCalendar
      renderArrow={(direction) => (
        <Feather
          size={24}
          color={theme.colors.shape}
          name={`chevron-${direction}`}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        padding: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,

        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,

        textMonthFontFamily: theme.fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,

        todayTextColor: theme.colors.main,

        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date().toDateString()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, generateInterval, MarkedDatesProps, DayProps };
