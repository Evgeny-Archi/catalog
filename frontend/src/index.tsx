import React, { FC } from 'react';
import { hydrateRoot } from 'react-dom/client';

const App: FC = () => {
    return (
        <div>
            <h1>Title</h1>Home
        </div>
    );
};

const rootContainer = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
hydrateRoot(rootContainer!, <App />);
