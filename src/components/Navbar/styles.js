import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 5rem;

  .wrapper {
    display: flex;
    padding: 10px 30px;
    justify-content: space-between;

    .item {
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .center {
      font-size: 2rem;
      letter-spacing: 2px;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 1rem;

      .icons {
        display: flex;
        gap: 1rem;
        color: ${(props) => props.theme["gray-500"]};
        cursor: pointer;

        .cartIcon {
          position: relative;
          span {
            font-size: 12px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: ${(props) => props.theme["blue-300"]};
            color: ${(props) => props.theme["white"]};
            position: absolute;
            right: -10px;
            top: -10px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
`;
