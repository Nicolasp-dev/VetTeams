<<<<<<< HEAD
# Software que ofrece servicios de administracion y gestion de una veterinario

_Teams Veterinary Clinic es un software de gestión para centros veterinarios, muy completo, robusto y también muy fácil de usar, que permite gestionar las tareas y recursos de manera rápida y eficiente, facilitando la coordinación del equipo de trabajo, logrando un servicio de alta calidad._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


## Diseño realizado en Figma

https://www.figma.com/file/AGuWBgF3gqqoaRskoB4lnu/Vet-Teams


### Pre-requisitos 📋

_Para desplegar a producion es necesario que poseas un equipo de computo con bases de datos en Postgres sql, si quieres usar el modo developer debes usar como base de datos MySQL, teniendo eso debes intalar nodejs ultima version en tu sistema operativo ya sea linux, macOS o Windows, teneindo el entorno del servidor listo y con el proyecto ya descargado debes realizar lo siguiente_


### Instalación 🔧

_Debes Crear una base de datos llamada_
```
pet_house
```
_En la carpeta principal del proyecto debes abrir una terminal y ejecutar el comando a continuacion.
```
npm install --save
```

_Para ejecutar el proyecto debes realizar los siguientes codigos en la terminal_

_Este comando ejecuta el proyecto y crea las tabals en la base de datos_
-Comando para ejecutar en el ambiente de Test_
```
export NODE_ENV=test && nodemon app.js
```
-Comando para ejecutar en el ambiente de Developer_
```
export NODE_ENV=development && nodemon app.js
```
-Comando para ejecutar en el ambiente en produccion_
```
export NODE_ENV=production && nodemon app.js
```
_ este comando migra toda la informacion de base en las base de datos_
```
export NODE_ENV=test && npx sequelize-cli db:seed:all
```

_Rutas para consumir la aplicacion_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_


## Construido con 🛠️

_Herramientas que utilizadas para crear tu proyecto_

* [Sequelizer ORM](https://sequelize.org/)
* [Node JS](https://nodejs.org/es/)
* [MySQL](https://dev.mysql.com/doc/)
* [PostgreSQL](https://dev.postgresql.com/en/book/)


## Versionado 📌

## Autores ✒️

_Personas que ayudaron a levantar el proyecto desde sus inicios_

* **Gabriel** - *Backend Developer* 
* **Nicolas** - *Frontend Developer* 
* **Luis** - *Testing* 

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia gratuita para que sea mejorado o actualizado por otras personas.

## Gratitud 🎁

* Gracias a los compañero y profesores los cuales nos brindaron orientacion para culminar este proyecto 📢
* A los compañeros que cada clase aportaron de sus conocimientos.

---
Gracias a Top Gun de team international por la oportunidad 😊


=======
Tienda y Servicios para Mascotas

Test
npm test -- --coverage --watchAll

test report
open coverage/lcov-report/index.html
>>>>>>> develop
