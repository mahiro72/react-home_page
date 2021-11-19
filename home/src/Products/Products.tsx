import React from 'react'
import styles from './Products.module.css'

const Products:React.FC = () => {
    return (
        <div className={styles.product}>

            <div className={styles.product_title}>
                <div>
                    <p className={styles.product_title_p}>
                        My Products
                    </p>
                </div>

                <div className={styles.product_title_p_sub}>
                    <p>
                        ここには、私の制作物があります
                    </p>
                    <p>
                        気になったアプリがあれば
                    </p>
                    <p>
                        遊びに行ってみてください!
                    </p>

                </div>

            </div>

        
            <div className={styles.product_contents}>
                <div  className={styles.product_contents_mar}>
                    <a href="https://react-et.vercel.app/"target='_blank'>
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/engineertree_pr.png`} 
                            alt="engineertree" 

                        />
                    </a>
                          
                </div>

                <div>
                    <div className={styles.product_title_message}>
                        <p>このアプリを一言でいうと...</p>
                        <p className={styles.product_strong_message}>プログラミングの勉強時間と比例して</p>
                        <p className={styles.product_strong_message}>木が成長するアプリ </p>
                    </div>


                    <div className={styles.product_subtitle_message}>
                        <p>2021/11/8にサポーターズ主催のハッカソンで作成しました</p>
                        <p>
                            <span className={styles.product_strong_message}>
                                最優秀賞受賞
                            </span>
                            (賞金10万円!!)
                        </p>

                        <p>使用した技術はDjangoREST,React,Redux,Typescriptなど</p>

                        {/* <p>工夫した点 (twitter,github連携 , 木の成長過程)</p> */}
                        <p>テストユーザーは以下の通りです。loginしてみてください!</p>
                        <p>email : hoge@mail.com</p>
                        <p>password : hogehoge</p>
                        
                    </div>
                    

                    <p>
                        こちらから
                        <a 
                            href="https://react-et.vercel.app/"
                            target='_blank'
                            className={styles.product_link}
                        >
                            Engineer Tree
                        </a>
                        へ
                    </p>
                    

                </div>

            </div>





        
            <div className={styles.product_contents}>
                <div className={styles.product_contents_mar}>
                    <a href="https://agent.hosl.dev/"target='_blank'>
                        <img 
                            src={`${process.env.PUBLIC_URL}/images/sou_pr.png`} 
                            alt="転職支援サービス" 
                            
                        />
                    </a>
                          
                </div>

                <div>
                    <div className={styles.product_title_message}>
                        <p>このアプリを一言でいうと...</p>
                        <p 
                            className={styles.product_strong_message}
                        >
                            転職を支援するアプリ
                        </p>
                    </div>


                    <div className={styles.product_subtitle_message}>
                        <p>2021/7に業務委託で作成しました</p>
                        <p>使用した技術はPython,Django,HTML/SCC,Bootstrapなど</p>
                        <p>転職を考えている方は是非利用してみてください!!!</p>
                        
                    </div>
                    

                    <p>
                        こちらから
                        <a 
                            href="https://agent.hosl.dev/"
                            target='_blank'
                            className={styles.product_link}
                        >
                            転職支援サービス
                        </a>
                        へ
                    </p>
                    

                </div>

            </div>





        </div>
    )
}

export default Products
