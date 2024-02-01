import styled from "@emotion/styled";

interface Props {
  currentPage: number;
  totalPageCount: number;
  setPage: (page: number) => void;
}

function Stepper(props: Props) {
  return (
    <StepperWrapper>
      {[...Array(props.totalPageCount)].map((_, idx) =>
        idx === props.currentPage ? (
          <ActiveStepperItem key={`stepper-active-${idx}`} />
        ) : (
          <StepperItem
            onClick={() => props.setPage(idx)}
            key={`stepper-${idx}`}
          />
        ),
      )}
    </StepperWrapper>
  );
}

export default Stepper;

const StepperWrapper = styled.div`
  position: absolute;
  bottom: 0px;

  display: flex;
  gap: 4px;
  justify-content: center;
  margin: auto;
  left: 0;
  right: 0;
`;

const StepperItem = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 100px;

  background-color: lightslategray;
  cursor: pointer;
`;

const ActiveStepperItem = styled.div`
  width: 12px;
  height: 6px;
  border-radius: 100px;

  background-color: gray;
  cursor: pointer;
`;
