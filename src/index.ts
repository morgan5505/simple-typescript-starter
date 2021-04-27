import { DataError } from './consts/dataError';
import { handleAge } from './handleAge';
import { handleCityState } from './handleCityState';
import { handleFlags } from './handleFlags';
import { handleName } from './handleName';
import { readInputFile } from './readInputFile';

const string = readInputFile();
if (!string) {
  throw new Error(DataError);
}

// strip all extra whitespace out so there is only a single blank line between entries!
const stringArray = string.replace(/(\n\s*?\n)\s*\n/, '$1').split('\n');

const output: {
  name: string;
  age?: string;
  city?: string;
  state?: string;
  gender?: string;
  student?: string;
  employee?: string;
}[] = [];
let current = 0;
stringArray.map(item => {
  if (item.includes('(Name)')) {
    const name = handleName(item);
    output[current] = {
      name,
    };
  } else if (item.includes('Age')) {
    const age = handleAge(item);
    const person = output[current];
    person.age = age;
    output[current] = person;
  } else if (item.includes('City')) {
    const { city, state } = handleCityState(item);
    const person = output[current];
    person.city = city;
    person.state = state;
    output[current] = person;
  } else if (item.includes('Flags')) {
    const person = output[current];
    const { gender, student, employee } = handleFlags(item);
    person.gender = gender;
    person.student = student;
    person.employee = employee;
    output[current] = person;
  } else if (item === '') {
    current += 1;
  }
  // handle Error outside of internal functions
});

output.map(({ name, age, city, gender, student, employee, state }) => {
  console.log(`${name} [${age ? `${age}, ` : ''}${gender}]
  \tCity : ${city}
  \tState :${state ? state : ' N/A'}
  \tStudent : ${student}
  \tEmployee : ${employee}`);
});
