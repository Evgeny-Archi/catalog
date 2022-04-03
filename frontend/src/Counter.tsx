import React, { FC, useMemo, useEffect, useCallback, useState } from 'react';

type Props = {
    name: string;
    age?: number;
    test?: VoidFunction;
    test2?: string;
    test3?: string;
};

const Counter: FC<Props> = ({ name, age = 2, test, test2 = 'asd', test3 }) => {
    const [, setState] = useState<Props | null>(null);
    const handler = useCallback(() => console.log('asd'), []);
    const errorHandler = test || handler;
    const props = useMemo(() => {
        return {
            name,
            age,
            errorHandler,
            test2,
            test3,
        };
    }, [age, errorHandler, name, test2, test3]);

    useEffect(() => {
        setState(props);
    }, [errorHandler, props]);

    return <div>counter</div>;
};

export default Counter;
