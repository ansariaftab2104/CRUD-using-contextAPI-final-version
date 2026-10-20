import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { MyStore } from "./context/AppContext";

const App = () => {
  const { toggle } = useContext(MyStore);
  return (
    <div className="w-full min-h-screen bg-zinc-300">
      <Navbar />
      {toggle ? <UserCard /> : <Form />}
    </div>
  );
};

export default App;
