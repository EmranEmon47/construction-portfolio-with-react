import React from 'react'
import { Hero } from '../../Components/Hero'
import { Ads } from '../../Shared/Ads'
import { Nav } from '../../Shared/Nav'

export const Home = () => {
  return (
    <div>
        <Ads/>
        <Nav/>
        <Hero/>
    </div>
  )
}
