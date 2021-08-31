import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu, closeMenu } from '../reducers/menu';
import Menu from './Menu';
import './Header.scss';

const Header = () => {
  const [buttonName, newButtonName] = useState(false);
  const isOpenMenu = useSelector((state) => state.menu.isOpenMenu);
  const dispatch = useDispatch();
  const menuHandler = () => {
    if (isOpenMenu) {
      dispatch(closeMenu());
    } else dispatch(showMenu());
    newButtonName(!buttonName);
  };

  console.log(menuHandler);

  return (
    <div className="header">
      <button onClick={menuHandler} className="header__menu">
      {buttonName ? 'Close menu' : 'Menu'}
      </button>
      {isOpenMenu ? <Menu /> : ''}
    </div>
  );
};

export default Header;
