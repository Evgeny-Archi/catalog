import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import wrapAsPage from '../../hoc/wrap-as-page';
import { PageData } from './types';

const Firms: FC<PageData> = ({ firms }) => {
    return (
        <div>
            <h3>Firms</h3>
            {firms.map((firm) => (
                <Link to={firm.url} key={firm.id}>
                    {firm.name}
                </Link>
            ))}
        </div>
    );
};

export default wrapAsPage(Firms);
