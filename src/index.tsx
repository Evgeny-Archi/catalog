import React, { FC } from 'react';
import ReactDom from 'react-dom';
import { Logo } from './assets';
import logoUrl from './assets/logo.svg';
import Counter from './Counter';
import './style.css';

interface Circle {
    width: number;
}

interface Rectangle extends Circle {
    height: number;
}

type Shape = Circle | Rectangle;

const isRectangle = (shape: Shape): shape is Rectangle => {
    if ('height' in shape) {
        return true;
    } else {
        return false;
    }
};

const App: FC<{ shape: Shape }> = ({ shape }) => {
    console.log(isRectangle(shape));
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

ReactDom.render(<App shape={{ width: 100 }} />, document.getElementById('root'));
