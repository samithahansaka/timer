import React, { useState, useEffect } from "react";
import axios from "axios";

import MainScreen from "./screens/main-screen";
import UnAuthorized from "./screens/un-authorized";

import { API_URL } from "./utility/utility";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL + window.location.search)
      .then((response: any) => {
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return user ? <MainScreen user={user} /> : <UnAuthorized />;
}

export default App;
