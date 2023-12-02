import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b><i>Какие цели хочу достичь.</i></b><br />
          1. Научиться самостоятельно с нуля создавать приложения на React.<br />
          2. Получить опыт командной работы с Git.<br />
          3. Научиться покрывать свой код тестами.<br />
          <br></br>
          <b><i>Какими технологиями хочу овладеть.</i></b><br />
          1.React и Typescript<br />
          2.Webpack<br />
          3.Jest<br />
          4.GraphQL<br />
          <br></br>
          <b><i>Какими технологиями владею.</i></b><br />
          1. HTML и CSS<br />
          2. JavaScript<br />
          3. SQL<br />
          4. Python<br />
          <br></br>
          <b><i>Обо мне.</i></b><br />
          Мне 27 лет.Живу в городе Калининград. Работаю в IT уже лет 5, на данный момент в банке разработчиком CRM системы.<br />
          В основном всегда писал бекенд, но сейчас начал изучать фронтенд.<br />
          В свободное время катаюсь на лонгборде,играю в компьютерные игры, занимаюсь спортом.<br />
        </p>
      </header>
    </div>
  );
}

export default App;

