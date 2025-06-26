import Display from "./Components/Display/Display";
import Keyboard from "./Components/Keyboard/Keyboard";
import Body from "./Components/Body/Body";
import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.background}>
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
