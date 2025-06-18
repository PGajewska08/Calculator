import Display from "./Components/Display/Display";
import Keyboard from "./Components/Keyboard/Keyboard";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div className="App">
      <div>
        <Body>
          <Display/>
          <Keyboard/>
        </Body>
      </div>
    </div>
  );
}

export default App;
