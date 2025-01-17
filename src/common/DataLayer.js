import React, { createContext, useContext, useReducer } from "react";

const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => {
  //console.log("DATA LAYER", useContext(DataLayerContext));
  return useContext(DataLayerContext);
};
