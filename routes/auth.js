const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
	const { name } = req.body;
	if (name) {
		return res.status(200).send('Works');
	} else {
		return res.status(401).send('fail');
	}
});

module.exports = router;
