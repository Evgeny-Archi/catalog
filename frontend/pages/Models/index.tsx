import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

const Models: FC = () => {
    document.title = 'Models';
    const params = useParams();
    console.log(params);
    return (
        <div>
            <h3>Models page</h3>
            <div>{params.firm}</div>
            <Link to="marks">to marks</Link>
        </div>
    );
};

export default Models;
