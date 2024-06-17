import { FiClock } from "react-icons/fi";
import { Title } from "@/components/atoms/title";
import { WeekList } from "@/components/organisms/week-list";

import { useOpeningHours } from "./use-opening-hours";

export const OpeningHours = () => {
  const { data, isLoading } = useOpeningHours();

  return (
    <div className="bg-white rounded-xl shadow-widget p-8 min-w-widget">
      <Title
        level={3}
        className="pb-3 border-b border-black"
        icon={<FiClock />}
      >
        Opening hours
      </Title>
      <WeekList data={data} isLoading={isLoading} />
    </div>
  );
};
