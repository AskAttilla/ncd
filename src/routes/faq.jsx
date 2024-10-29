import React from 'react';
import { useLoaderData } from "react-router-dom";

import { getFaqData } from '../api/faq-service';

import ContentWrapper from "../components/content-wrapper/content-wrapper";
import Accordion from "../components/accordion/accordion";
import Header from "../components/header/header"


export async function loader() {
    const {pageTitle, accordions} = await getFaqData()
    return { pageTitle, accordions } 
}

export default function Faq() {
    const { pageTitle, accordions } = useLoaderData();

  return (
    <>
      <Header title={pageTitle}/>
      <ContentWrapper>
        {!!accordions.length 
        ? accordions?.map((accordion, index) => (
          <React.Fragment key={index}>
            <Accordion {...accordion}/>
          </React.Fragment>)) 
        : <p>Fant ingen spørsmål og svar</p>}
      </ContentWrapper>
    </>
  );
}
