import React from 'react'
import styles from './SNS.module.css'

const SNS:React.FC = () => {
    return (
        <div className={styles.sns_box}>
            <div className={styles.sns_title}>
                <p>
                    Information
                </p>
            </div>


            <div className={styles.sns_div}>

                <div className={styles.sns_content}>  
                    <a href="https://twitter.com/sino0042900" target='_blank'>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/twitter.png`} 
                        alt="twitter" 
                        style={{height:150,width:150}}
                        />
                    </a>     
                    <div className={styles.sns_sub}>
                        <p>twitter</p>
                    </div>
                </div>

                <div className={styles.sns_content}>
                    <a href="https://github.com/mahiro72" target='_blank'>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/github.png`} 
                        alt="github" 
                        style={{height:150,width:150}}
                        />
                    </a>   
                    
                    <div className={styles.sns_sub}>
                        <p>github</p>
                    </div>
                    
                </div>

                <div className={styles.sns_content}>
                    <a href="https://qiita.com/mahiro72" target='_blank'>
                        <img 
                        src={`${process.env.PUBLIC_URL}/images/qiita.jpg`} 
                        alt="qiita"
                        style={{height:150,width:150}}
                        />
                    </a>   

                    <div className={styles.sns_sub}>
                        <p>qiita</p> 
                    </div>
                    
                </div>

            </div>
        </div>

    )
}

export default SNS
