import React from 'react';
import './components.css';

const UserCard = ({ name, username, website }) => {
  return (
    <div className='UserCard'>
      <h3>{name}</h3>
      <p>{username}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserCard;
