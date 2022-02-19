import { Person } from './person';
import './style.css';

let pessoa = new Person();
pessoa.firstName = 'Thiago';
pessoa.middleName = 'Augusto';
pessoa.lastName = 'Alvarenga';
pessoa.age = '36';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Pessoa</h1>
<div>${pessoa.getFullName()}</div>
<div>${pessoa.getBirthdayYear()}</div>
`;
