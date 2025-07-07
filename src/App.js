import Display from "./Components/Display/Display";
import Keyboard from "./Components/Keyboard/Keyboard";
import Body from "./Components/Body/Body";
import Panel from "./Components/Panel/Panel";
import styles from "./style.module.scss";
import { useSelector, useDispatch} from "react-redux";
import HistoryModal from "./Components/History/HistoryModal";
import { inputDigit, inputOperator, calculate } from "./Redux/calculatorSlice";
import { useEffect } from "react";

function App() {
  const isHistoryVisible = useSelector((state) => state.calculator.isHistoryVisible);
  const history = useSelector((state) => state.calculator.history);
  const dispatch = useDispatch();


  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key;

      if((/^[0-9]$/).test(key)) {
        dispatch(inputDigit(key));
      } else if ((/^[+\-*/.=]$/).test(key)) {
        dispatch(inputOperator(key));
      } else if (key === 'Enter') {
        dispatch(calculate());
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  },[]);
  

  

 
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
