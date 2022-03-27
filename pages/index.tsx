import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>hello world next.js {process.env.NEXT_PUBLIC_CUSTOM_ENV}</h1>
    </div>
  )
}

export default Home
