import React from "react";
import Card from "../../../Ui/Card";

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player) => {
          return (
            <Card key={player.playerName} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
