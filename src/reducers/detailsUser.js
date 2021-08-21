export const STATE_KEY = 'details';

export const ACTIONS_TYPES = {
  LOAD: `${STATE_KEY}/LOAD`,
  LOAD_SUCCESS: `${STATE_KEY}/LOAD_SUCCESS`,
  LOAD_FAIL: `${STATE_KEY}/LOAD_FAIL`,
};

export const initialState = {
  error: null,
  loading: false,
  loaded: false,
  user: {},
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
        user: payload.data,
      };
    case ACTIONS_TYPES.LOAD_FAIL:
      return {
        ...state,
        error,
        loading: false,
        loaded: false,
      };

    default:
      return state;
  }
}

export function loadDetails({ id }) {
  return {
    types: [
      ACTIONS_TYPES.LOAD,
      ACTIONS_TYPES.LOAD_SUCCESS,
      ACTIONS_TYPES.LOAD_FAIL,
    ],
    payload: {
      request: {
        url: `/users/${id}`,
      },
    },
  };
}
