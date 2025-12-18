import React, { useContext } from "react";
import Sidebar from "./component/Sidebar";
import Player from "./component/Player";
import Display from "./component/Display";
import { PlayerContext } from "./context/playerContext";
// import { assets } from "./assets/assets";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
        <Sidebar />
        <Display />
      </div>
      <div>
        <Player></Player>
        <audio src={track.file} ref={audioRef} preload="auto"></audio>
      </div>
    </div>
  );
};

export default App;
