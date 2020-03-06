phoneDetailModule
    .component('phoneDetail', {
        // template: `TBD: Detail view for <spa>{{ $ctrl.phoneId }}</span>`,
        templateUrl: 'phone-detail/phone-detail.template.html',
        controller: [/*'$http', */'$routeParams', 'Phone', function PhoneDetailController(/*$http, */$routeParams, Phone){
            // this.phoneId = $routeParams.phoneId;
            this.setImage = function setImage(imageUrl) {
                this.mainImageUrl = imageUrl;
            }
            /*$http.get(`phones/${ $routeParams.phoneId }.json`)
                .then((response) => {
                    this.phone = response.data;
                    this.setImage(this.phone.images[0]);
                });*/
            this.phone = Phone.get({ phoneId: $routeParams.phoneId }, (phone) => {
                this.setImage(phone.images[0]);
            });
        }]
    });
// https://docs.angularjs.org/tutorial/step_13