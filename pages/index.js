import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{padding: "0 2rem"}}>
      <header>
        <h1>Nackademin Teknikfördjupning Projekt by Panagiotis Tsapanidis</h1>
        <h2>Next.js</h2>
      </header>      

      <main style={{width: "1600px", height: "1109px"}}>
        <img src='tiger-Siberian.jpg' alt="tiger" width="1600" height="1109"/>
      </main>
    </div>
  )
}
