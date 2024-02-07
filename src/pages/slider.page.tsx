import styled from "@emotion/styled";

import MobileSlider from "@/components/Slider/MobileSlider";
import { theme } from "@/styles/theme";

function SliderPage() {
  const InnerData = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
    <Box key={item}>{item}</Box>
  ));

  return (
    <Container>
      <section>
        <Heading>full slider (blur false, stepper false)</Heading>
        <MobileSlider>{InnerData}</MobileSlider>
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
