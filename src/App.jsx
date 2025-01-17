import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1735325691175-4364b1182809?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Challenger",
      artist: "Harsh",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1734713075891-00d3b3401c2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "One Love",
      artist: "Shubu",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1735216228027-fe31c23474ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Together",
      artist: "Adam",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1735299362091-33c94b71a758?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "On Day",
      artist: "Hitest",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === index) return {...item,added:!item.added}
        return item
      })
    })
  };
  return (
    <div className="w-full h-screen bg-zinc-300 ">
      <Navbar data={songData}/>
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((obj, index) => (
          <Card
            data={obj}
            handleClick={handleClick}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
