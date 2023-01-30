import type { NextPage } from 'next'
import tw from 'twin.macro';

import { TopSection } from '../containers/TopSection';
import { AboutSection } from '../containers/AboutSection';
import { ProjectsSection } from '../containers/ProjectsSection';
import { Footer } from '../components/Footer';

const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`

const Home = () => {
  return (
    <>
      <AppContainer>
        <TopSection />
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </AppContainer>
    </>
  )
}

export default Home
