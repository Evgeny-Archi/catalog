/* eslint-disable react/display-name */
import React, { useState, useEffect, FC } from 'react';
import { useParams, useNavigate, Params } from 'react-router-dom';

const getUrl = (params: Params) => {
    return Object.values(params)
        .map((value) => value)
        .join('/');
};

const wrapAsPage = <T extends Record<string, unknown>>(Component: FC<T>): FC<T> => {
    return () => {
        const [data, setData] = useState(null);
        const params = useParams();
        const navigate = useNavigate();

        useEffect(() => {
            fetch(`/api/firms/${getUrl(params)}`)
                .then((res) => res.json())
                .then((data) => setData(data))
                .catch((err) => {
                    console.log(err);
                    navigate('*');
                });
        }, [navigate, params]);

        return data !== null ? <Component {...data} /> : <div>Loading...</div>;
    };
};

export default wrapAsPage;
