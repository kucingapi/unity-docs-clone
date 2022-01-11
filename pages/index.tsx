import Head from 'next/head'
import { Navbar } from '../components/Navbar'

export default function Test() {
  return (
    <div className="flex justify-between min-w-full py-2 bg-black text-white">
      <Navbar />
    </div>
  )
}
