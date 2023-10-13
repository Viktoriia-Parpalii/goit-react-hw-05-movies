import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 40px 15px;
  width: 1200px;
  .title {
    font-size: 30px;
    text-align: center;
  }
  .movieLinkList {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }
  .movieLink {
    text-decoration: none;
    border: 1px solid purple;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    border-radius: 20px;
    width: 140px;
    height: 100%;
    padding: 15px;
    text-align: center;
  }
  .movieLink:hover,
  .movieLink:focus {
    color: white;
    background-color: purple;
  }

  .movieItem {
    width: 100%;
  }
`;
export default StyledContainer;
