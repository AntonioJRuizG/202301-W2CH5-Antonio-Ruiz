# Challenge 5 - semana 2

## Conway Game of Life

Deberás de programar el [Juego de la vida de Conway](https://es.wikipedia.org/wiki/Juego_de_la_vida).

![Game of life demo](https://www.jakubkonka.com/images/gof.gif)

Un resumen de las reglas:

- Una célula viva sigue las siguientes reglas:
  - Si tiene menos de 2 células contiguas vivas, muere por "soledad".
  - Si tiene más de 3 células contiguas vivas, muere por "sobrepoblación".
  - Si tiene 2 o 3 células contiguas vivas, sobrevive.
- Una célula muerta sigue la siguiente regla: Permanece muerta hasta que tiene exactamente 3 células contiguas vivas, momento en el que "nace".

Si quieres probar como funciona para hacerte una idea, puedes probar una versión funcional en [esta página](https://playgameoflife.com/).

## Requisitos

1. Si es posible, y puedes testear, usa TS
2. Debe de estar testado con Jest.
3. Debe utilizarse SonarCloud para ir comprobando la calidad del código.
4. Se utilizará Husky para manejar los git-hooks, utilizando los archivos adjuntos.
5. Debe utilizarse GitActions el workflow adjunto.
6. Debe protegerse main en GitHub para que todo lo que se mergee pase por pull-request y que el workflow se cumpla.
7. En el caso de llegar a HTML/CSS.
   4.1. Se utilizará BEM/SASS.
   4.2. Se debe desplegar a Netlify.

## Milestones

1. Programa funcional en JS. Las células se quedan pegadas la pared.
2. Programa 100% testeado.

3.a Añadir HTML/CSS.
3.b Modificar JS para que:
a. Las células sigan avanzando al llegar a la pared y desaparezcan.
b. Las células salgan por un lado de la cuadrícula y aparezcan por el otro.
