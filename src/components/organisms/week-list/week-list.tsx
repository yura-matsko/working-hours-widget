import { FC } from "react";

import { WeekListItem } from "@/components/molecules/week-list-item";
import { IScheduleFormatted } from "@/interfaces";
import { DayOfWeek } from "@/enums";
import { getCurrentDay } from "@/utils/date";

interface IWeekListProps {
  data: IScheduleFormatted | null;
  isLoading: boolean;
}

export const WeekList: FC<IWeekListProps> = ({ data, isLoading }) => {
  const currentDay = getCurrentDay();

  return (
    <ul role="list">
      {Object.values(DayOfWeek).map((day, index) => (
        <WeekListItem
          key={day}
          day={day}
          workingHours={data?.get(day) || ""}
          isLoading={isLoading}
          isToday={index === currentDay}
        />
      ))}
    </ul>
  );
};
