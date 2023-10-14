import styled from 'styled-components';

export const StyledHeader = styled.header`
  font-size: 1.2em;
  font-weight: bold;
  padding: 25px 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  justify-content: space-around;

  .link {
    margin-right: 20px;
    text-decoration: none;
    color: black;
    width: 100px;
    padding: 6px 12px;
    border: 2px solid rgb(235, 187, 247);
    border-radius: 20px;

    &.active {
      color: purple;
    }
`;

export default StyledHeader;
