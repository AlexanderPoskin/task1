import React from 'react';
import './components.css';

const UserCard = ({ name, username, website }) => {
  return (
    <div className="user_card">
      <div className="user_card_name">{name}</div>
      <div className="user_card_username">{username}</div>
      <div className="user_card_website">
        <a href={`https://${website}`} target="_blank" rel="noreferrer">
          {website}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
