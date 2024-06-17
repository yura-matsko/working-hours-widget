import { describe, it, expect, vi } from "vitest";
import { convertSecondsToAMPMFormat, getCurrentDay } from "./date";

describe("convertSecondsToAMPMFormat", () => {
  it("should show midnight for 0", () => {
    expect(convertSecondsToAMPMFormat(0)).toBe("12 AM");
  });

  it("should show minutes", () => {
    expect(convertSecondsToAMPMFormat(61260)).toBe("6:01 PM");
  });

  it("should show seconds", () => {
    expect(convertSecondsToAMPMFormat(61268)).toBe("6:01:08 PM");
  });
});

describe("getCurrentDay", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns 0 for Monday", () => {
    const date = new Date("05-07-2023");
    vi.setSystemTime(date);

    expect(getCurrentDay()).toBe(0);
  });

  it("returns 6 for Sunday", () => {
    const date = new Date("05-13-2023");
    vi.setSystemTime(date);

    expect(getCurrentDay()).toBe(6);
  });
});
