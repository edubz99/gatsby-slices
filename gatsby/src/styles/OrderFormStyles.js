import styled from 'styled-components';

const OrderFormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    gap: 1rem;
    align-content: start;
    &.order,
    &.menu {
      grid-column: span 1;
    }
    &.your-info {
      display: flex;
      flex-direction: column;
    }
  }
  .mapleSyrup {
    display: none;
  }
  @media screen and (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default OrderFormStyles;
