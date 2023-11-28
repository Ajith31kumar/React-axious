import React, { createContext, useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext({
  user: [],
  setUser: () => Promise,
  inputData: [],
  setInputData: () => Promise,
  handleSubmit: () => null,
  handleDelete: () => null,
});

export const useUser = () => useContext(UserContext);

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState([]);
  const [inputData, setInputData] = useState(null);

  // Get Value
  useEffect(() => {
    Axios.get("/mocks/users.json")
        .then(response => setUser(response.data))
        .catch(err => console.log("Axios get Error ::", err))
}, [])

  // Add new Data
  const navigat = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault()
        setUser([...user,{...inputData}]);
        alert("Data added Successfully");
        navigat('/');
  };

  // Delete the Data
  const handleDelete = (id) =>{
    console.log(id)
    const conf = window.confirm("Do You Want Delete");
    if(conf){
        setUser(user.filter(item => item.id !== id));
        alert("Your Record has been Deleted");
        navigat('/')
    }
  }

  const value = {
    user,
    setUser,
    handleSubmit,
    inputData,
    setInputData,
    handleDelete,
  }

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}