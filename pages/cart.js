import styles from '../styles/Cart.module.css'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className={styles.container}>
         <div className={styles.left}>
            <table className={styles.table}>
               <tbody>
               <tr className={styles.trTitle}>
                   <th>Product</th>
                   <th>Name</th>
                   <th>Extra</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Total</th>
                </tr>

                <tr className={styles.tr}> 
                    <td>
                        <div className={styles.imgContainer}>
                            <Image  src='/img/pizza.png' layout='fill' objectFit='cover' alt=''  />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>ROKALRO</span>
                    </td>
                    <td >
                        <span className={styles.extras}>Double Ingredient, spicy sauce</span>
                    </td>

                    <td>
                        <span className={styles.price}>$19.30</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.30</span>
                    </td>
                </tr>
                <tr className={styles.tr}>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt=''  />
                        </div>
                    </td>
                    <td>
                        <span className={styles.name}>ROKALRO</span>
                    </td>
                    <td>
                        <span className={styles.extras}>Double Ingredient, spicy sauce</span>
                    </td>

                    <td>
                        <span className={styles.price}>$19.30</span>
                    </td>
                    <td>
                        <span className={styles.quantity}>2</span>
                    </td>
                    <td>
                        <span className={styles.total}>$39.30</span>
                    </td>
                </tr>

               </tbody>
            </table>
         </div>
         <div className={styles.right}>
             <div className={styles.wrapper}>
                 <h2 className={styles.title}> CART TOTAL</h2>

                 <div className={styles.totalText}>
                    <b className={styles.totalTextTile}>Subtotal:</b>$78.90
                 </div>
                 <div className={styles.totalText}>
                    <b className={styles.totalTextTile}>Discount:</b>$0.00
                 </div>
                 <div className={styles.totalText}>
                    <b className={styles.totalTextTile}>Total:</b>$78.90
                 </div>
                 <button className={styles.button}>CHECKOUT NOW!</button>
             </div>
         </div>
    </div>
  )
}

export default Cart;