import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../reducers/menu';
import Menu from './Menu';
import './Header.scss';

const Header = () => {
  const isOpenMenu = useSelector((state) => state.menu.isOpenMenu);
  const dispatch = useDispatch();
  const menuHandler = () => {
    dispatch(showMenu());
  };

  console.log(menuHandler);

  return (
    <div className="header">
      <button onClick={menuHandler} className="header__menu">
        Menu
      </button>
      <div>{isOpenMenu ? <Menu /> : ''}</div>
    </div>
  );
};

export default Header;
