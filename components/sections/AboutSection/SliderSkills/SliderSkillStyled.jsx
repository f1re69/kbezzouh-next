import styled from "styled-components";

export const SliderSkillStyled = styled.div`
  position: relative;
  margin: 2rem 0;
  .main-slider {
    width: 42rem;
    overflow: hidden;
    background: #000000a1;
    box-shadow: 0 0 9px 4px rgba(0, 0, 0, 0.66);
    margin-top: 2rem;
    display: flex;
    position: relative;

    &::before,
    &::after {
      background: linear-gradient(
        to right,
        #00000030 0%,
        rgba(255, 255, 255, 0) 100%
      );
      content: "";
      height: 100%;
      position: absolute;
      width: 200px;
      z-index: 2;
    }

    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }

    .customer-logos.slider {
      animation: autoSlide 10s linear infinite;
      display: flex;
      padding: 1rem;

      .slide {
        border-left: 1px solid rgba(255, 255, 255, 0.603);

        img {
          padding: 0 10px;
          width: 70px;
        }
      }
    }
  }

  .profile-image {
    border-radius: 50%;
  }

  @media (max-width: 715px) {
    height: 15rem;
    width: 95%;
    margin-top: 2rem;
    text-align: center;

    .main-slider {
      position: absolute;
      width: 100%;
    }
  }
`;
