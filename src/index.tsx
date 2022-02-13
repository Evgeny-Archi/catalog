import React, { FC } from 'react';
import ReactDom from 'react-dom';
import logoUri from './logo.svg';
import Counter from './Counter';
import './style.css';

const App: FC = () => {
  console.log(process.env.NODE_ENV);
  return (
    <>
  <div>Hello world</div>
  <Counter />
  <img src={logoUri} width="200" />
  </>
  );
};

ReactDom.render(<App />,
    document.getElementById('root')
);
