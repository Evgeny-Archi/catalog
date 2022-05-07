import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';

const rootContainer = document.getElementById('root');

const App: FC = () => {
    return <div>Home</div>;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(rootContainer!);
root.render(<App />);
