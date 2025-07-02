import Display from "./Components/Display/Display";
import Keyboard from "./Components/Keyboard/Keyboard";
import Body from "./Components/Body/Body";
import Panel from "./Components/Panel/Panel";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import HistoryModal from "./Components/History/HistoryModal";

function App() {
  const isHistoryVisible = useSelector((state) => state.calculator.isHistoryVisible);
  const history = useSelector((state) => state.calculator.history);
 
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <Body>
          <Panel/>
          <Display/>
          <Keyboard/>
        </Body> 
        {isHistoryVisible && <HistoryModal history={history}/>}
      </div> 
    </div>
  );
}

export default App;
