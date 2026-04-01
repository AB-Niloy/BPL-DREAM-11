import React from "react";
import Card from "../Ui/Card";

const AvailablePlayers = ({ players }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player) => {
          return (
            <Card player={player}></Card>
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
