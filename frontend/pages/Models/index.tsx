import React, { FC } from 'react';
import wrapAsPage from '../../hoc/wrap-as-page';

const models = {
    toyota: [
        {
            name: 'Prius',
            id: 1,
            url: 'prius',
        },
        {
            name: 'Mark II',
            id: 2,
            url: 'mark-ii',
        },
        {
            name: 'Land Cruiser',
            id: 3,
            url: 'land-cruiser',
        },
    ],
    nissan: [
        {
            name: 'Patrol',
            id: 1,
            url: 'patrol',
        },
        {
            name: 'Arya',
            id: 2,
            url: 'arya',
        },
        {
            name: 'Cedric',
            id: 3,
            url: 'cedric',
        },
    ],
    honda: [
        {
            name: 'Civic',
            id: 1,
            url: 'civic',
        },
        {
            name: 'Prelude',
            id: 2,
            url: 'prelude',
        },
        {
            name: 'S2000',
            id: 3,
            url: 's2000',
        },
    ],
};

const Models: FC<{ children?: React.ReactNode }> = () => {
    return (
        <div>
            <h3>Models page</h3>
        </div>
    );
};

export default wrapAsPage(Models);
