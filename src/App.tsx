// import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';

function App() {
  const PersonName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'David',
      last: 'Beckham'
    },
    {
      first: 'Arnold',
      last: 'Swarzenneger'
    },
    {
      first: 'Sylvester',
      last: 'Stallone'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Greet name='Ninjas' messageCount={20} isLoggedIn={true} />
      
      <Person name={PersonName} />
      
      <PersonList names={nameList}/>
      
      <Status status='error' />
      
      <Heading>Placeholder text</Heading>
      
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>

      <Greet name='Makanaki' isLoggedIn={true} />

      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />

      <Input value='' handleChange={(event) => console.log(event)} />

      <Container styles={{ border: '1px solid black', padding: '1rem' }} />

      <LoggedIn />
    </div>
  );
}

export default App;
