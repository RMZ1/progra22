
const { Router } = require('express');

const { peliculasGet,
        peliculasPut,
        peliculasPost,
        peliculasDelete,
        peliculasPatch } = require('../controllers/peliculas');

const router = Router();


router.get('/', peliculasGet );

router.put('/:id', peliculasPut );

router.post('/', peliculasPost );

router.delete('/', peliculasDelete );

router.patch('/', peliculasPatch );





module.exports = router;