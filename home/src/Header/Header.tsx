import React from 'react'
import styles from './Header.module.css';


const Header:React.FC = () => {
    return (
        <div className={styles.header_div}>
            <div>
                <p className={styles.header_title}>mahiro's blog</p>
            </div>
            
            <div>
                <p>
                    <a 
                      href="#"
                      className={styles.header_contact}
                    >
                        contact
                    </a>
                </p>
            </div>
        </div>
    )
}


export default Header