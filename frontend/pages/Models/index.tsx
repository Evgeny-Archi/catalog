import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import wrapAsPage from '../../hoc/wrap-as-page';
import { PageData } from './types';

const Models: FC<PageData> = ({ models }) => {
    return (
        <div>
            <h3>Models page</h3>
            {models.map((model) => (
                <Link to={model.url} key={model.id}>
                    {model.name}
                </Link>
            ))}
        </div>
    );
};

export default wrapAsPage(Models);
