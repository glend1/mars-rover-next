import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { marsRover } from '../src/rover'

export default function Home() {
  console.log(marsRover({x: 3, y:3, direction: "N"}, "M"))
  return (
    <>
      <Head>
        <title>Mars Rover</title>
        <meta name="description" content="A simple 'Mars Rover' exersize" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    </>
  )
}
