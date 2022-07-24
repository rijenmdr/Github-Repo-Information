import styled from "@emotion/styled";

export const Chip = styled("div")(
  () => `
      background: #34363c;
      display: flex;
      align-items: center;
      padding: .2rem;
      border-radius: 8px;
      color: #fff;
      margin: 0 .2rem
    `
);

export const Card = styled("div")(
  ({ theme }) => `
      border-radius: 20px;
      padding: 1rem 1.2rem;
      background-color: #272a30;
      color: #fff;
      cursor: pointer;
      height: 200px;
      
      &:hover {
          transform: scale(1.06);
          transition: .6s all ease-in;
        }
    `
);
