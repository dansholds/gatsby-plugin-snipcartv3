import React from 'react'

let warning = false

exports.onRenderBody = ({ setPostBodyComponents }, options = {}) => {
	options = Object.assign({
		apiKey: process.env.GATSBY_SNIPCART_API_KEY,
		autopop: false,
		js: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js',
		styles: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css',
	}, options)

	if(!options.apiKey){
		if (!warning) {
			warning = true
			console.log('No Snipcart API key found')
		}
		return
	}

	const components = [
		<script key='snipcartJs' src={options.js} id="snipcart" data-api-key={options.apiKey} data-autopop={options.autopop} data-currency={options.currency}></script>
	]
	}
	if (options.styles){
		components.push(<link key='snipcartStyle' href={options.styles} type="text/css" rel="stylesheet" />)
	}
	return setPostBodyComponents(components)
}
