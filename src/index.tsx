import React, { FC } from 'react';
import ReactDom from 'react-dom';
import { Logo } from './assets';
import logoUrl from './assets/logo.svg';
import Counter from './Counter';
import './style.css';

type Props = {
    a: string;
};

const App: FC<Props> = (props) => {
    const b = props.a;
    console.log(b);
    return (
        <>
            <div>Hello world</div>
            <div>asd</div>
            <Counter />
            <div style={{ width: '200px', height: '200px', background: `url(${logoUrl})` }}></div>
            <img src={logoUrl} width="200" alt="alt" />
            <Logo />
        </>
    );
};

ReactDom.render(<App a="string" />, document.getElementById('root'));
