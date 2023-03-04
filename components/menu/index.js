import { useState } from "react";
import styles from './Menu.module.css'
import Image from "next/image";
import Link from "next/link";

export default function Menu(){
    const [popup, setPopup] = useState(false);
    return(
        <>
        
            <Image
            
            src="/menu-icon.png"
            height={40} width={50}
            className={styles.menu}
            onClick={() => setPopup(true)}/>

            {
                popup ?
                    <div className={styles.container}>
                        <div className={styles.popup__area}> 
                            <div className={styles.letterX}
                            onClick={() => setPopup(false)}><h1>X</h1></div>

                            <div className={styles.menuText}>
                            <Link href="/."><span className={styles.text}>Home</span></Link>
                            <Link href="/about"><span className={styles.text}>About</span></Link>
                            <Link href="/contact"><span className={styles.text}>Contact</span></Link>
                            </div>
                        </div>
                    </div>
                    : <></>
            }
        </>
    )
}