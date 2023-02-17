import React from 'react'
import { GetToKnow } from '../../Components/GetToKnow'
import { Hero } from '../../Components/Hero'
import { WorkList } from '../../Components/WorkList'
import { Ads } from '../../Shared/Ads'
import { Nav } from '../../Shared/Nav'

export const Home = () => {
  return (
    <div>
        <Ads/>
        <Nav/>
        <Hero/>
        <GetToKnow/>
        <WorkList/>
    </div>
  )
}
