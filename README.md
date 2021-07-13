# Javascript 🚀️ 

#### Datos Curiosos
* Las variables se inicializan con el valor `undefined`, si intento hacer calculos con estos, dara `NaN` (Not a Number) como resultado
* Al poner `"use strict";` arriba de tu codigo JS, se habilita el modo estricto, que captura errores comunes de programacion y acciones inseguras, como, por ejemplo, `x = 3.14;` dará un error indicando que `x` no fue declarado

#### Secuencias de Cadenas
* `\'` Comilla simple
* `\"` Comilla doble
* `\\` Barra invertida
* `\n` Salto de linea
* `\r` Retorno carro
* `\t` Tabulacion
* `\b` Limite palabra
* `\f` Fuente de formulario

#### Fetch

Es una funcion que nos permite trabajar por Promesas la comunicacion con APIs. Para ver el ejemplo tenemos que ver tambien el `index.html`

#### Async | Await

Con cada promise, vamos creando diferentes hilos en la ejecucion, que se van parando/continuando a medida que se van cumpliendo (o no, porque puede fallar) las promesas.

* Una funcion puede ser `async()` si posee un `await` dentro del mismo
