import PrevArrow from "@/components/Slider/Slider.components/_ArrowLeft";
import NextArrow from "@/components/Slider/Slider.components/_ArrowRight";

import FullSliderInner from "./Inner";
import FullSliderRoot from "./Root";

export default Object.assign(FullSliderRoot, {
  Inner: FullSliderInner,
  PrevArrow,
  NextArrow,
});
