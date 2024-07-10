import React,{useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import { Gents, Ladies } from '../data'
import WomenCollection from '../components/WomenCollcetion'

const MainPage = () => {

    const [GentsFanshion, setGentsFanshion] = useState(Gents)
    const [LadiesFashion, setLadiesFashion] = useState(Ladies)

  return (
    <div>
        <Header/>
        <Banner/>
        <Collections GentsFanshion={GentsFanshion}/>
        <WomenCollection LadiesFashion={LadiesFashion}/>
        <Footer />
    </div>
  )
}

export default MainPage