import styled from "@emotion/styled";
import React, { Children, PropsWithChildren, useRef, useState } from "react";

import useThrottle from "@/hooks/useThrottle";

function MobileSlider(props: PropsWithChildren) {
  const dragOptions = useScrollDrag();

  return (
    <MobileScrollContainer {...dragOptions}>
      {Children.map(props.children, (child, idx) => (
        <div key={idx} className="scroll-item">
          {child}
        </div>
      ))}
    </MobileScrollContainer>
  );
}

const useScrollDrag = (): {
  ref: React.RefObject<HTMLDivElement>;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseUp: () => void;
  onMouseMove: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave: () => void;
} => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!scrollRef.current) return;
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!scrollRef.current) return;

    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.style.scrollBehavior = "smooth";
      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const onThrottleDragMove = useThrottle(onDragMove, 100);

  return {
    ref: scrollRef,
    onMouseDown: onDragStart,
    onMouseUp: onDragEnd,
    onMouseMove: onThrottleDragMove,
    onMouseLeave: onDragEnd,
  };
};

const MobileScrollContainer = styled.div`
  display: flex;
  height: fit-content;
  cursor: grab;

  flex-direction: row;
  overflow: auto hidden;
  scroll-snap-type: x proximity;
  gap: 16px;

  transition: all 0.3s ease;

  padding-bottom: 4px;

  .scroll-item {
    scroll-snap-align: start;
    min-width: fit-content;
    min-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 50pt;
  }

  &::-webkit-scrollbar {
    background-color: #fff;
    height: 4px;
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 4px;
  }
`;

export default MobileSlider;
