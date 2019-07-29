# Youtubeapp

Ejemplo del uso del API de youtube usando Angular.
Proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.


## Generar apiKey

- Crear un proyecto en [Console Developers Google](https://console.developers.google.com/apis)
- Habilitar Youtube Data API (V3)

Para mas informacion visitar el siguiente [Link](https://developers.google.com/youtube/v3/getting-started)

## Obtener PlaylistId

- Ingresar a [Youtube](https://www.youtube.com) buscar un playist de preferencia, copiar de la url el codigo que parece marcado https://www.youtube.com/watch?v=rVmmToPNQXE&list= `UUuaPTYj15JSkETGnEseaFFg`

## Agragar el apiKey y playlistId al proyecto

- Una vez descargado el proyecto, ubicar el archivo youtube.service.ts y agregar el apiKey y el playlist a las variables correspondientes.

## Descargar dependencias

- Abrir una terminal y ejecutar `npm install` para empezar la descarga.

## Development server

Ejecutar `ng serve` para iniciar el servidor. Navegar a `http://localhost:4200/`.

