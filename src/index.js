import React from 'react';
import ReactDOM from 'react-dom';

import {Brand, NavBar, Menu} from "./styles";

function App() {
  return (
    <NavBar>
      <div className={"container"}>
        <Brand>
          <a href="#">
            <img src="../public/logo.png" alt="Logo"/>
          </a>
        </Brand>
        <Menu>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Participe</a>
            </li>
          </ul>
        </Menu>
      </div>
    </NavBar>
  );
}

const container = document.getElementById('navbar');
container ? ReactDOM.render(<App/>, container) : null;