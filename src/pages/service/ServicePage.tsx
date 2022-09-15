import React from 'react';
import  ServicesFaq  from "./components/services-faq/ServicesFaq";
import ServicesSlogan from './components/services-slogan/ServicesSlogan';
import { ButtonOnTop } from "../../components/show-button-on-top";

const ServicePage = () => {
  return (
    <>
   <ServicesSlogan/>
   <ServicesFaq/>
   <ButtonOnTop/>
   </>
  )
}
export default ServicePage
