/* eslint-disable react/display-name */
import React, { useState, useEffect, FC } from 'react';

const wrapAsPage = (Component: FC): FC => {
    return () => {
        const [data, setData] = useState(null);

        useEffect(() => {
            fetch('/api/firms')
                .then((res) => res.json())
                .then((data) => setData(data));
        }, []);

        return data !== null ? <Component {...data} /> : <div>Loading...</div>;
    };
};

export default wrapAsPage;
