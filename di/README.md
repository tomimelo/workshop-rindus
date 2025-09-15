



# DI desde 0

## Que problemas resuelve ?

- Reduce el acoplamiento
- Facilita el testing. Posibilidad de usar mocks, fakes. 
- Centraliza/Descentraliza la configuracion
- Promueve el uso de interfaces
- Control del ciclo de vida

## Constraints o cosas a tener en cuenta:

- Dependencia referenciable a traves de token
- Gestionar el uso de la memoria (ciclo de vida)
- Facil reemplazar dependencias
- Validar la cadena de dependencias
- Prevenir dependencias circulares

## Features

- [x] Intercambiar token por instancia.
- [x] Configurar tokens/instancias en algun lugar
- [x] Configurar el valor asociado a un token para recibir la instancia de una clase
- [x] Definir tokens como strings
- [x] Token a traves de un value estatico
- [x] Validar dependencias anidadas
- [] Scope: singleton o transient
- [] Definir tokens con una clase/clase abstracta
- [] Crear multiples contenedores
- [] Sobreescribir token
- [] Token a traves de factory
