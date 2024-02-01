import { Children, PropsWithChildren, useState } from "react";

import { SliderContext } from "@/components/Slider/Slider.context";

interface RootProps {
  slidesToShow: number;
  sliderSize: number;
}

function SingleSliderRoot(props: PropsWithChildren<RootProps>) {
  const [page, setPage] = useState(0);

  const cardCount = Children.count(props.children);
  const totalPageCount =
    cardCount === props.slidesToShow ? 1 : cardCount - (props.slidesToShow - 2);

  const sliderValue = {
    page,
    totalPageCount,
    setPage,
    slidesToShow: props.slidesToShow,
  };

  return (
    <SliderContext.Provider value={sliderValue}>
      {props.children}
    </SliderContext.Provider>
  );
}

export default SingleSliderRoot;
