export const convertSecondsToAMPMFormat = (timestamp: number): string => {
  if (timestamp === 0) {
    return "12 AM";
  }

  const date = new Date(0);
  date.setSeconds(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: true,
  };

  if (date.getMinutes() > 0) {
    options.minute = "numeric";
  }

  if (date.getSeconds() > 0) {
    options.second = "numeric";
  }

  return date.toLocaleTimeString("en-US", options);
};

export const getCurrentDay = (): number => {
  const date = new Date();

  return date.getDay();
};
