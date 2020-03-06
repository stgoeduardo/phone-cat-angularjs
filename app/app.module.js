// step - 4 -> poniendo todo en modulos...para poder tener todo seccionado, y darle un mejor mantenimiento a todo esto...
// modulo principal...este es el modulo que levanta todo la aplicacion....para el paso 4, solo tiene un modulo agregado
// el modulo del componente phonelist, es como un submodulo...

var mainApp = angular.module('phonecatApp', [
    // ...which depends on the `phoneList` module
    'ngRoute',
    'phoneDetail',
    'phoneList',
    'core'
]);