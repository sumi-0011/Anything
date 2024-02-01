import { createContext, Dispatch, SetStateAction, useContext } from "react";

interface SliderState {
  page: number;
  totalPageCount: number;
  setPage: Dispatch<SetStateAction<number>>;

  slidesToShow: number;
}

export const SliderContext = createContext<SliderState | null>(null);

export const useSliderContext = () => {
  const context = useContext(SliderContext);

  if (!context) {
    throw new Error("SliderProvider not found");
  }

  return context;
};
