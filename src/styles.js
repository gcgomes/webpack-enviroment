import styled from 'styled-components';

const navHeight = '80px';

export const NavBar = styled.div`
  width: 100%;
  height: ${navHeight};
  display: block;
  background-color: #e1e1e1;
  
  .container {
    width: 1024px;
    margin: 0 auto;
    display: flex;
  }
`;

export const Brand = styled.div`
  height: ${navHeight};
  
  a {
    img {
      height: 60px;
      width: auto;
      padding-top: 10px;
    }
  }
`;

export const Menu = styled.div`
  height: ${navHeight};
  width: 100%;
  
  ul {
    display: flex;
      list-style: none;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
    
    li {
      margin: 0 10px;
      font-size: 30px;
      
       a {
        color: #000;
        text-decoration: none;
        line-height: ${navHeight};
       }
    }
  }
`;