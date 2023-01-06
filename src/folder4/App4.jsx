import React, {useContext} from "react";

const ThemeContext = React.createContext('light');
ThemeContext.displayName = "ThemeContext";
const UserContext = React.createContext({
  name: 'Guest',
});
UserContext.displayName = "UserContext";

function Layout(props) {
  return (
    <div>
      <SideBar />
      <Content />
    </div>
  );
}

function SideBar(props) {
  return <h1>사이드 바</h1>
}

function Content(props) {
  return (
    <div>
      <Profile />
    </div>
  );
}

function Profile(props) {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      <h3>user : {user.name}</h3>
      <h3>theme : {theme}</h3>
    </div>
  );
}


function App4(props) {
  // const {signedInUser, theme} = {signedInUser: {name: "아이유"}, theme: 'dark'};

  return (
    <ThemeContext.Provider value={"blue"}>
      <UserContext.Provider value={{name: "아이유"}}>
        <Layout />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App4;
