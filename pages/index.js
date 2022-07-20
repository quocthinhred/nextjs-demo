import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getProduct = async limit => {
  try {
      const response = await axios.get(`https://fakestoreapi.com/products/1`)
      return response.data
  } catch (error) {
      console.log(error)
  }
}

export default function Home() {
  const myLoader = ({ src, width, quality }) => {
    //const product = await getProduct();
    return src;
  }
  return (
    <div>
      Edit Test
      <div style={{height: "200vh", backgroundColor: "#ccc"}}></div>
      <Image lazyBoundary="1px" loading='lazy' loader={myLoader} src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width="200px" height="200px" layout="fixed" alt="This is Image" placeholder='blur' blurDataURL="skeleton.jpg"/>
    </div>
  )
}
