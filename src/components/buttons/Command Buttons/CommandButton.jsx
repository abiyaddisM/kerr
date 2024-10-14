import styles from './CommandButton.module.css';

const CommandButton = ({ commandTerm, selected = false, onClick }) => {
  return (
    <button 
      className={`${styles.button} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {commandTerm}
    </button>
  );
};

export default CommandButton;
