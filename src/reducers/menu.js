export const STATE_KEY = 'menu';

export const ACTIONS_TYPES = {
  SHOW_MENU: `${STATE_KEY}/SHOW_MENU`,
  CLOSE_MENU: `${STATE_KEY}/CLOSE_MENU`,
};

export const initialState = {
  isOpenMenu: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_MENU':
      return {
        ...state,
        isOpenMenu: true,
      };
    case 'CLOSE_MENU':
      return {
        ...state,
        isOpenMenu: false,
      };
    default:
      return state;
  }
}

export function showMenu() {
  return {
    type: 'SHOW_MENU',
  };
}

export function closeMenu() {
  return {
    type: 'CLOSE_MENU',
  };
}
