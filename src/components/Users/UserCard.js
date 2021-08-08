import React from 'react';
import faker from 'faker';
import './UserCard.scss';
import { useHistory } from 'react-router-dom';

const UserCard = ({ name, username, website, id }) => {
  const history = useHistory();
  const handlCardClick = () => {
    history.push(`/users/${id}`);
  };
  return (
    <div className="user-card" onClick={handlCardClick}>
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
