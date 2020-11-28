const contentful = require('contentful')

const client = contentful.createClient({
  space: (process.env.REACT_APP_SPACE_ID),
  envId: (process.env.REACT_APP_ENV_ID),
  accessToken: (process.env.REACT_APP_API_KEY)
})

client.getContentType('header')
.then((contentType) => console.log(contentType))
.catch(console.error)
