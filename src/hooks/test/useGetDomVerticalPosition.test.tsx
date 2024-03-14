import { css } from "@emotion/react";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import useGetDomPosition from "@/hooks/useGetDomVerticalPosition";

const DefaultComponent = ({
  cRef,
  onClick,
  overrideCss,
}: {
  cRef: React.RefObject<HTMLDivElement>;
  onClick: () => void;
  overrideCss?: ReturnType<typeof css>;
}) => {
  <div style={{ position: "relative", minHeight: "600px" }}>
    <div
      ref={cRef}
      css={[boxCss, overrideCss]}
      onClick={onClick}
      className="button"
    >
      Click me!
    </div>
  </div>;
};
DefaultComponent.displayName = "DefaultComponent";

describe("useGetDomVerticalPosition hook Testing", () => {
  it("center test", () => {
    let position = null;

    function Wrapper() {
      const { ref: centerRef, getVerticalPosition } = useGetDomPosition();

      const onClick = () => {
        const click_position = getVerticalPosition();
        console.log("click_position: ", click_position);
        position = click_position;
      };

      return (
        <>
          <DefaultComponent
            cRef={centerRef as React.RefObject<HTMLDivElement>}
            onClick={onClick}
            overrideCss={centerCss}
          />
          <button onClick={onClick}>click</button>
        </>
      );
    }

    render(<Wrapper />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(position).toBe("top");
  });
});

const boxCss = css`
  background-color: #999;
  width: 100px;
  height: 100px;
  position: absolute;
`;

const containerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 600px;
  position: relative;

  margin: 0 auto;
`;

const centerCss = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const bottomCss = css`
  top: 100%;
`;
