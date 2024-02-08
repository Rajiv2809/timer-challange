import Player from "./components/Player.jsx";
import TimmerChallenge from "./components/TimmerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimmerChallenge title="easy" targetTime={1} />
        <TimmerChallenge title="not easy" targetTime={5} />
        <TimmerChallenge title="Getting tough" targetTime={10} />
        <TimmerChallenge title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
