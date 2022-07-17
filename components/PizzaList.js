import styles from '../styles/PizzaList.module.css'
import { PizzaCard } from './PizzaCard'

export const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
         Dolore invidunt sanctus diam sit amet invidunt no est. Sit no dolor consetetur
          ipsum amet consetetur amet. Duo voluptua et.
         Dolore invidunt sanctus diam sit amet invidunt no est. Sit no dolor consetetur
          ipsum amet consetetur amet. Duo voluptua et.
        </p>

     <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
     </div>
    </div>
  )
}
