//create function component
import React from 'react';

//styles
import styles from './NotFound.module.scss';


const Notfound = () => {
    return <div className={styles.notFound}>
        <div className={styles.inside}>
            <h1>404</h1>
            <p>Page not found.</p>
        </div>
    </div>;
}

export default Notfound;