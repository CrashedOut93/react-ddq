const Form = ({
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmail
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
      email
    };

    //fetch('url').then(res => res.json());
  };

  return (
    <div>
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First name'
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          required
        />{' '}
        <br />
        <input
          type='text'
          placeholder='Last name'
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />{' '}
        <br />
        <input
          type='email'
          placeholder='Email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
