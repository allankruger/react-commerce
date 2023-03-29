import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 80px;

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
            font-size: 0.75rem;
            width: 1.25rem;
            height: 1.25rem;
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
