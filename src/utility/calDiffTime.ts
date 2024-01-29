const difInMs = () => {
  const targetDate = new Date("06-06-2024");
  const nowDate = new Date();

  return targetDate.getTime() - nowDate.getTime();
};

const formatToStr = (value: number) => {
  let valueStr = String(value);
  if (valueStr.length === 1) {
    return "0" + value;
  }
  return "" + value;
};

const formatTime = (restMs: number) => {
  let day = Math.floor(restMs / 1000 / 60 / 60 / 24);
  let rest1 = restMs - day * 24 * 60 * 60 * 1000;

  let hr = Math.floor(rest1 / 1000 / 60 / 60);
  let rest2 = rest1 - hr * 1000 * 60 * 60;

  let min = Math.floor(rest2 / 1000 / 60);
  let rest3 = rest2 - min * 1000 * 60;

  let sec = Math.floor(rest3 / 1000);

  return {
    day: formatToStr(day),
    hr: formatToStr(hr),
    min: formatToStr(min),
    sec: formatToStr(sec),
  };
};

export { difInMs, formatTime };
