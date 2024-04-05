import {Helmet} from "react-helmet";



import React from 'react'

function Meta({title}) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
    </div>
  )
}

export default Meta
