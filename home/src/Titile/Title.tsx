
import styles from './Title.module.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

const api_url = process.env.REACT_APP_DEV_JSON_URL;

const Title:React.FC = () => {
    const [visitor, setVisitor] = useState(0);

    useEffect(() => {
        axios.get(`${api_url}/homepage`)
        .then(res => {
            setVisitor(res.data.visitor)
            const json_data = {
                "visitor": res.data.visitor+1
             }
            axios.put(
                `${api_url}/homepage`,
                json_data,
                
                {
                    headers: {
                    "Content-Type": "application/json"
                }
                }
            )
        })

    }, [])
    

    


    return (
        <div className={styles.title_message}>
            <p className={styles.title_strong_message}>
                Welcome to Mypage
            </p>

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
