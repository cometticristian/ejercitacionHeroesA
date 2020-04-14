const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

app.get('/', (req, res) => {
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
});

app.get('/heroes', (req, res) => {
	res.send(heroes);
});

app.get('/heroes/detalle/:id', (req, res) => {
	let heroe = req.params.id;
	let encontrado = false;
	heroes.forEach(function (cadaHeroe) {
		if(cadaHeroe.id == heroe) {
			res.send('Hola, mi nombre es ' + cadaHeroe.nombre + ' y soy ' + cadaHeroe.profesion);
			encontrado = true;
		}
	})
	if (encontrado == false) {
		res.send('No se puede encontrar el heroe requerido');
	}
});

app.get('/heroes/bio/:id/:ok?', (req, res) => {
	let encontrado = false;
	let heroe = req.params.id;
	let parametroResenia = req.params.ok;
	heroes.forEach(function (cadaHeroe) {
		if(cadaHeroe.id == heroe && parametroResenia != 'ok') {
			res.send(cadaHeroe.nombre + ' ' + 'Lamento que no desees saber mas de mi :(');
			encontrado = true;
		}else if (cadaHeroe.id == heroe && parametroResenia == 'ok') {
			res.send(cadaHeroe.nombre + ' ' + cadaHeroe.resenia);
			encontrado = true;
		}
	})
	if (encontrado ==  false) {
		res.send('No encontramos un heroe para mostrarte su biografia');
	}
});

app.get('/creditos', function () {
	res.send('Hecho por Cristian Cometti');
})

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});
