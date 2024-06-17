import { FC, memo } from "react";

import { TimeRange } from "@/components/atoms/time-range";

interface IWeekListItemProps {
  isLoading?: boolean;
  isToday?: boolean;
  day: string;
  workingHours: string;
}

const WeekListItemComponent: FC<IWeekListItemProps> = ({
  isLoading,
  isToday,
  day,
  workingHours,
}) => {
  return (
    <li className="flex justify-between items-center border-b border-gray-200 py-1.5">
      <b className="capitalize font-medium mr-4 flex items-center">
        {day}
        {isToday && (
          <b className="uppercase text-green font-medium text-xs ml-2">Today</b>
        )}
      </b>
      {!isLoading ? (
        <TimeRange range={workingHours} />
      ) : (
        <div
          data-testid="loader"
          className="animate-pulse h-4 w-2/5 bg-gray-300 rounded-full"
        />
      )}
    </li>
  );
};

export const WeekListItem = memo(WeekListItemComponent);
