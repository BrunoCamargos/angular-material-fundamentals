/// <reference path="../_all.ts" />

module ContactManagerApp {
	export class MainController {

		static $inject = ['UserService', '$mdSidenav'];

		constructor(private UserService: IUserService,
			private $mdSidenav: angular.material.ISidenavService) {
			var self = this;

			this.UserService
				.loadAllUsers()
				.then((users: User[]) => {
					self.users = users;
					console.log(self.users);
					self.selected = users[0];
				});
		}

		searchText: string = '';
		users: User[];
		selected: User = null;
		message: string = "hello from our controller";

		toggleSideNav(): void {
			this.$mdSidenav('left').toggle();
		}

		selectUser(user: User) : void {
			this.selected = user;

			var sidenav = this.$mdSidenav('left');
			if (sidenav.isOpen()){
				sidenav.close();
			}
		}
	}
}