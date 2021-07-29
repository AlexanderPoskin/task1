import React from 'react';
import faker from 'faker';
import './UserCard.scss';

const UserCard = ({ name, username, website }) => {
  return (
    <div className="user-card">
      <div className="user-card__name">{name}</div>
      <div className="user-card__username">{username}</div>
      <div className="user-card__website">
        <a href={`https://${website}`} target="_blank" rel="noreferrer">
          {website}
        </a>
      </div>
      <div
        className="user-card__avatar"
        style={{ backgroundImage: `url(${faker.image.avatar()})` }}
      ></div>
    </div>
  );
};

export default UserCard;
