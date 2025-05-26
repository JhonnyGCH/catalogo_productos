
# CatalogoProductos

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 19.2.13 y desarrollado aplicando **Clean Architecture** exclusivamente en el frontend.

## Descripción general

**CatalogoProductos** es una aplicación de catálogo interactiva construida con Angular, que permite visualizar y filtrar productos categorizados. El sistema implementa una arquitectura modular y limpia, con separación clara entre infraestructura, dominio y presentación.

### Tecnologías utilizadas

- **Angular 19.2.13**
- **Angular Material** para la interfaz de usuario
- **Angular Cookies** para persistencia de datos y evitar peticiones innecesarias
- **SCSS y CSS modularizado**
- **Componentes reutilizables** (header, footer, barra de búsqueda, sistema de calificación por estrellas)

## Vistas funcionales

- `Home`: vista principal que muestra categorías y productos destacados. Al hacer clic en una imagen de producto se navega hacia su vista detallada.
- `Producto`: vista que muestra información detallada del producto seleccionado desde `Home`, incluyendo especificaciones, imagen, calificación, precio y descuento.

## Funcionalidades destacadas

- **Sistema de búsqueda**: permite filtrar productos por nombre y categoría.
- **Filtros dinámicos**: las subcategorías se actualizan automáticamente según la categoría seleccionada.
- **Persistencia local con cookies**: evita recargar datos innecesarios al navegar o recargar la página.
- **Diseño responsivo**: adaptable a distintos dispositivos.

---


## Instalación de dependencias

Antes de iniciar el proyecto, hay que instalar todas las dependencias necesarias ejecutando:

```bash
npm install
```

Esto descargará todos los paquetes listados en `package.json` requeridos para el correcto funcionamiento de la aplicación.

## Servidor de desarrollo

Para iniciar un servidor local, ejecuta:

```bash
ng serve
```

Una vez iniciado, abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al modificar los archivos fuente.

## Generación de código

Angular CLI proporciona herramientas de scaffolding. Para generar un nuevo componente, usa:

```bash
ng generate component component-name
```

Para ver todos los esquemas disponibles:

```bash
ng generate --help
```

## Compilación del proyecto

Para compilar el proyecto:

```bash
ng build
```

Los artefactos de compilación se guardarán en el directorio `dist/`.

## Pruebas unitarias

Para ejecutar pruebas unitarias con [Karma](https://karma-runner.github.io):

```bash
ng test
```

## Pruebas end-to-end (E2E)

Para pruebas end-to-end:

```bash
ng e2e
```

> Angular CLI no incluye un framework E2E por defecto. Puedes integrar uno como Cypress o Playwright según tus necesidades.

## Recursos adicionales

Para más información sobre Angular CLI y sus comandos visita la [documentación oficial](https://angular.dev/tools/cli).
