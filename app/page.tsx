import { Navbar }       from '@/components/Navbar'
import { Hero }         from '@/components/Hero'
import { About }        from '@/components/About'
import { Skills }       from '@/components/Skills'
import { FeaturedWork } from '@/components/FeaturedWork'
import { Projects }     from '@/components/Projects'
import { Contact }      from '@/components/Contact'
import { Footer }       from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedWork />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
