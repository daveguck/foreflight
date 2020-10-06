import React, { useReducer } from 'react';
import ConditionsContext from './conditionsContext';
import ConditionsReducer from './conditionsReducer';
import { GET_CONDITIONS, SET_LOADING } from '../types';

const ConditionsState = (props) => {
  const initialState = {
    conditions: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ConditionsReducer, initialState);

  const getConditions = async (identifier) => {
    console.log(identifier);
    const response = await fetch(
      `http://localhost:3000/weather/${identifier}.json`
    );

    const data = await response.json();
    console.log(data);

    dispatch({
      type: GET_CONDITIONS,
      payload: data.report.conditions,
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ConditionsContext.Provider
      value={{
        conditions: state.conditions,
        loading: state.loading,
        getConditions,
      }}
    >
      {props.children}
    </ConditionsContext.Provider>
  );
};

export default ConditionsState;
