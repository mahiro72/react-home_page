import React from 'react'
import styles from './Products.module.css'

const Products:React.FC = () => {
    return (
        <div className={styles.product_contents}>

            <div className={styles.product_title}>
                <p>
                    My Products
                </p>
            </div>

        
            <div className={styles.product_contents_center}>

                <a href="https://react-et.vercel.app/"target='_blank'>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/engineertree_pr.png`} 
                        alt="engineertree" 
                    />
                </a>
                

                <div className={styles.product_contents_margin_center}>
            
                    <a 
                        href="https://react-et.vercel.app/"
                        target='_blank'
                        className={styles.product_link}
                    >
                        Engineer Tree
                    </a>      
                    

                    <div className={styles.product_contents_margin_center}>
                        
                        <p>このアプリを一言でいうと...</p>
                        <p 
                          className={styles.product_strong_message}
                        >
                            プログラミングの勉強時間と比例して木が成長するアプリ
                        </p>
                        
                        <p>最優秀賞受賞(サポーターズ主催のハッカソンで作成)</p>

                        <p>テストユーザー(mail:hoge@mail.com,password:hogehoge)</p>

                    </div>

                </div>
            </div>


            {/* <div className={styles.product_contents_center}>

                <a href="https://react-et.vercel.app/"target='_blank'>
                    <img 
                        src={`${process.env.PUBLIC_URL}/images/engineertree_pr.png`} 
                        alt="engineertree" 
                    />
                </a>
                

                <div className={styles.product_contents_margin_center}>
            
                    <a 
                        href="https://react-et.vercel.app/"
                        target='_blank'
                        className={styles.product_link}
                    >
                        Engineer Tree
                    </a>      
                    

                    <div className={styles.product_contents_margin_center}>
                        
                        <p>このアプリを一言でいうと...</p>
                        <p 
                          className={styles.product_strong_message}
                        >
                            プログラミングの勉強時間と比例して木が成長するアプリ
                        </p>
                        
                        <p>最優秀賞受賞(サポーターズ主催のハッカソンで作成)</p>

                        <p>テストユーザー(mail:hoge@mail.com,password:hogehoge)</p>

                    </div>

                </div>
            </div> */}



        </div>
    )
}

export default Products
