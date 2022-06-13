# nest-backend
Backend prueba tecnica Pervolare

## Instalacion

**Pre-requisitos.**
1. Instalación de **MySQL** o algun paquete para la gestión  de base de datos como por ejemplo **XAMPP**
2. Instalación de **NodeJS** y sistema de gestion de paquetes **NPM**

**Instalacíon**

Una vez clonado el repositorio,

-ingrese al archivo ***app.module.ts*** el cual se encuentra en la carpeta ***/src*** e indique sus credenciales de MySQL, como el host, puerto, nombre de usuario, contraseña y nombre de su BD.

```
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db-pt',
```

- ejecute el comando `npm install` para instalar todos los modulos necesarios para el correcto funcionamiento de la aplicación

- ejecute el comando `npm run start` y automaticamente la aplicación estara funcionando. todo el proceso de migraciones se realizara automaticamente gracias a la implementación de TypeORM.

- finalmente puede ir al navegador a la direccion `http://localhost:3000/api/` donde encontrara la interfaz de usuario de Swagger disponible para probar cada una de las peticiones.
