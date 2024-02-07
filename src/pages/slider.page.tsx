import styled from "@emotion/styled";

import FullSlider from "@/components/Slider/v2/FullSlider";
// import FullSlider from "@/components/Slider/FullSlider";
// import SingleSlider from "@/components/Slider/SingleSlider";
import SingleSlider2 from "@/components/Slider/v2/SingleSlider";
import { theme } from "@/styles/theme";

function SliderPage() {
  const InnerData = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
    <Box key={item}>{item}</Box>
  ));

  return (
    <Container>
      {/* <section>
        <Heading>single slider (blur false, stepper false)</Heading>
        <SingleSlider sliderSize={300} slidesToShow={2} isBlur>
          <SingleSlider.Inner>{InnerData}</SingleSlider.Inner>
          <SingleSlider.PrevArrow />
          <SingleSlider.NextArrow />
        </SingleSlider>
      </section>
      <section>
        <Heading>full slider (blur false, stepper false)</Heading>
        <FullSlider sliderSize={300} slidesToShow={2} isBlur>
          <FullSlider.Inner>{InnerData}</FullSlider.Inner>
          <FullSlider.PrevArrow />
          <FullSlider.NextArrow />
        </FullSlider>
      </section> */}
      <section>
        <Heading>full slider (blur false, stepper false)</Heading>
        <SingleSlider2 sliderSize={300} slidesToShow={2}>
          {InnerData}
        </SingleSlider2>
      </section>{" "}
      <section>
        <Heading>full slider (blur false, stepper fal se)</Heading>
        <FullSlider slidesToShow={2}>{InnerData}</FullSlider>
      </section>
      {/* <section>
        <Heading>single slider (blur true, stepper false)</Heading>
        <SingleSlider sliderSize={300} slidesToShow={2}>
          {InnerData}
        </SingleSlider>
      </section>
      <section>
        <Heading>single slider (stepper true)</Heading>
        <SingleSlider sliderSize={300} slidesToShow={2}>
          {InnerData}
        </SingleSlider>
      </section> */}
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
