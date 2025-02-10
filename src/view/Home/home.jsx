import React from 'react'
import ImageSlider from '../../components/Hero/ImageSlider'
import NoticeSection from '../../components/Hero/NoticeSection'
import Services from '../../components/Hero/ServicesSection'
import InterestRates from '../../components/Hero/InterestRates'


export const HomeView = () => {
  return (
    <>
    <ImageSlider/>
    <NoticeSection/>
    <InterestRates/>
    <Services/>
    </>
  )
}
