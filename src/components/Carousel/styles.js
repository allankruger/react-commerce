import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100vw;
  position: relative;

  .wrapper {
    width: 300vw;
    height: 100%;
    display: flex;
    transition: all 1s ease;

    img {
      width: 100vw;
      height: 100%;
      object-fit: cover;
    }
  }

  .icons {
    width: fit-content;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100px;
    gap: 3rem;
    margin: auto;

    .icon {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 5px;
    }
  }
`;