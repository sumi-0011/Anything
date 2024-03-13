import { css } from "@emotion/react";

import useGetDomPosition from "@/hooks/useGetDomVerticalPosition";

function TestPage() {
  const { ref: centerRef, getVerticalPosition: g1 } = useGetDomPosition();
  const { ref: topRef, getVerticalPosition: g2 } = useGetDomPosition();
  const { ref: bottomRef, getVerticalPosition: g3 } = useGetDomPosition();

  return (
    <div css={containerCss}>
      <div
        css={[boxCss, centerCss]}
        ref={centerRef as React.RefObject<HTMLDivElement>}
        onClick={g1}
      ></div>
      <div
        css={[boxCss, topCss]}
        ref={topRef as React.RefObject<HTMLDivElement>}
        onClick={g2}
      ></div>
      <div
        css={[boxCss, bottomCss]}
        ref={bottomRef as React.RefObject<HTMLDivElement>}
        onClick={g3}
      ></div>
    </div>
  );
}

export default TestPage;

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

const topCss = css`
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const bottomCss = css`
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;
