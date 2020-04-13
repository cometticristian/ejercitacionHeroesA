// Require de Express
const express = __¿?__;

// Require de FS
const fs = __¿?__;

// Ejecución de Express
const app = __¿?__;

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

// Ruta Raíz / ➝ Home
app.get('/', __¿?__);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (¿?) => {
	res.send(ACÁ_DEBERÍAMOS_ENVIAR_A_TODOS_LOS_HÉROES);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('¿?', (¿?) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = __¿?__;
	
	// Si se encuentra al héroe se envía el nombre y su profesión
	// Si NO se encuentra se envía el mensaje de no encontrado
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('¿?', (¿?) => {
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = __¿?__;

	// Si NO se encuentra al héroe se envía un mensaje
	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	}
});

// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});