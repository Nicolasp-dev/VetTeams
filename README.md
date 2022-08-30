# Vet-teams 
_Software que ofrece servicios básicos para la gestión de una veterinaria_

Teams Veterinary Clinic es un software desarrollado como proyecto final para el bootcamp de JavaScript ofrecido por TEAM International Education.
Con este desarrollo se pretende aplicar la funcionalidad CRUD básica para la gestión y administración de datos necesarias para un página web veterinaria. 

Landing Page Página principal donde se puede encontrar información acerca de la empresa (About ), los servicios que se ofrecen a traves de un slider y finalmente un footer con información adicional.

Welcome: Se abre el acceso a una barra de navegación lateral la cual ofrece un enlace a las siguientes interfaces:
- Users: Interfaz donde se grafican los usuarios registrados en la base de datos. Esta a su vez posee una barra buscadora la cual filtra las busqueda entre usuarios según la entrada que se escriba. 

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


## Diseño realizado en Figma
Mockup del proyecto diseñado en Figma, contiene el flujo de interfaces según la interacción del usuario.
https://www.figma.com/file/AGuWBgF3gqqoaRskoB4lnu/Vet-Teams

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

_En desarollo_


## Construido con 🛠️

_Herramientas que utilizadas para crear tu proyecto_

* [NextJS](https://nextjs.org/)
* [Axios](https://axios-http.com/)
* [Mongoose](https://mongoosejs.com/)
* [MongoDB](https://www.mongodb.com/)
* [TailwindCSS](https://tailwindcss.com/)
* [Framer-Motion](https://www.framer.com/motion/)
* [React Hook Form](https://react-hook-form.com/)
* [Splide](https://splidejs.com/)


## Autores ✒️
* **Nicolas** - *Fullstack Developer* 
* **Gabriel** - *Backend Developer* 

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia gratuita para que sea mejorado o actualizado por otras personas.

## Gratitud 🎁

* Gracias a Top Gun de TEAM International y los docentes que compartieron su tiempo y conocimiento para el aprendizaje.

---

