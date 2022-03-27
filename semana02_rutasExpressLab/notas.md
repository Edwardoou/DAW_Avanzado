# package-json
npm run dev -> es recomendado para el modo desarrollo
npm start -> guardar este script para produccion

# network.js
Network.js reemplaza a routes.js que segun el profe esta deprecated.
De igual manera en las rutas, se usa la funcion **route()** para colocar la url y luego el tipo de peticion que contendra las funciones del controlador

# app.js
En el `app.use("/",controller)` se coloca como primer parametro la ruta anterior a las rutas del controlador.Ejm: si fuera `app.use("/login",controller)`la url de todas las rutas del controlador serian **https://login/...**
En app.js se usa el middlware para enteder data en JSON del req.body, y para entender URL-encoded data de **form-data**

## extended:
Si el extended property es true, se puede enviar lo que se quiera.
Si el extended property es false, no se puede enviar "nested-objects". Ejm:
```
{
    person[name] = 'cw'
    // Nested Object = { person: { name: cw } }
}
```
