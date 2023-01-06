// App3.jsx

import React from "react";

const ThemeContext = React.createContext('light');
const UserContext = React.createContext({name: "Guest"});

function App3(props) {
  const {theme, signedInUser} = props;

  return (
    <ThemeContext.Provider value={theme} >
      <UserContext.Provider value={signedInUser} >
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Layout() {
  return (
    <div></div>
  )
}

function ProfilePage(props) {
  return (
    <div></div>
  )
}

function Content() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <UserContext.Consumer>
          {user => (
            <ProfilePage user={user} theme={theme} />
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default App3;
