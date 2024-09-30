import React from 'react';
import styles from './RadioButtons.module.css';

const RadioButtons = ({ keywords = [], children, selected, onSelect, border = false }) => {
    return (
        <div className={`${styles.container} ${border ? styles.outerBorder : ''}`}>
            {keywords.length ? (
                keywords.map((k, index) => (
                    <div
                        key={index}
                        className={`${styles.button} ${selected === k ? styles.selected : ''} ${border ? styles.noBorder : ''}`}
                        onClick={() => onSelect(index)}
                    >
                        <p>{k}</p>
                    </div>
                ))
            ) : (
                React.Children.map(children, (child, index) =>
                    React.cloneElement(child, {
                        selected: selected === child.props.commandTerm,
                        onClick: () => onSelect(index),
                    })
                )
            )}
        </div>
    );
};

export default RadioButtons;
