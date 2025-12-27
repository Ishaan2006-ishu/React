import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const anotherElement=(<a href="https://google.com" target='_blank'>visit google</a>)

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'

)



createRoot(document.getElementById('root')).render(
  reactElement
)

