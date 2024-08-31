import { useState } from 'react';
import CommandButton from '../Command Buttons/CommandButton';
import styles from './Keywords.module.css';

const Keywords = ({ keywords, onClick }) => {
  const [selected, setSelected] = useState(keywords[0]);

  const handleKeywordClick = (commandTerm) => {
    setSelected(commandTerm);
    if (onClick) {
      onClick(commandTerm);
    }
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

export default Keywords;
