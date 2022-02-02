import './style.css';
import foo from './main';

function component() {
    const root = document.getElementById('root');
    const element = document.createElement('div');
    element.innerHTML = "Hello";

    foo();

    root.appendChild(element);
}

component();