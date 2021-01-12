import Head from 'next/head'
import WorkCard from '../src/components/WorkCard/WorkCard'
import ResumeSection from '../src/sections/ResumeSection/ResumeSection'
import EducationSection from '../src/sections/EducationSection/EducationSection'
import LinkSection from '../src/sections/LinkSection/LinkSection'
import styles from '../styles/Home.module.css'
import {data} from '../public/Oisin_Coveney.resume'

export default function Home() {
  return <div className="mx-20 my-2">
    <header className="text-7xl mb-10">
      Oisin Coveney
    </header>
    <LinkSection></LinkSection>
    <ResumeSection data={data.work}></ResumeSection>
    <EducationSection data={data.education}></EducationSection>
  </div>
}
