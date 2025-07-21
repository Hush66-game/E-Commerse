import React from 'react'
import banner from "../assets/banner.jpg"
import {Box, Image} from "@chakra-ui/react"

const BannerSlider = () => {
  return (
    <Box my={4}>
        <Image
        src={banner}
        alt="banner"
        maxW={"600px"}
        />

    </Box>
  )
}

export default BannerSlider