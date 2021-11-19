import React from 'react'
import styles from './SNS.module.css'

const SNS:React.FC = () => {
    return (
        <>
            <div className={styles.sns_box}>
                <div className={styles.sns_title}>
                    <p className={styles.sns_title_main}>
                        Information/SNS
                    </p>
                    <p className={styles.sns_title_sub}>
                        ご連絡お待ちしております!!
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
                
                <div className={styles.sns_div}>

                    <div className={styles.sns_content}>  
                        <a href="https://atcoder.jp/users/sino0429" target='_blank'>
                            <img 
                            src={`${process.env.PUBLIC_URL}/images/atcoder_logo.png`} 
                            alt="atcoder" 
                            style={{height:150,width:150}}
                            />
                        </a>     
                        <div className={styles.sns_sub}>
                            <p>atcoder</p>
                        </div>
                    </div>

                    <div className={styles.sns_content}>
                        <a href="https://www.kaggle.com/mahiro72" target='_blank'>
                            <img 
                            src={`${process.env.PUBLIC_URL}/images/kaggle_logo.png`} 
                            alt="kaggle" 
                            style={{height:150,width:150}}
                            />
                        </a>   
                        
                        <div className={styles.sns_sub}>
                            <p>kaggle</p>
                        </div>
                        
                    </div>

                    <div className={styles.sns_content}>
                        <a href="" target='_blank'>
                            <img 
                            src={`${process.env.PUBLIC_URL}/images/gmail_logo.png`} 
                            alt="mail"
                            style={{height:150,width:150}}
                            />
                        </a>   

                        <div className={styles.sns_sub_sm}>
                            <p>mahiro.yoshie@gmail.com</p> 
                        </div>
                        
                    </div>

                </div>
            
            </div>
        </>


    )
}

export default SNS
