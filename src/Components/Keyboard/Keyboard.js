import Button from '../Button/Button';
import styles from './Keyboard.module.scss';

const Keyboard = () => {
    return <div className={styles.container}>
        <div>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
        </div>
        <div>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
        </div>
        <div>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
        </div>
        <div>
            <Button>x</Button>
            <Button>0</Button>
            <Button>x</Button>
        </div>  
    </div>
    
}

export default Keyboard;