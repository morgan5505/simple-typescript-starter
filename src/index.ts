const sampleString = `(Name)John Doe
(Age)20
(City)Ashtabula, OH
(Flags)NYN

(Name)Jane Doe
(Flags)YNY
(City)N Kingsville, OH

(Name)Sally Jones
(Age)25
(City)Paris
(Flags)YYY
`;

const stringArray = sampleString.split('\n');

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
    const name = item.replace('(Name)', '');
    output[current] = {
      name,
    };
  } else if (item.includes('Age')) {
    const age = item.replace('(Age)', '');
    const person = output[current];
    person.age = age;
    output[current] = person;
  } else if (item.includes('City')) {
    const cityState = item.replace('(City)', '');
    const person = output[current];
    person.city = cityState;
    output[current] = person;
  } else if (item.includes('Flags')) {
    const flags = item.replace('(Flags)', '').split('');
    const person = output[current];
    const gender = flags[0] === 'Y' ? 'Female' : 'Male';
    const isStudent = flags[1] === 'Y' ? 'Yes' : 'No';
    const isEmployee = flags[2] === 'Y' ? 'Yes' : 'No';
    person.gender = gender;
    person.student = isStudent;
    person.employee = isEmployee;
    output[current] = person;
  }
  if (item === '') {
    current += 1;
  }
});

output.map(({ name, age, city, gender, student, employee, state }) => {
  console.log(`${name} [${age}, ${gender}]
  \tCity: ${city}
  \tState: ${state}
  \tStudent: ${student}
  \tEmployee: ${employee}`);
});
