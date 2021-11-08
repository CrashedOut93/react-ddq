import { useState } from 'react';
import Form from './Form';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className='App'>
      <Form
        firstName={firstName}
        lastName={lastName}
        email={email}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
      />
      <h1>App Component</h1>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <h2>{email}</h2>
    </div>
  );
}

export default App;
