import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playersPromise, setCoin, coin }) => {
  console.log(playersPromise);
  const players = use(playersPromise);
  console.log(players);
  const [selectedType, setSelectedType] = useState("available");
  console.log(selectedType, "selectedType");
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-between gap-4 items-center mb-9">
        {selectedType === "available" ? (
          <h2 className="font-semibold md:font-bold text-3xl">Available Players</h2>
        ) : (
          <h2 className="font-semibold md:font-bold text-3xl">Selected Players {selectedPlayers.length}/{players.length}</h2>
        )}
        <div className="flex px-2 mx-4">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-gray-200"} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-gray-200"} btn rounded-l-none rounded-r-xl`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      {selectedType === "available" ? (
        <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} ></AvailablePlayers>
      ) : (
        <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin} ></SelectedPlayers>
      )}
    </div>
  );
};

export default Players;
