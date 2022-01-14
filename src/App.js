import './App.css';
import UsersProfile from './components/UsersProfile';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addUser } from './redux/reducers';

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [username, setUserName] = useState();

  const handleData = () => {
    dispatch(
      addUser({
        id: (Math.random() * 100).toFixed(0),
        name,
        username,
      })
    );
    setUserName('');
    setName('');
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '60px',
        border: '1px solid black',
        padding: 20,
      }}
    >
      <div
        className='App'
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '60px',
          border: '1px solid black',
          padding: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
          }}
        >
          <input
            style={{ padding: 5, marginBottom: 10, outline: 'none' }}
            type='text'
            value={name}
            placeholder='name'
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={{ padding: 5, marginBottom: 10, outline: 'none' }}
            type='text'
            value={username}
            placeholder='Username'
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            onClick={handleData}
            style={{
              color: '#ffffff',
              backgroundColor: 'blue',
              border: 'none',
              borderRadius: 6,
              padding: 5,
            }}
          >
            Add User
          </button>
        </div>
      </div>
      <UsersProfile />
    </div>
  );
}

export default App;
