/* eslint-disable react/display-name */
import React, { FC, useState, useEffect, ComponentType } from 'react';
import { useParams } from 'react-router-dom';

type Props = {
    data?: string[];
};

const wrapAsPage = (Component: ComponentType<Props>, Fallback: FC): ComponentType<Props> => {
    return (props: Props) => {
        const [data, setData] = useState<string[]>([]);
        const params = useParams();
        console.log(params);

        Object.entries(params).forEach((item) => console.log(item));

        useEffect(() => {
            fetch(`/api/brands`)
                .then((res) => res.json())
                .then((serverData) => setData(serverData));
        }, []);
        return data.length !== 0 ? <Component {...props} data={data} /> : <Fallback />;
    };
};

export default wrapAsPage;
