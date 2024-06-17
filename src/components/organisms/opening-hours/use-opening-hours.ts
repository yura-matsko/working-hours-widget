import { formatOpeningHours } from "./utils";
import { useQuery } from "@tanstack/react-query";
import { getSchedule } from "@/api";
import { useMemo } from "react";

export const useOpeningHours = () => {
  const {
    data: schedule,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["schedule"],
    queryFn: getSchedule,
  });

  const data = useMemo(() => {
    if (!schedule) {
      return null;
    }

    return formatOpeningHours(schedule);
  }, [schedule]);

  return {
    data,
    isLoading: isLoading || isError,
  };
};
