import type { NextPage } from 'next'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { env } from 'src/libs/env'
import styles from '../styles/Home.module.scss'

const P = styled.p`
  color: red;
  font-size: 30px;
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>hello world next.js</h1>
      <P>环境: {env}</P>
      <Button variant="contained" color="secondary">
        打开世界
      </Button>
    </div>
  )
}

export default Home
