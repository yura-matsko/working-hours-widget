import { WorkingType, DayOfWeek } from "@/enums";

export interface IWorkingHours {
  type: WorkingType;
  value: number;
}

export type ISchedule = {
  [key in DayOfWeek]: IWorkingHours[];
};

export type IScheduleFormatted = Map<DayOfWeek, string>;

export type IWeekWorkingHours = IWorkingHours & { weekTime: number };

export type WeekIntervals = Record<DayOfWeek, string[]>;
