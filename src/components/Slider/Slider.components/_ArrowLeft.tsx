import styled from "@emotion/styled";
import { ComponentProps, SVGProps } from "react";

import { ArrowContainer } from "@/components/Slider/Slider.styles";

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M15.566 5.435a.8.8 0 0 1 0 1.13L10.13 12l5.434 5.434a.8.8 0 0 1-1.13 1.132l-6-6a.8.8 0 0 1 0-1.132l6-6a.8.8 0 0 1 1.13 0Z"
      clipRule="evenodd"
    />
  </svg>
);

function PrevArrow(props: ComponentProps<"div">) {
  const { onClick } = props;
  return (
    <PrevArrowContainer onClick={onClick} className="slider-prev-arrow">
      <SvgArrowLeft width={16} height={16} color="#808080" />
    </PrevArrowContainer>
  );
}

const PrevArrowContainer = styled(ArrowContainer)``;

export default PrevArrow;
