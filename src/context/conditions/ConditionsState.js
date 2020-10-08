import React, { useReducer } from 'react';
import ConditionsContext from './conditionsContext';
import ConditionsReducer from './conditionsReducer';
import { GET_CONDITIONS } from '../types';

const ConditionsState = (props) => {
  const initialState = {
    conditions: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ConditionsReducer, initialState);

  const getConditions = async (identifier) => {
    const response = await fetch(
      `https://hidden-coast-89842.herokuapp.com//weather/${identifier}.json`
    );

    const data = await response.json();

    dispatch({
      type: GET_CONDITIONS,
      payload: data.report.conditions,
    });
  };

  return (
    <ConditionsContext.Provider
      value={{
        conditions: state.conditions,
        getConditions,
      }}
    >
      {props.children}
    </ConditionsContext.Provider>
  );
};

export default ConditionsState;
