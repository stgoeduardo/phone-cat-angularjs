// step - 4 -> poniendo todo en modulos...para poder tener todo seccionado, y darle un mejor mantenimiento a todo esto...
// este es el modulo del componente phone-list, es nuestro submodulo...el cual se va a agregal al modulo principal
// de la aplicacion que es: phonecatApp

var phoneDetailModule = angular.module('phoneDetail', [
    'ngRoute',
    'core.phone'
]);