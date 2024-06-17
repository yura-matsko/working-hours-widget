import { describe, it, expect } from "vitest";
import { formatOpeningHours } from "./utils";
import { ISchedule } from "@/interfaces";
import { DayOfWeek } from "@/enums";

const dataFixture = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
} as ISchedule;

describe("formatOpeningHours", () => {
  describe("should return", () => {
    it("empty string for non specify cases", () => {
      const formatted = new Map([
        ["monday", ""],
        ["tuesday", ""],
        ["wednesday", ""],
        ["thursday", ""],
        ["friday", ""],
        ["saturday", ""],
        ["sunday", ""],
      ]);

      expect(formatOpeningHours(dataFixture)).toEqual(formatted);
    });

    it("date range for one specified set", () => {
      const data = {
        ...dataFixture,
        [DayOfWeek.Monday]: [
          { type: "open", value: 36000 },
          { type: "close", value: 64800 },
        ],
      } as ISchedule;

      const formatted = formatOpeningHours(data);

      expect(formatted.get(DayOfWeek.Monday)).toBe("11 AM - 7 PM");
    });

    it("date range for multiple specified sets", () => {
      const data = {
        ...dataFixture,
        [DayOfWeek.Monday]: [
          {
            type: "open",
            value: 32400,
          },
          {
            type: "close",
            value: 39600,
          },
          {
            type: "open",
            value: 57600,
          },
          {
            type: "close",
            value: 82800,
          },
        ],
      } as ISchedule;

      const formatted = formatOpeningHours(data);

      expect(formatted.get(DayOfWeek.Monday)).toBe(
        "10 AM - 12 PM, 5 PM - 12 AM"
      );
    });

    it("date range if close date next day", () => {
      const data = {
        ...dataFixture,
        [DayOfWeek.Monday]: [
          {
            type: "open",
            value: 32400,
          },
          {
            type: "close",
            value: 39600,
          },
          {
            type: "open",
            value: 57600,
          },
        ],
        [DayOfWeek.Tuesday]: [
          {
            type: "close",
            value: 82800,
          },
        ],
      } as ISchedule;

      const formatted = formatOpeningHours(data);

      expect(formatted.get(DayOfWeek.Monday)).toBe(
        "10 AM - 12 PM, 5 PM - 12 AM"
      );
    });
  });
});
