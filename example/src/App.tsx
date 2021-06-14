/**
 * @Copyright 2021 Yuanfudao Inc, All Rights Reserved.
 * @author: zhengjiaqibj
 * @createTime: 2021-06-13 14:26:07
 * @lastEditTime: 2021-06-14 16:48:24
 * @lastEditor: zhengjiaqibj
 * @description: 文件描述;
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComponentExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
