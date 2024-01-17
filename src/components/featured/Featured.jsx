import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image';

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>Hey, Lorem</b> ipsum dolor sit amet consectetur adipisicing elit. Provident, animi?
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            sint dicta commodi modi obcaecati, sed illo,
            facere autem temporibus necessitatibus assumenda laudantium voluptates sapiente doloremque.
            Modi nesciunt odit facilis, optio incidunt numquam, magni deleniti dolorem eveniet minus corporis nihil cum?
            Pariatur error deleniti aspernatur. Assumenda velit earum molestias debitis voluptatibus!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
