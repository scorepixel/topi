//create function component
import React from 'react';

//styles
import styles from './Loading.module.scss';
import LoadingSVG from "assets/media/loading.svg";


const Loading = () => {
    return <div className={styles.loading}>
        <img src={LoadingSVG} />
        Loading
    </div>;
}

export default Loading;