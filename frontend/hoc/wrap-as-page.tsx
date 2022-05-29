/* eslint-disable react/display-name */
import React, { useState, useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';

const wrapAsPage = (Component: FC): FC => {
    return () => {
        const params = useParams();
        const [data, setData] = useState(null);

        console.log(params);

        useEffect(() => {
            fetch('api/firms')
                .then((res) => res.json())
                .then((data) => setData(data));
        }, []);

        return data !== null ? <Component {...data} /> : <div>Loading...</div>;
    };
};

export default wrapAsPage;
