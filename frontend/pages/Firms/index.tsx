import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import wrapAsPage from '../../hoc/wrap-as-page';

const Firms: FC = () => {
    return (
        <div>
            <h3>Firms</h3>
            <Link to="toyota">Toyota</Link>
            <Link to="honda">Honda</Link>
            <Link to="nissan">Nissan</Link>
        </div>
    );
};

export default wrapAsPage(Firms);
