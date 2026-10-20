import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";
import { MyStore } from "./context/AppContext";

const App = () => {
  const { toggle, userData } = useContext(MyStore);
  return (
    <div className="w-full min-h-screen bg-zinc-300">
      <Navbar />
      {toggle ? <div className="flex flex-wrap gap-5 justify-center pt-10">{userData.map((user)=>{return <UserCard user={user} />})}</div> : <Form />}
    </div>
  );
};

export default App;
