import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container} >
        <div className={styles.item}>
          <Image src='/img/bg.png' objectFit='cover' alt='' layout='fill' />
        </div>
         <div className={styles.item}>
             <div className={styles.card}>
              <h2 className={styles.motto}>
                OH, YES WE DIT THE BEST PIZZA WE BAKED SLICE OF PIZZA.
              </h2>
               </div>

             <div className={styles.card}> 
             <h1 className={styles.title}> FIND OUR RESTAURANT</h1>
             <p className={styles.text}>
              2345 Kanikaloy Road #743.
              <br /> Dhaka,1214
              <br />(345) 456-034

             </p>
             <p className={styles.text}>
              2345 Kanikaloy Road #743.
              <br /> Dhaka,1214
              <br />(345) 456-034

             </p>
             <p className={styles.text}>
              2345 Kanikaloy Road #743.
              <br /> Dhaka,1214
              <br />(345) 456-034

             </p>
             <p className={styles.text}>
              2345 Kanikaloy Road #743.
              <br /> Dhaka,1214
              <br />(345) 456-034

             </p>
             </div>

             <div className={styles.card}> 
             <h1 className={styles.title}>WORKING HOURS</h1>
             <p className={styles.text}>
             MONDAY UNTIL FRIDAY
              <br /> 9:00 -16:00
             </p>
             <p className={styles.text}>
              SATURDAY - SUNDAY
              <br /> 11:00 -18:00
             </p>
             </div>
         </div>
    </div>
  )
}

export default Footer