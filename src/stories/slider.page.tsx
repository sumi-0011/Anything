import styled from "@emotion/styled";

import MobileSlider from "@/components/Slider/MobileSlider";
import { theme } from "@/styles/theme";

function SliderPage() {
  const InnerData = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
    <Box key={item}>{item}</Box>
  ));

  return (
    <Container>
      <Heading>Slider</Heading>
      <Section>
        <MobileSlider>{InnerData}</MobileSlider>
      </Section>
    </Container>
  );
}

export default SliderPage;

const Container = styled.div`
  padding: 100px;
  @media screen and (max-width: 768px) {
    padding: 16px;
  }
`;

const Heading = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Section = styled.section`
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 80vw;
  }
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

  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 150px;
  }
`;
