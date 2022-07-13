import React from 'react';
import styles from '../styles/Home.module.css'
import HeadInfo from './conponents/HeadInfo';

const photos = () => {
    return (
        <div>
            <HeadInfo title="My photo" />
            <h1 className={styles.title} >Photos</h1>
        </div>
    );
};

export default photos;