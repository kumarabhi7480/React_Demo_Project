import React from 'react';
import AboutSection from './component/AboutSection';
import BlogSection from './component/BlogSection';
import ClientLogo from './component/ClientLogo';
import ContactSection from './component/ContactSection';
import FooterSection from './component/FooterSection';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import PortfolioSection from './component/PortfolioSection';
import PricingSection from './component/PricingSection';
import ServiceSection from './component/ServiceSection';
import SubscriptionSection from './component/SubscrionSectin';
import TeamSection from './component/TeamSection';
import TestomonialSection from './component/TestomonialSection';
import VideoSection from './component/VideoSection';

function App(props) {
    return (
        <>
            <Header/>
            <HeroSection/>
          <AboutSection/>
        <ServiceSection/>
        <VideoSection/>
        <PortfolioSection/>
        <PricingSection/>
        <TeamSection/>
        <SubscriptionSection/>
        <TestomonialSection/>
        <BlogSection/>
        <ClientLogo/>
        <ContactSection/>
        <FooterSection/>
        


        

        </>
    );
}

export default App;