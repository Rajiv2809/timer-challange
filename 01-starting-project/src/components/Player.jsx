import { useRef, useState } from "react";

export default function Player() {
  const namaPlayer = useRef();

  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(namaPlayer.current.value);
    namaPlayer.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "uknown entitiy"}</h2>
      <p>
        <input type="text" ref={namaPlayer} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
