import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

export const PizzaCard = () => {
  return (
    <div className={styles.container}>
       <Image src='/img/pizza.png' alt='' width='500' height='500' />
       <h1 className={styles.title}>Firoi DUI Juzza</h1>
       <span className={styles.price}>$50.80</span>
       <p className={styles.desc}>
        Best pizza in this town, we deliver home and you will get our branches.
       </p>
    </div>
  )
}
