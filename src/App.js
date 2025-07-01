import Display from "./Components/Display/Display";
import Keyboard from "./Components/Keyboard/Keyboard";
import Body from "./Components/Body/Body";
import Panel from "./Components/Panel/Panel";
import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.background}>
      <div>
        <Body>
          <Panel/>
          <Display/>
          <Keyboard/>
        </Body>
      </div>
    </div>
  );
}

export default App;
