
import styles from './Title.module.css'
import axios from 'axios'
import React, {useState, useEffect} from 'react'

const Title:React.FC = () => {
    const [visitor, setVisitor] = useState(0)
    

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/mahiro72/MyJSONServer/homepage')
        .then(res => {
            setVisitor(res.data.visitor)
            axios.put('https://my-json-server.typicode.com/mahiro72/MyJSONServer/homepage',visitor+1)
            console.log(visitor+1,'##')
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
