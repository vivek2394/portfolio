import React from 'react'
import NavbarMain from './components/navbar/NavbarMain'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHeroMain from './components/subHeroSection/SubHeroMain'
import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import HelperSection from './components/HelperSection'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'
import CertificatesMain from './components/certificates/CertificatesMain'
import ProjectsMain from './components/projectsSection/ProjectsMain'
import ContactMeMain from './components/contactMeSection/ContactMeMain'
import FooterMain from './components/footer/FooterMain'




const App = () => {
  return (
  <main className="font-body text-white relative overflow-hidden">
     <NavbarMain/>
     <HeroMain/>
     <HeroGradient/>
     <SubHeroMain/>
     <AboutMeMain/>
     <SkillsMain/>
     <SubSkills/>
     <CertificatesMain/>
     <ProjectsMain/>
     <ContactMeMain/>
     <FooterMain/>
     
  </main>
  )
}

export default App
