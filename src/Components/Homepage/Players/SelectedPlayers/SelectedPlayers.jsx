import React from "react";
import { FaUser } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  console.log(selectedPlayers);
    const handleDeleteSelectedPlayer = (player) => {
        console.log(player);
        const filteredPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.playerName !== player.playerName) 
        console.log(filteredPlayers);
        setSelectedPlayers(filteredPlayers);
        setCoin(coin + player.price)
    }

  return (
    <div className="space-y-4">
      {selectedPlayers.length === 0 ?  
        <div className="h-[400px] flex items-center justify-center flex-col gap-4">
            <h2 className="font-semibold text-3xl">No Players Selected Yet</h2>
            <p className="text-gray-400">Go to available tab to select players</p>
        </div>
      : selectedPlayers.map((player, ind) => {
        return (
          <div key={ind} className="flex items-center gap-6 justify-between p-10 rounded-2xl border ">
            <div className="flex items-center gap-6">
                <img src={player.playerImg} alt={player.playerName} className="h-[75px] w-auto rounded-md"/>
                <div>
                    <h2 className="flex items-center gap-2 font-bold text-2xl"><FaUser></FaUser> {player.playerName}</h2>
                    <p className="mt-1">{player.playerType}</p>
                </div>
            </div>
            <button className="btn text-red-500 text-2xl" onClick={() => handleDeleteSelectedPlayer(player)}><MdDelete></MdDelete></button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
