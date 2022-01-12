import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='h-screen flex font-bold items-center justify-center text-9xl'>
        content
      </div>
      <Footer />
    </>
  )
}
