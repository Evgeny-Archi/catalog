import React, { FC, useState } from 'react';

const Counter: FC = () => {
    const [count, setCount] = useState(1);
    const handle = () => {
        setCount((c) => c + 1);
    };
    return <button onClick={handle}>Click {count}</button>;
};

export default Counter;
