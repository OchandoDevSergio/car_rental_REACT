# CAR RENTAL - Frontend App - Compañía alquiler de automóviles

### Datos generales :paperclip:
**El presente repositorio funciona en conjunto con el repositorio "Car_rental_SEQUELIZE_EXPRESS"

Acceso administrador: 
Correo: sergmar@mail.com  Contraseña: Bb1234

Acceso cliente:
Correo: alcast@mail.com  Contraseña: Aa1234

### Tecnologías y dependencias
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![NodeJS](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Web/API/Node) [![NPM](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=flat)](https://docs.npmjs.com/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff&style=flat)](https://getbootstrap.com/docs/4.1/getting-started/introduction/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff&style=flat)](https://axios-http.com/docs/intro) [![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=flat)](https://jwt.io/introduction) [![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)](https://react.dev/learn) [![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=fff&style=flat)](https://redux.js.org/introduction/getting-started) [![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat)](https://developer.mozilla.org/en-US/docs/Glossary/Git)


### Indice 

- [Descripción general del proyecto :speech_balloon:](#descripción-general-del-proyecto)

- [Vistas :computer:](#vistas) 

- [Funcionamiento :arrow_forward:](#funcionamiento) 


- [Recursos alternativos y fuentes :art:](#recursos-alternativos-y-fuentes)  

#

### Descripción general del proyecto

Propuesto el proyecto de desarrollar una aplicación web para la gestión de una compañía de alquiler de automóviles, el presente repositorio supone la sección frontend del mismo. Esta sección habría de constar de una SPA (single page application), en la que el usuario pueda tener acceso a la información de un catálogo de vehículos albergado en una base de datos a través de la interacción con la sección backend de la misma aplicación. 

Además la aplicación habría de distinguir, con el inicio de sesión, entre un rol de usuario cliente y un rol de administrador, permitiendo en función de esta distinción realizar diferentes cambios en la base de datos.

### Vistas

-Al entrar en la aplicación nos encontramos con la vista "Home", en la que se nos mostraría a priori un conjunto de tarjetas con datos e imágenes de los vehículos que nutren el catálogo de la base de datos de la aplicación. Sin embargo al realizar una búsqueda de una marca o modelo de automóvil a través del input que alberga el encabezado, esta vista se limitará a mostrar los vehículos que coincidan con los criterios de la búsqueda.

-La vista "Showcar" nos muestra en mayor detalle la imagen y los datos ampliados de un único vehículo seleccionado.

-La vista "Register" nos muestra una serie de inputs a trevés de los cuales podremos introducir nuestros datos y registrarnos como usuario en la base de datos de la aplicación.

-La vista "Login" nos solicita nuestras credenciales de usuarios para iniciar sesión.

-La vista "Admin" muestra a los administradores de la aplicación las opciones a las que tienen acceso privilegiado.

-La vista "Newcar" permite a los administradores de la aplicación introducir nuevos vehículos en la base de datos de la misma.

-La vista "Userslist" muestra tarjetas a los administradores con los datos de todos los usuarios registrados en la base de datos (obviando sus passwords).

-La vista "Profile" pemrite al usuario registrado, ya tenga el rol de cliente o el de administrador, cambiar los datos que le constan en la base de datos.

### Funcionamiento

Se accede a la aplicación a través de la vista "Home", que inicialmente realiza una petición a la base de datos de todos los automóviles que constan en ella y os presenta en tarjetas. En el encabezado encontramos un input que nos permite hacer búsquedas de conjuntos de automóviles en función de la coincidencia del script introducido con sus marcas y/o modelos. Además al hacer click sobre alguna tarjeta concreta, los datos del vehículo se inscriben en Redux, se ejecuta la función navigate para cargar la vista "Showcar" en el body y se imprimen los datos del automóvil cargado en Redux en esta nueva vista.

En el encabezado también encontramos enlaces que emplean la función navigate para dirigirnos a las vistas "Register" y "Login". 

En la vista "Register" encontramos una serie de inputs en los que introducir los datos de un nuevo usuario para posteriormente, a través de un botón, llevar a cabo una orden post que introduzca esa información en la base de datos, asignándole siempre un rol de cliente para generar un nuevo usuario. 

En la vista "Login" introducimos los credenciales de usuario para iniciar sesión, la aplicación cambia a partir de este punto el botón en el encabezado para registrarnos, sustituyéndolo por uno con nuestro nombre que nos conduciría a la vista "Profile" y también relaciona las credenciales introducidas con su rol asignado en la base de datos, cargando el token correpondiente en Redux.

En a vista "Profile" encontramos la posibilidad de cambiar nuestros datos de usuario en la base de datos a través de una orden put.

Si nos registramos con las credenciales de un administrador en el encabezado nos aparecerá un nuevo botón que rezará "Admin", al que podemos pinchar para que nos conduzca a una vista desde la que poder seleccionar entre dos opciones: "Add a new car" que cargaría la vista "Newcar" y "Users list" que cargaría la respectiva lista.

En la vista "Newcar" simplemente encontramos unos inputs en los que recoger los datos para enviar una orden post que añada un nuevo automóvil a la base de datos.

En la vista "Userslist" encontramos los datos del conjunto de los usuarios presentes en la base de datos aportados por una orden get y presentados en tarjetas.

### Recursos alternativos y fuentes

https://tutorialmarkdown.com/emojis

https://badges.pages.dev/

https://imgbb.com/
