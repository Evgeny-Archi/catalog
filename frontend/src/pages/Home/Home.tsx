import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Fallback from '../../components/Fallback/Fallback';
import wrapAsPage from '../../hoc/wrap-as-page';

type Props = {
    data?: string[];
};

const Home: FC<Props> = ({ data }) => {
    return (
        <div>
            <h3>Home</h3>
            {data &&
                data.map((brand) => (
                    <span key={brand} style={{ display: 'block' }}>
                        <Link to={brand}>{brand}</Link>
                    </span>
                ))}
        </div>
    );
};

export default wrapAsPage(Home, Fallback);
