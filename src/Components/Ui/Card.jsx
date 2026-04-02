import React, { useState } from "react";
import { FaFlag, FaStar, FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Card = ({player, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleChoosePlayer = () => {

    let newCoin = coin - player.price;
      if(newCoin >= 0){
        setCoin(coin - player.price)
      }
      else{
        toast.error("Not enough coin to purchase this player")
        return;
      }

    toast.success(`${player.playerName} is Selected`)
      setIsSelected(true); 
      setSelectedPlayers([...selectedPlayers, player])

  }

  return (
    <div className="card bg-base-100 shadow-sm md:p-5 space-y-5">
      <figure>
        <img src={player.playerImg} alt="Shoes" className="w-full h-80 object-cover rounded-t-xl md:rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <FaUser></FaUser> {player.playerName}
        </h2>
        <div className="flex justify-between gap-2 items-center">
          <div className="flex items-center gap-2">
            <FaFlag></FaFlag>
            <p>{player.playerCountry}</p>
          </div>
          <button className="btn rounded-4xl bg-gray-200">{player.playerType}</button>
        </div>
        <div className="divider -my-1"></div>
        <h2 className="font-bold flex items-center gap-2"><FaStar></FaStar> Rating: {player.rating}</h2>
        <div className="flex justify-between gap-4 font-bold">
          <p>{player.battingStyle}</p>
          <p className="text-right">{player.bowlingStyle}</p>
        </div>

        <div className="card-actions justify-between items-center mt-4">
          <p className="font-semibold">Price: ${player.price}</p>
          <button onClick={handleChoosePlayer} className="btn" disabled={isSelected === true ? true : false}>{isSelected === true ? "Selected" : "Choose Player"}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
