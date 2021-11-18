import React from 'react'
import styles from './Main.module.css'

const Main:React.FC = () => {
    return (
        <div className={styles.main_content}>
            <div>
                <img 
                src={`${process.env.PUBLIC_URL}/images/my_profile.png`} 
                alt="my_profile" 
                style={{height:350,width:350}}
                />
            </div>

            <div className={styles.main_message}>
                <p>はじめまして,mahiroです.</p>
                <p>現在就職活動中の学部３年生です.</p>
                <p>このサイトは私の制作物をまとめてあります.</p>
                <p>良かったらご覧ください!!</p>
            </div>
            
            
        </div>
    )
}

export default Main
