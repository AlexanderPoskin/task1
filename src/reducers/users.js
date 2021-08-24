export const STATE_KEY = 'users';

export const ACTIONS_TYPES = {
  LOAD: `${STATE_KEY}/LOAD`,
  LOAD_SUCCESS: `${STATE_KEY}/LOAD_SUCCESS`,
  LOAD_FAIL: `${STATE_KEY}/LOAD_FAIL`,
  SET_SEARCH: `${STATE_KEY}/SET_SEARCH`,
};

export const initialState = {
  error: null,
  loading: false,
  loaded: false,
  list: [],
  searched: '',
};

export default function reducer(state = initialState, action) {
  const { error, payload, type } = action;
  switch (type) {
    case ACTIONS_TYPES.LOAD:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS_TYPES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        list: payload.data,
      };
    case ACTIONS_TYPES.LOAD_FAIL:
      return {
        ...state,
        error,
        loading: false,
        loaded: false,
      };
    case ACTIONS_TYPES.SET_SEARCH:
      return {
        ...state,
        searched: payload.searched,
      };
    default:
      return state;
  }
}

export function loadUsers() {
  return {
    types: [
      ACTIONS_TYPES.LOAD,
      ACTIONS_TYPES.LOAD_SUCCESS,
      ACTIONS_TYPES.LOAD_FAIL,
    ],
    payload: {
      request: {
        url: '/users',
      },
    },
  };
}

export function setSearch(payload) {
  return {
    type: ACTIONS_TYPES.SET_SEARCH,
    payload,
  };
}
