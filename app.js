const serverless = require('serverless-http')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Cosmic = require('cosmicjs')
const api = Cosmic()
const COSMIC_BUCKET = process.env.COSMIC_BUCKET || 'node-starter'
const bucket = api.bucket({
	slug: COSMIC_BUCKET
})
app.set('view engine', 'ejs')
app.get('/:slug?', (req, res) => {
	let slug = req.params.slug
	const year = (new Date().getFullYear())
	if (!slug)
		slug = 'home'
	bucket.getObject({ slug }).then(data => {
		const page = data.object
		res.render('pages/default', { page, year })
	}).catch(err => {
		const page = { title: 'Page not found' }
		res.render('pages/404', { page, year })
	})
})

module.exports.handler = serverless(app);