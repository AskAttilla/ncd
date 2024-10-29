import React from 'react';
import { useLoaderData } from "react-router-dom";

import { getContentfulEndpoint } from "../utils/apiHelper";

import ContentWrapper from "../components/content-wrapper/content-wrapper";
import Accordion from "../components/accordion/accordion";
import Header from "../components/header/header"


const q =  `query {
	accordionCollection {
    items {
      title
      accordionItemsCollection {
      	items {
          name
          text
        }
    	}
    }
  }
}`

export async function loader() {
    const endpoint = getContentfulEndpoint()

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: q })
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      return response.json();
    })
    
    let pageTitle = "Default Title"
    let accordions = []
    
    const accordionCollectionItems = res?.data?.accordionCollection?.items
    
    if(accordionCollectionItems && accordionCollectionItems.length > 0) {
      const firstCollection = accordionCollectionItems[0];
      
      if (firstCollection.title) {
        pageTitle = firstCollection.title
      }
      
      const accordionItemsCollection = firstCollection?.accordionItemsCollection?.items
      
      if (accordionItemsCollection && accordionItemsCollection.length > 0) {
        accordions = accordionItemsCollection
      }
    }

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
