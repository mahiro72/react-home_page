
import styles from './Title.module.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
// import countapi from 'countapi-js';

const api_url = process.env.REACT_APP_DEV_JSON_URL;

const Title:React.FC = () => {
    const [visitor, setVisitor] = useState();

    useEffect(() => {
        axios.get(`${api_url}`)
        .then(res => {
            setVisitor(res.data.value)
        })

    }, [])
    
    return (
        <div className={styles.title_message}>
            <div>
                <p className={styles.title_strong_message}>
                    
                    Welcome to Mypage
                    
                </p>
                <hr className={styles.cp_hr06}/>
            </div>


            <p　className={styles.title_visit_message}>
                あなたは <span>{visitor}</span> 番目のお客様です
            </p>
        

            <div className={styles.title_sub_message}>
                <p>
                Thanks for coming!!!
                </p>
                <p>
                    お越しいただきありがとうございます!!
                </p>
            </div>
            

        </div>
    )
}

export default Title
