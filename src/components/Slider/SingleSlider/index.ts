import SingleSliderInner from "@/components/Slider/SingleSlider/Inner";
import SingleSliderRoot from "@/components/Slider/SingleSlider/Root";
import PrevArrow from "@/components/Slider/Slider.components/_ArrowLeft";
import NextArrow from "@/components/Slider/Slider.components/_ArrowRight";

export default Object.assign(SingleSliderRoot, {
  Inner: SingleSliderInner,
  PrevArrow,
  NextArrow,
});
