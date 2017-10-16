import React from "react"
import Link from "gatsby-link"
import Counter from './Counter'


export default () =>
 <div style={{ color: `tomato` }}>
   <h1>Hello Gatsby!</h1>
  	<p>What a world.</p>
   	<img src="http://www.fillmurray.com/600/450" alt="" />
   	<br />
   	<Counter title="Counter Page Index Yo" arse="A counter component"/>

  	<Counter title="Counter Page Second Instance" arse="Durt"/>
	<br />
   <Link to="/page-2">Go Here</Link>
 </div>


