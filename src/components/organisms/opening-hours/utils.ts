import { DayOfWeek, WorkingType } from "@/enums";
import {
  ISchedule,
  IScheduleFormatted,
  IWeekWorkingHours,
  WeekIntervals,
} from "@/interfaces";
import { convertSecondsToAMPMFormat } from "@/utils/date";
import { chunk, head, sortBy, tail } from "lodash";

const DAY = 60 * 60 * 24;
const WEEK_DAYS = [
  DayOfWeek.Monday,
  DayOfWeek.Tuesday,
  DayOfWeek.Wednesday,
  DayOfWeek.Thursday,
  DayOfWeek.Friday,
  DayOfWeek.Saturday,
  DayOfWeek.Sunday,
];

const getWeekdayIndex = (dayOfWeek: DayOfWeek) => {
  return WEEK_DAYS.indexOf(dayOfWeek);
};

const getWeekday = (index: number) => {
  return WEEK_DAYS[index];
};

export const formatOpeningHours = (
  openingHours: ISchedule
): IScheduleFormatted => {
  const intervals = getWeekIntervals(getSortedWorkingIntervals(openingHours));
  const entries = Object.entries(intervals).map(
    ([dayOfWeek, intervals]) =>
      [dayOfWeek, intervals.join(", ")] as [DayOfWeek, string]
  );

  return new Map(entries);
};

const getSortedWorkingIntervals = (openingHours: ISchedule) => {
  const result = Object.entries(openingHours).reduce<IWeekWorkingHours[]>(
    (acc, [dayOfWeek, intervals]) => {
      const index = getWeekdayIndex(dayOfWeek as DayOfWeek);
      const weekTime = index * DAY;

      return [
        ...acc,
        ...intervals.map((interval) => ({
          ...interval,
          weekTime: interval.value + weekTime,
        })),
      ];
    },
    []
  );

  const sorted = sortBy(result, ["weekTime"]);

  return sorted[0]?.type === WorkingType.Open
    ? sorted
    : ([...tail(sorted), head(sorted)] as IWeekWorkingHours[]);
};

const getWeekIntervals = (intervals: IWeekWorkingHours[]) =>
  chunk(intervals, 2).reduce<WeekIntervals>((acc, [open, close]) => {
    if (!open && !close) {
      return WEEK_DAYS.reduce(
        (acc, day) => ({ ...acc, [day]: [] }),
        {} as WeekIntervals
      );
    }

    const dayOfWeek = getWeekday(Math.floor(open.weekTime / DAY));
    return {
      ...acc,
      [dayOfWeek]: [
        ...(acc[dayOfWeek] || []),
        [
          convertSecondsToAMPMFormat(open.value),
          convertSecondsToAMPMFormat(close.value),
        ].join(" - "),
      ],
    };
  }, {} as WeekIntervals);
