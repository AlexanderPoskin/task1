import React from 'react';
import faker from 'faker';

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
      <div
        className="user_avatar"
        style={{ backgroundImage: `url(${faker.image.avatar()})` }}
      ></div>
    </div>
  );
};

export default UserCard;
