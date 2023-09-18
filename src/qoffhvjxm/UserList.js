import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: 'dndhk',
      email: 'dndhk@gmail.com'
    },
    {
      id: 2,
      username: 'Lee',
      email: 'Lee@example.com'
    },
    {
      id: 3,
      username: 'dada',
      email: 'dada@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
}

export default UserList;