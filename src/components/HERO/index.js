import React,{useState} from 'react'
import Navbar from '../Navbar'
import {HeroContainer,HeroContent,HeroItem,HeroH1,HeroBtn,HeroP} from './HeroElements';
import Sidebar from '../Sidebar';


const Hero = () => {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <HeroContainer>
    <Navbar toggle={toggle}/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <HeroContent>
        <HeroItem>
            <HeroH1>Pizza World Greatest Pizza Ever</HeroH1>
            <HeroP>Ready in 60 seconds</HeroP>
            <HeroBtn>Place order</HeroBtn>
        </HeroItem>
    </HeroContent>
    </HeroContainer>
  )
}

export default Hero
