import Image from "next/image"
import { useEffect, useState } from "react"
import styles from './Carousel.module.css'
import { info } from '../../data/info.js'

export default function Carousel() {
    const [position, setPosition] = useState(0);
    const [wordImage, setWordImage] = useState(info[position]?.value)

    useEffect(() => {
        if (position < 5 && position >= 0) {
            setWordImage(info[position].value)
        } else if (position == -1) {
            setPosition(4);
            setWordImage(info[4].value)
        } else {
            setPosition(0);
            setWordImage(info[0].value)
        }

    }, [position])

    return (
        <>
            <div className={styles.outerCarousel}>
                <div className={styles.carouselImg}
                    style={{
                        backgroundImage: "url(/carousel-images/" + position + ".jpg)",
                    }}>

                    <div className={styles.middleImage}>
                        <div className={styles.leftcenter}>
                            <Image
                                src={"/icons/leftArrow.png"}
                                alt={"leftArrow.png"}
                                width={30}
                                height={25}
                                onClick={() => setPosition(position - 1)}
                            />
                        </div>

                        <div className={styles.textOnImage}>
                            {wordImage}
                        </div>

                        <div className={styles.rightcenter}>
                            <Image
                                src={"/icons/rightArrow.png"}
                                alt={"rightArrow.png"}
                                width={30}
                                height={25}
                                onClick={() => setPosition(position + 1)}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
