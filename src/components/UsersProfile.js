import React from 'react';
import { useSelector } from 'react-redux';

const UsersProfile = () => {
  const Users = useSelector((state) => state.users.value);

  return (
    <div
      style={{
        display: 'flex',
        width: '300px',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '60px',
        border: '1px solid black',
        padding: 20,
      }}
    >
      {Users.map((user, index) => (
        <>
          <div>
            <div
              style={{
                textAlign: 'center',
                border: '1px solid gray',
                margin: 5,
                padding: 10,
              }}
            >
              <h1
                style={{
                  fontSize: 24,
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                }}
              >
                id:{user.id}
              </h1>
              <div
                style={{
                  fontSize: 24,
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                }}
              >
                Name:{user.name}
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                }}
              >
                Username:{user.username}
              </div>
              <div style={{ marginTop: 20 }}>
                <input
                  style={{ padding: 5, marginBottom: 10, outline: 'none' }}
                  type='text'
                  placeholder='Update Username'
                />
                <button
                  style={{
                    color: '#ffffff',
                    backgroundColor: 'green',
                    border: 'none',
                    padding: 6,
                    marginLeft: 5,
                  }}
                >
                  Update
                </button>
                <button
                  style={{
                    color: '#ffffff',
                    backgroundColor: 'red',
                    border: 'none',
                    padding: 6,
                    marginLeft: 5,
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default UsersProfile;
