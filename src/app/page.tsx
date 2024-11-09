import Image from 'next/image'
import Link from 'next/link'
import About from './About/page'
import Services from './Services/page';
import Contact from './Contact/page';
import Footer from '@/components/footer';
export default function Home() {
  return ( 
      <><section className="flex flex-col-reverse md:flex-row items-center justify-center p-5 min-h-[80vh] bg-[url('https://static.vecteezy.com/system/resources/previews/020/297/746/non_2x/abstract-low-poly-dark-background-with-triangle-shapes-free-vector.jpg')] bg-cover bg-center h-70 w-full">
      <div className="text-center md:text-left md:w-1/2 p-10 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 ">Hi! I am</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-red-400">Nida Muhammad Nasar</h1>
        <p className="text-lg md:text-xl mt-2">A Creative Front-end Developer</p>
        <div className="mt-8">
          <Link href="know more" className="px-6 py-2 bg-red-200 rounded-full text-black hover:bg-yellow-600 text-lg ">Know More</Link>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <Image
          src="/images/hero-pic.png"
          alt="Profile Picture"
          width={400}
          height={300}
          className="rounded-full
          m-40"
          />
        </div>

    </section>
    <div>
      <About />
      <Services/>
      <Contact/>
      <Footer/>
      </div>
      </>
    
    
  );}
