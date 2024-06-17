import { FC, memo } from "react";

interface ITimeRangeProps {
  range: string;
}

const TimeRangeComponent: FC<ITimeRangeProps> = ({ range }) => {
  if (!range) {
    return <span className="text-gray-300">Closed</span>;
  }

  return <span>{range}</span>;
};

export const TimeRange = memo(TimeRangeComponent);
