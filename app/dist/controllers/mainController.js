/// <reference path="../_all.ts" />
var ContactManagerApp;
(function (ContactManagerApp) {
    var MainController = (function () {
        function MainController(UserService, $mdSidenav) {
            this.UserService = UserService;
            this.$mdSidenav = $mdSidenav;
            this.searchText = '';
            this.selected = null;
            this.message = "hello from our controller";
            var self = this;
            this.UserService
                .loadAllUsers()
                .then(function (users) {
                self.users = users;
                console.log(self.users);
                self.selected = users[0];
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSidenav('left').toggle();
        };
        MainController.prototype.selectUser = function (user) {
            this.selected = user;
            var sidenav = this.$mdSidenav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        };
        MainController.$inject = ['UserService', '$mdSidenav'];
        return MainController;
    }());
    ContactManagerApp.MainController = MainController;
})(ContactManagerApp || (ContactManagerApp = {}));
//# sourceMappingURL=mainController.js.map