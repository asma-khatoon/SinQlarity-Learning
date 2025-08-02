import React, { useState } from 'react';
import Styles from './App.module.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [userExists, setUserExists] = useState(false);
  const [currentBlock, setCurrentBlock] = useState('red');

  const handleAddUser = () => {
    if (!userExists && inputValue.trim()) {
      setUserExists(true);
    } else {
      alert('Enter input');
    }
  };

  const handleDeleteUser = () => {
    setUserExists(false);
    setInputValue('');
  };

  const moveTo = (color) => {
    if (userExists) {
      setCurrentBlock(color);
    }
  };

  const renderUser = () => {
    if (!userExists) return null;
    return <div className={Styles.block_enter}>{inputValue}</div>;
  };

  return (
    <div className={Styles.main}>
      <div className={Styles.red_div}> 1
        {currentBlock === 'red' && renderUser()}
      </div>

      <div className={Styles.green_div}> 2
        {currentBlock === 'green' && renderUser()}
      </div>

      <div className={Styles.blue_div}> 3
        {currentBlock === 'blue' && renderUser()}
      </div>

      <div className={Styles.yellow_div}> 4
        {currentBlock === 'yellow' && renderUser()}
      </div>

      <div>
        <div>
          <input
            className={Styles.user_enter}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={userExists}
            placeholder="Enter user name"
          />
        </div>
        <button
          className={Styles.btn_pro}
          onClick={handleAddUser}
          disabled={userExists}
        >
          Add User
        </button>
        <button
          className={Styles.btn_pro}
          onClick={handleDeleteUser}
          disabled={!userExists}
        >
          Delete User
        </button>
        <button
          className={Styles.btn_pro}
          onClick={() => moveTo('red')}
        >
          Move to Red
        </button>
        <button
          className={Styles.btn_pro}
          onClick={() => moveTo('green')}
        >
          Move to Green
        </button>
        <button
          className={Styles.btn_pro}
          onClick={() => moveTo('blue')}
        >
          Move to Blue
        </button>
        <button
          className={Styles.btn_pro}
          onClick={() => moveTo('yellow')}
        >
          Move to Yellow
        </button>
      </div>
    </div>
  );
}

export default App;