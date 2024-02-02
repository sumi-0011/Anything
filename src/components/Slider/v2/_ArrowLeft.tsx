import styled from "@emotion/styled";
import { SVGProps } from "react";

import { ArrowContainer } from "@/components/Slider/Slider.styles";

function PrevArrow({ onClick }: { onClick: () => void }) {
  // if (isFirstPage) return <></>;

  return (
    <PrevArrowContainer onClick={onClick} className="slider-prev-arrow">
      <ArrowWrapper>
        <SvgArrowLeft width={16} height={16} color="#808080" />
      </ArrowWrapper>
    </PrevArrowContainer>
  );
}

const PrevArrowContainer = styled(ArrowContainer)`
  left: 0;
`;

const ArrowWrapper = styled.div`
  position: relative;
  right: 50%;

  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
  overflow: visible;

  border: 1px solid gray;
  background-color: #fff;
  box-shadow: 0px 1px 5px -3px rgba(0, 0, 0, 0.04);

  cursor: pointer;
  z-index: 1;
`;

export default PrevArrow;

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
