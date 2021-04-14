import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bridge from '@vkontakte/vk-bridge';

bridge.send('VKWebAppInit',{})
  bridge.subscribe((e) => {
  console.log('bridge event', e);
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


