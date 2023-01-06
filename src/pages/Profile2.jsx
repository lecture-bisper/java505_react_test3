// Profile2.jsx

import React from "react";
import {useLocation, useSearchParams} from "react-router-dom";

function Profile2(props) {
  const profile = useLocation();
  console.log(profile);
  const [params, setParams] = useSearchParams();
  console.log(params.get('val1'));
  console.log(params.get('val2'));

  return (
    <div>
      <h4>test</h4>
    </div>
  );
}

export default Profile2;
