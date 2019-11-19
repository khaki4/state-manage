import React from "react";

const CurrentRoute = React.createContext({ path: "/welcome" });
const CurrentUser = React.createContext(undefined);
const IsStatic = React.createContext(false);

function App1() {
  return (
    <CurrentRoute.Consumer>
      {currentRoute => (
        <CurrentUser.Consumer>
          {currentUser => (
            <IsStatic.Consumer>
              {isStatic =>
                !isStatic &&
                currentRoute.path === "/welcome" &&
                (currentUser
                  ? `Welcome back, ${currentUser.name}!`
                  : "Welcome!")
              }
            </IsStatic.Consumer>
          )}
        </CurrentUser.Consumer>
      )}
    </CurrentRoute.Consumer>
  );
}

function App2() {
  let currentRoute = useContext(CurrentRoute);
  let currentUser = useContext(CurrentUser);
  let isStatic = useContext(IsStatic);

  return (
    !isStatic &&
    currentRoute.path === "/welcome" &&
    (currentUser ? `Welcome back, ${currentUser.name}!` : "Welcome!")
  );
}
