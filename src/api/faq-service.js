import { getContentfulEndpoint } from "./apiHelper";

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

export const getFaqData = async () => {
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

    return {pageTitle, accordions}
}