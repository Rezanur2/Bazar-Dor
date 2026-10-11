const unitInBangla: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  piece: "টি",
  dozen: "ডজন",
  gram: "গ্রাম",
  hali: "হালি",
};

export const toBanglaNumber = (num: number | string): string => {
  const value = Number(num);
  if (!Number.isFinite(value)) return "০";
  return Math.abs(value).toLocaleString("bn-BD");
};

export const toBanglaUnit = (unit: string): string =>
  unitInBangla[unit?.toLowerCase()] || unit || "";