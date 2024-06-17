import schedule from "@/fixtures/schedule.json";
import { ISchedule } from "./interfaces";

export const getSchedule = (): Promise<ISchedule> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(schedule as ISchedule), 2000);
  });
