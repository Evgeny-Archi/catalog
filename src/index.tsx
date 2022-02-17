import React, { FC } from 'react';
import ReactDom from 'react-dom';
import logoUri from './logo.svg';
import Counter from './Counter';
import './style.css';

type Props = {
    a: string;
};

const App: FC<Props> = ({ a }) => {
    console.log(a);
    return (
        <>
            <div>Hello world</div>
            <Counter />
            <img src={logoUri} width="200" alt="alt" />
        </>
    );
};

ReactDom.render(<App a="string" />, document.getElementById('root'));
