import React from 'react';
import  ServicesFaq  from "./components/services-faq/ServicesFaq";
import ServicesSlogan from './components/services-slogan/ServicesSlogan';
import { ButtonOnTop } from "../../components/show-button-on-top";
import ServicesOurVisions from './components/section-visions/ServicesOurVisions';

const ServicePage = () => {
  return (
    <>   
    <ServicesOurVisions/>
   <ServicesSlogan/>
   <ServicesFaq/>
   <ButtonOnTop/>

   </>
  )
}
export default ServicePage
