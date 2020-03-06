// step - 3
/*phonecatApp
    .component('phoneList', {
        template: `<ul>
                <li ng-repeat='p in $ctrl.phones'>
                    <span>{{ p.name }}</span>
                    <p>{{ p.snippet }}</p>
                </li>
            </ul>`,
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ];
        } 
    });*/

// step - 4 ---> poniendo todo en modulos...en este paso se esta haciendo referencia al submodulo que le correspondee, 
// en este caso es el modulo de phoneList...
phoneModule
    .component('phoneList', {
        // en este caso cestamos utiñizando templateUrl para hacer referencia a la plantilla
        // es importante señalar que templateUrl lo ocupamos cuando hay mucho codigo html, se hace referencia a una plantilla y 
        // ya no usamos template strings o concatenaciones...
        templateUrl: 'phone-list/phone-list.template.html',
        // para el paso 7, vamos a inyectar un servicio ($http) para realizar consultas, en este caso, a un dataset (json) que esta en la misma carpeta del proyecto
        // el ['$http', ...] lo usamos o se agrega, para que al momento de minificar el proyecto (cuando se suba a produccion o algo asi), reconozca
        // las inyecciones que se le hicieron, si la dejhamos solo en la funcion, por el prefix $, al momento de minificarlo, no reconoce la inyeccion
        // pero si la agregamos en texto, la deja...
        controller: [/*'$http'*/'Phone', 
            function PhoneListController(/*$http*/Phone) {
                /*this.phones = [
                    { name: 'Nexus S', snippet: 'Fast just got faster with Nexus S.', age: 1 },
                    { name: 'Motorola XOOM™ with Wi-Fi', snippet: 'The Next, Next Generation tablet.', age: 2 },
                    { name: 'MOTOROLA XOOM™', snippet: 'The Next, Next Generation tablet.', age: 3 }
                ];*/

                /*var self = this;
                self.orderProp = 'age';
                $http.get('phones/phones.json')
                    .then(function(response) {
                        console.log("Response ", response)
                        self.phones = response.data;
                    });*/
                this.orderProp = 'age';
                /*$http.get('phones/phones.json').then((response) => {
                    this.phones = response.data;
                })*/
                this.phones = Phone.query();
            }
        ]
    });