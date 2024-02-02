import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface SliderState {
  page: number;
  totalPageCount: number;
  setPage: Dispatch<SetStateAction<number>>;

  slidesToShow: number;

  isBlur?: boolean;
  stepperGap: number;

  // element
  setElementSize: Dispatch<SetStateAction<[number, number]>>;
  // @param {number} [0] - width of element
  // @param {number} [1] - height of element
  elementSize: [number, number];
}

export const SliderContext = createContext<SliderState | null>(null);

export const useSliderContext = () => {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error("SliderProvider not found");
  }

  return context;
};
