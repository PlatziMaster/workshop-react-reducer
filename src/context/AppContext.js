import React from 'react';
import initialState from '../initialState';

export const AppContext = React.createContext({});

export const useContextApp = () => {
  const [state, setState] = React.useState(initialState);

  const addUsername = (payload) => {
    setState({
      ...state,
      user: [...state.user, payload]
    });
  }

  const actions = {
    addUsername
  }

  return { state, actions }

}