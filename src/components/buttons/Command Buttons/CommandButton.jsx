import styles from './CommandButton.module.css';

const CommandButton = ({ commandTerm, selected = false, onClick=()=>{} , disabled=false }) => {
  return (
    <button 
      className={`${styles.button} ${selected ? styles.selected : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {commandTerm}
    </button>
  );
};

export default CommandButton;
