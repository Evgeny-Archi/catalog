import React, { FC, useEffect } from 'react';
import ReactDom from 'react-dom';
import { Logo } from './assets';
import logoUrl from './assets/logo.svg';
import Counter from './Counter';
import './style.css';

const App: FC = () => {
    useEffect(() => {
        fetch('/api').then((res) => console.log(res));
    }, []);

    return (
        <>
            <div>Hello world</div>
            <Counter />
            <div style={{ width: '200px', height: '200px', background: `url(${logoUrl})` }}></div>
            <img src={logoUrl} width="200" alt="alt" />
            <Logo />
        </>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
