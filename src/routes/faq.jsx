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
    .catch(e => {
      console.error('Fetch error:', e);
    });
       

    return { test: res.data } 
}

export default function Faq() {
    const { test } = useLoaderData();

  return (
    <div id="faq">
      {JSON.stringify(test)}
      {/* {accordions?.map((question)=><p>{question}</p>)} */}
    </div>
  );
}
