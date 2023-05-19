import React from 'react';
import styles from './styles.module.css';
import BoxForm  from './components/BoxForm';

function App() {
  return (
    <div className="App">
      <h1 className={styles.boxBody}>Make some boxes!</h1>
      <BoxForm/>
    </div>
  );
}

export default App;
