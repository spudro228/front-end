import React from 'react';
import styles from './style.scss';
import { Link  } from 'react-router-dom';

const Main = () => (
    <div className={styles.main}>
    {console.log(styles.main)}
     <h2>Main</h2>
     <Link to="/"> Go to main</Link>
    </div>
  );
  
export default Main;
