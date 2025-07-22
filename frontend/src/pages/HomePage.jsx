import React from 'react'
import Navbar from '../components/ui/navbar'
import { Box } from '@chakra-ui/react'
import BannerSlider from '../components/BannerSlider'
const HomePage = () => {
  return (
        <Box>
          <BannerSlider/>
          <h2>welcomeee (Protected)</h2>
        </Box>
  )
}

export default HomePage