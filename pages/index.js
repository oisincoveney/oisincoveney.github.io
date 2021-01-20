import Head from 'next/head'
import WorkCard from '../src/components/WorkCard/WorkCard'
import ResumeSection from '../src/sections/ResumeSection/ResumeSection'
import EducationSection from '../src/sections/EducationSection/EducationSection'
import LinkSection from '../src/sections/LinkSection/LinkSection'
import styles from '../styles/Home.module.css'
import { data } from '../public/Oisin_Coveney.resume'
import IdentitySection from '../src/sections/IdentitySection/IdentitySection'

export default function Home() {
  return <div className="my-2 mx-80 mt-12">
    <header className="mb-10 flex flex-row items-center justify-center">
      <img className="rounded-full h-64 w-64 mr-5" src="img/oisin-sm.jpg" />
      <div className="text-6xl font-bold ml-5">
        Oisin Coveney
      </div>
    </header>
    <IdentitySection></IdentitySection>
    <LinkSection></LinkSection>
    <ResumeSection data={data.work}></ResumeSection>
    <EducationSection data={data.education}></EducationSection>
  </div>

} 
