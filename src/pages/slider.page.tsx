import styled from "@emotion/styled";

import SingleSlider from "@/components/Slider/SingleSlider";
import { theme } from "@/styles/theme";

function SliderPage() {
  return (
    <Container>
      <section>
        <Heading>single slider (blur false, stepper false)</Heading>
        <SingleSlider
          sliderSize={300}
          slidesToShow={2}
          blur={false}
          isStepper={false}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <Box key={item}>{item}</Box>
          ))}
        </SingleSlider>
      </section>
      <section>
        <Heading>single slider (blur true, stepper false)</Heading>
        <SingleSlider sliderSize={300} slidesToShow={2} isStepper={false}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box key={item}>{item}</Box>
          ))}
        </SingleSlider>
      </section>
      <section>
        <Heading>single slider (stepper true)</Heading>{" "}
        <SingleSlider sliderSize={300} slidesToShow={2} blur={false}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Box key={item}>{item}</Box>
          ))}
        </SingleSlider>
      </section>
    </Container>
  );
}

export default SliderPage;

const Container = styled.div`
  padding: 100px;
`;

const Heading = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Box = styled.div`
  background-color: ${theme.colors.bg.light};
  color: ${theme.colors.text.default};
  font-size: 30px;

  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;