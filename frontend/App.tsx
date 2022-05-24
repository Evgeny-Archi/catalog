import React, { FC, useState, useEffect } from 'react';

const App: FC = () => {
    const [firms, setFirms] = useState<string[] | null>(null);

    useEffect(() => {
        fetch('/api/firms')
            .then((res) => res.json())
            .then((data) => setFirms(data));
    }, []);

    return (
        <div>
            <h1>Firms</h1>
            {firms !== null ? (
                <div>
                    {firms.map((firm) => (
                        <span style={{ color: 'red' }} key={firm}>
                            {firm} &nbsp;
                        </span>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default App;
