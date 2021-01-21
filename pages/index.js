import Head from 'next/head'
import WorkCard from '../src/components/WorkCard/WorkCard'
import ResumeSection from '../src/sections/ResumeSection/ResumeSection'
import EducationSection from '../src/sections/EducationSection/EducationSection'
import LinkSection from '../src/sections/LinkSection/LinkSection'
import styles from '../styles/Home.module.css'
import { data } from '../public/Oisin_Coveney.resume'
import IdentitySection from '../src/sections/IdentitySection/IdentitySection'

export default function Home() {
  return <div className="lg:w-3/5 md:w-4/5 w-11/12 max-w-8xl mt-36 mx-auto">
    <header className="mb-10 flex flex-col text-center md:text-left md:flex-row items-center justify-center">
      <img className="rounded-full h-64 w-64 mr-5" src="img/oisin-sm.jpg" />
      <div className="text-6xl font-bold ml-5">
        Oisin Coveney
      </div>
    </header>
    {/* <IdentitySection></IdentitySection> */}
    <LinkSection></LinkSection>
    <ResumeSection data={data.work}></ResumeSection>
    {/* <EducationSection data={data.education}></EducationSection> */}
  </div>

} 
