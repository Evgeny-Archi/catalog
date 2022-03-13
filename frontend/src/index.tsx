import React, { FC, useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import ReactDom from 'react-dom';
import Counter from './Counter';
import './style.css';

const App: FC = () => {
    const [nameValue, setNameValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const fileRef = useRef<HTMLInputElement>(null);

    const inputNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNameValue(event.target.value);
    };

    const inputPhoneHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoneValue(event.target.value);
    };

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(fileRef.current?.files);
        const body = new FormData(e.target as HTMLFormElement);
        fetch('/api/files', { method: 'POST', body })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);

    return (
        <>
            <div>Hello world</div>
            <Counter />
            <form onSubmit={submitHandler} encType="multipart/form-data">
                <input type="text" name="name" value={nameValue} onChange={inputNameHandler} />
                <input type="number" name="phone" value={phoneValue} onChange={inputPhoneHandler} />
                <input type="file" name="file" multiple accept="image/*" ref={fileRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

ReactDom.render(<App />, document.getElementById('root'));
