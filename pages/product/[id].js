import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'
import axios from 'axios'

const Product = ( {pizza} ) => {
    const [size, setSize] = useState(0)
    // const pizza ={
    //     id:1,
    //     img:'/img/pizza.png',
    //     name:"CAMPNALA",
    //     price:[19.3, 34.5,45.60],
    //     desc: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit"
    // }
  return (
    <div className={styles.container}>
       <div className={styles.left}>
            <div className={styles.imgContainer}>
            <Image src={pizza.img} layout='fill' alt='' />
            </div>
       </div>
       <div className={styles.right}>
           <h1 className={styles.title}> {pizza.name} </h1>
           <span className={styles.price}>${pizza.price[size]}</span>
           <p className={styles.desc}> {pizza.desc}</p>
           <h3 className={styles.choose}>Choose the size</h3>

           <div className={styles.sizes}>
               <div className={styles.size} onClick={()=>setSize(0)}>
                   <Image src='/img/size.png' layout='fill' alt='' />
                   <span className={styles.number}>Small</span>
                </div>
               <div className={styles.size} onClick={()=>setSize(1)}>
                   <Image src='/img/size.png' layout='fill' alt='' />
                   <span className={styles.number}>Medium</span>
                </div>
               <div className={styles.size} onClick={()=>setSize(2)}>
                   <Image src='/img/size.png' layout='fill' alt='' />
                   <span className={styles.number}>Large</span>
                </div>
           </div>
           <h3 className={styles.choose}>Choose additional ingredients </h3>

           <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type='checkbox' id='double' name='double' className={styles.checkbox} />
                    <label htmlFor='double'>Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='cheese' name='cheese' className={styles.checkbox} />
                    <label htmlFor='cheese'>Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input type='checkbox' id='spicy' name='spicy' className={styles.checkbox} />
                    <label htmlFor='spicy'>Spicy Sauce</label>
                </div>
               
                <div className={styles.option}>
                    <input type='checkbox' id='garlic' name='garlic' className={styles.checkbox} />
                    <label htmlFor='garlic'>Garlic Sauce</label>
                </div>
           </div>
           <div className={styles.add}>
            <input type='number' defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to cart</button>

           </div>

       </div>
    </div>
  )
}

export const getServerSideProps = async ({params}) =>{
    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
      return {
        props: {
          pizza:res.data,
        }
      }
  
  }

export default Product