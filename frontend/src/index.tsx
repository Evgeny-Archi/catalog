import React, { FC } from 'react';
import { hydrateRoot } from 'react-dom/client';

const App: FC = () => {
    return <div>Home</div>;
};

const rootContainer = document.getElementById('root');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
hydrateRoot(rootContainer!, <App />);
