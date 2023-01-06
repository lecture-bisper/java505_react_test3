// Profile.jsx

import React from "react";
import {useParams} from "react-router-dom";

function Profile(props) {
  const profile = useParams();
  return (
    <div>
      <h4>{profile.username}</h4>
      <h4>{profile.test}</h4>
    </div>
  );
}

export default Profile;
