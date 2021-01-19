import React, { useState, useCallback } from "react";
// @material-ui/core components

// import bcrypt from "bcrypt";
// const encode = async (password) => {
//   const saltRounds = 10;
//   const hash = await bcrypt.hash(password, saltRounds);
//   return hash;
// };

import Login from "./Login.js";
import Profile from "./Profile";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { USERS_QUERY } from "../../graphql";
export default function Account() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");
  const { loading, error, data, refetch } = useQuery(USERS_QUERY, {
    variables: { query: name },
  });
  // if (name !== "") refetch();
  // console.log(data);
  
  return (
    <>
      {login ? (
        <Profile data={data}></Profile>
      ) : (
        <Login changeLogin={setLogin} changeName={setName}></Login>
      )}
    </>
  );
}
