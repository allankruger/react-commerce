import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 100px 200px 20px 200px;

  .top {
    display: flex;
    gap: 2.5rem;

    .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: justify;
      font-size: 0.85rem;

      h2 {
        font-size: 1.25rem;
        font-weight: 500;
        color: ${(props) => props.theme["gray-700"]};
      }

      span {
        color: ${(props) => props.theme["gray-600"]};
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    .left {
      display: flex;
      align-items: center;

      .logo {
        color: ${(props) => props.theme["blue-300"]};
        font-weight: bold;
        font-size: 1.5rem;
      }

      .copyright {
        margin-left: 20px;
        font-size: 0.85rem;
        color: ${(props) => props.theme["gray-700"]};
      }
    }

    .right {
      img {
        height: 50px;
      }
    }
  }
`;
