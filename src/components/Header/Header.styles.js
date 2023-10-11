import styled from 'styled-components';

export const StyledHeader = styled.header`
  font-size: 1.2em;
  font-weight: bold;
  padding: 15px 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .link {
    text-decoration: none;
    margin-right: 10px;
    color: black;
  }
  .active {
    color: red;
  }
`;

export default StyledHeader;
