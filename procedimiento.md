# Procedimiento de calculadora con React.js

## Idea general
La calculadora funciona así: recibe un primer valor numérico que al pulsar en una tecla de operación se almacena, permitiendo escribir un segundo valor. Cuando se presiona en la tecla "=", la calculadora reconoce el tipo de operación que se debe realizar y ejecuta la operación con el primer valor guardado y el segundo (que es el actual de la pantalla).

### Creación de useStates (variables con memoria)
1. screenValue -> Para el valor de la pantalla
2. activeOperation -> Para que la tecla "=" reconozca que operación está activa y tiene que llevar a cabo (división, resta...)
3. firstValue -> Para almacenar el primer valor de la operación (el segundo será el valor actual de la pantalla)

### Funciones de operaciones
Todas las funciones de operaciones (sum, subtract, multiply, y division) funcionan de la siguiente forma:
1. Establecen la activeOperation en la operación correspondiente.
2. Guardan el valor actual de la pantalla como firstValue.
3. Restablecen el valor de la pantalla, dejando que se pueda introducir el siguiente valor con el que se quiera operar.

### Función de tecla "="
Esta función comprueba cual es el valor de la activeOperation, y establece el valor de screenValue con el resultado de la operación entre firstValue y el screenValue actual.

### Función de tecla numérica
Todos los números tienen una función que convierte el screenValue en string, le añade el número en cuestión, y después lo vuelve a convertir en número.

### Función de tecla C
Restablece el screenValue.

### Función de tecla %
Establece el valor de screenValue con su valor / 100.

### Función de tecla +/-
Establece el valor de screenValue con su valor multiplicado por -1.

### Función de tecla .
Convierte el valor de screenValue a string y le añade un . detrás. No vuelve a convertirlo a número porque da error NaN. Pero al pulsar la siguiente tecla de número para establecer el número decimal, vuelve a convertirse en número.

## Objeto de teclas
Creé un array de teclas, cada una de ellas componiendo un objeto con su contenido y su función asociada.
Generé un conjunto de botones mapeando el array, estableciendo la key de cada uno con su índice, la función onClick y el contenido con los datos del array de objetos.

### Estilos
Estilé con CSS mediante grid, y en JSX coloqué un ternario para comprobar si la tecla tenía contenido "=", para darle un estilo especial, ocupando dos espacios y cambiando su color.