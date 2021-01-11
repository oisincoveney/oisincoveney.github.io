import Head from 'next/head'
import ResumeCard from '../src/components/ResumeCard/ResumeCard'
import styles from '../styles/Home.module.css'

export default function Home() {

  let d = {
    a: "hello"
  }

  return (
    <ResumeCard data={d}></ResumeCard>
  )
}
