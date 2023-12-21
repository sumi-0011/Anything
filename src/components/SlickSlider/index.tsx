import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "@emotion/styled";
import Slider from "react-slick";

import dummyData from "@/components/SlickSlider/dummy";

const adList = dummyData;

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Container>
        <h2> Single Item</h2>
        <Slider {...settings}>
          {adList.map((ad, idx) => (
            <SliderItem image={ad.image} key={idx} />
          ))}
        </Slider>
      </Container>
    </Wrapper>
  );
}

function SliderItem({ image }: { image: string }) {
  return (
    <SliderItemStyled>
      <img src={image} />
      {image}
    </SliderItemStyled>
  );
}

const Wrapper = styled.div`
  background-color: yellow;
  padding: 10px;

  @media screen and (max-width: 475px) {
    max-width: 200px;
  }
`;

const Container = styled.div`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

const SliderItemStyled = styled.div`
  width: fit-content;
  background-color: blue;
`;
