const Colors = {
  BLACK: "#000000",
  WHITE: "#FFFFFF",
};

const getLuminance = (r: number, g: number, b: number): number =>
  (0.299 * r + 0.587 * g + 0.114 * b) / 255;

const parseRGB = (RGB: string): [number, number, number] | null => {
  const splittedRGB = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(RGB);

  if (!splittedRGB) return null;

  const r = parseInt(splittedRGB[1]);
  const g = parseInt(splittedRGB[2]);
  const b = parseInt(splittedRGB[3]);

  return [r, g, b];
};

const parseHEX = (HEX: string): [number, number, number] | null => {
  const HEXWithoutSharp = HEX.trim().slice(1);
  if (HEXWithoutSharp.length !== 6) return null;

  const r = parseInt(HEXWithoutSharp.slice(0, 2), 16);
  const g = parseInt(HEXWithoutSharp.slice(2, 4), 16);
  const b = parseInt(HEXWithoutSharp.slice(4, 6), 16);

  return [r, g, b];
};

interface getOppositeTextColorParams {
  backgroundColor: string | null;
  fallbackTextColor?: string;
}

const getOppositeTextColor = ({
  backgroundColor,
  fallbackTextColor = Colors.BLACK,
}: getOppositeTextColorParams): string => {
  if (!backgroundColor) return fallbackTextColor;

  const isRGB = backgroundColor.startsWith("rgb");

  if (isRGB) {
    const rgbValues = parseRGB(backgroundColor);

    if (!rgbValues) return fallbackTextColor;
    const [r, g, b] = rgbValues;

    return getLuminance(r, g, b) > 0.5 ? Colors.BLACK : Colors.WHITE;
  }

  const rgbValues = parseHEX(backgroundColor);

  if (!rgbValues) return fallbackTextColor;
  const [r, g, b] = rgbValues;

  return getLuminance(r, g, b) > 0.5 ? Colors.BLACK : Colors.WHITE;
};

export default getOppositeTextColor;
