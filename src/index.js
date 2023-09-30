import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// id가 root인 곳을 가리키는 거임. id 바꾸려면 여기랑 같이 바꿔라~
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// 여기있는 APP이 컴포넌트이다.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();