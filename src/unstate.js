import React from "react";

export function createContainer(useHook) {
  let Context = React.createContext(null);

  function Provider({ initialState, children }) {
    const value = useHook(initialState);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  }

  function useContainer() {
    const value = React.useContext(Context);
    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }
    return value;
  }

  return { Provider, useContainer };
}

export function useContainer(container) {
  return container.useContainer();
}
