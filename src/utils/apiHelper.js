export const getContentfulEndpoint = () => {
    const url = "https://graphql.contentful.com/content/v1/spaces/{SPACE}/environments/{ENVIRONMENT}/?access_token={ACCESS_TOKEN}"
    const endpoint = url.replace("{SPACE}", import.meta.env.VITE_CONTENTFUL_SPACE)
                        .replace("{ENVIRONMENT}", import.meta.env.VITE_CONTENTFUL_ENVIRONMENT)
                        .replace("{ACCESS_TOKEN}", import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN)
    return endpoint
}