import { useRef } from "react";

type VerticalPositionType = "top" | "bottom";

interface ReturnProps {
  getVerticalPosition: () => VerticalPositionType | null;
  ref: React.RefObject<HTMLElement | null>;
}

function useGetDomVerticalPosition(): ReturnProps {
  const ref = useRef<HTMLElement>(null);

  const getVerticalPosition = () => {
    if (!ref.current) return null;

    const windowHeight = window.innerHeight;
    console.log("windowHeight: ", windowHeight);

    const position = ref.current.getBoundingClientRect().top;
    console.log(
      "ref.current.getBoundingClientRect(): ",
      ref.current.getBoundingClientRect(),
    );
    console.log("position: ", position);

    if (position < windowHeight / 2) return "top";
    return "bottom";
  };

  return {
    getVerticalPosition,
    ref,
  };
}

export default useGetDomVerticalPosition;
