import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Fallback from '../../components/Fallback/Fallback';
import wrapAsPage from '../../hoc/wrap-as-page';

type Props = {
    data?: string[];
};

const models = ['mark', 'corolla', 'camry'];

const Brand: FC<Props> = () => {
    return (
        <div>
            <h3>Brand</h3>
            {models.map((model) => (
                <span key={model} style={{ display: 'block' }}>
                    <Link to={model}>{model}</Link>
                </span>
            ))}
        </div>
    );
};

export default wrapAsPage(Brand, Fallback);
