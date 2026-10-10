const unitInBangla: { [key: string]: string } = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  piece: "টি",
  dozen: "ডজন",
  gram: "গ্রাম",
  hali: "হালি"
};

export const toBanglaNumber = (num: number | string): string => {
  const absoluteNumber = Math.abs(Number(num));
  return absoluteNumber.toLocaleString("bn-BD");
};

export const toBanglaUnit = (unit: string): string => {
  if (!unit) return "";
  return unitInBangla[unit.toLowerCase()] || unit;
};
