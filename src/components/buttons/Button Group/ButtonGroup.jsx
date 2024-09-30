import { useState } from 'react';
import CommandButton from '../Command Buttons/CommandButton.jsx';
import styles from './ButtonGroup.module.css';

const ButtonGroup = ({ keywords, selected=null, onClick }) => {
  // const [active, setActive] = useState(selected);

  const handleKeywordClick = (commandTerm) => {
    onClick?.(commandTerm);
  };
  

  return (
    <div className={styles.container}>
      {keywords.map((k, index) => (
        <CommandButton
          key={index}
          className={styles.button}
          commandTerm={k}
          selected={selected === k}
          onClick={() => handleKeywordClick(k)}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
