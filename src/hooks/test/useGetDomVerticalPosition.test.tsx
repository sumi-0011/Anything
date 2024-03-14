import { css } from "@emotion/react";
import { render } from "@testing-library/react";
import React from "react";

import useGetDomPosition from "@/hooks/useGetDomVerticalPosition";

const DefaultComponent = React.forwardRef(({ overrideCss, onClick }, ref) => (
  <div ref={ref} css={[boxCss, centerCss, overrideCss]} onClick={onClick}>
    Click me!
  </div>
));

DefaultComponent.displayName = "DefaultComponent";

function Container({ children }: { children: React.ReactNode }) {
  return <div css={containerCss}>{children}</div>;
}

describe("useGetDomVerticalPosition hook Testing", () => {
  it("center test", () => {
    function Wrapper() {
      const { ref: centerRef, getVerticalPosition } = useGetDomPosition();

      return (
        <Container>
          <DefaultComponent
            ref={centerRef as React.RefObject<HTMLDivElement>}
            onClick={getVerticalPosition}
          />
        </Container>
      );
    }

    render(<Wrapper />);
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

  width: 100vw;
  background-color: #f5f5f5;
  max-width: 475px;
  margin: 0 auto;
`;

const centerCss = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
