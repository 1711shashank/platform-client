module.exports = ['$stateProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $urlMatcherFactoryProvider) {

    $urlMatcherFactoryProvider.strictMode(false);

    $stateProvider
        .state(
            {
                name: 'login',
                url: '/login',
                controller: require('./auth/login.controller.js'),
                template: ''
            }
        )
        .state(
            {
                name: 'forbidden',
                url: '/forbidden',
                controller: require('./auth/forbidden.controller.js'),
                template: require('./auth/forbidden.html')
            }
        )
        .state(
            {
                name: 'register',
                url: '/register',
                controller: require('./auth/register.controller.js'),
                template: ''
            }
        )
        .state(
            {
                name: 'forgotpassword',
                url: '/forgotpassword',
                controller: require('./auth/password-reset.controller.js'),
                template: ''
            }
        )
        .state(
            {
                name: 'forgotpassword.confirm',
                url: '/forgotpassword/confirm',
                controller: require('./auth/password-reset-confirm.controller.js'),
                template: ''
            }
        )
        .state(
            {
                name: 'forgotpassword.confirm.token',
                url: '/forgotpassword/confirm/:token',
                controller: require('./auth/password-reset-confirm.controller.js'),
                template: ''
            }
        )
        ;
}];
