import React, { useState } from "react";

let clearData;

// this context stores previous data requests to reduce api calls, since data rarely updates anyway
const ApiContext = React.createContext({
  first: {
    name: "",
    articles: [],
  },
  second: {
    name: "",
    articles: [],
  },
  searchQuery: {
    name: "",
    articles: [],
  },
  update: () => {},
});

export const ApiContextProvider = (props) => {
  const [first, setFirst] = useState(null);

  const [second, setSecond] = useState(null);

  const [searchQuery, setSearchQuery] = useState(null);

  // takes an object with a name string and articles array
  const updateHandler = (requestObject, isSearchQuery) => {
    if (isSearchQuery) {
      setSearchQuery(requestObject);
      return;
    } else {
      setSecond(first);
      setFirst(requestObject);
    }
  };

  const contextValue = {
    first: first,
    second: second,
    searchQuery: searchQuery,
    update: updateHandler,
  };

  return (
    <ApiContext.Provider value={contextValue}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
