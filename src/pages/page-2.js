import React from "react"
import Link from "gatsby-link"
import Counter from './Counter'

export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Page 2</h1>
   <p>What a world.</p>
 	  <img src="http://www.fillmurray.com/600/450" alt="" />
	 	<br />
	 	<Counter title="A title for Page 2" arse="Hairy"/>
	 	<br />
	 	<Link to="/">Go Home</Link>
 </div>