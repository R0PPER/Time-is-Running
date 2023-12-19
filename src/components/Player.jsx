import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);


  function handleOnClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>
        Welcome to the game "{enteredPlayerName ?? "Uknown Entity"}" {/*"This means that if the enteredPlayerName is truthy it will be used, otherwise it will be 'Uknown Entity'"*/}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
