import { useLoaderData } from "react-router-dom";

const url = "https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}/?access_token={ACCESS_TOKEN}"

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
    const endpoint = url.replace("{SPACE}", import.meta.env.VITE_CONTENTFUL_SPACE)
                        .replace("{ENVIRONMENT}", import.meta.env.VITE_CONTENTFUL_ENVIRONMENT)
                        .replace("{ACCESS_TOKEN}", import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN)

    
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
    <div id="faq">
      <h1>{pageTitle}</h1>
      {accordions?.map(accordion => JSON.stringify(accordion))}
    </div>
  );
}
