/// <reference path="../_all.ts" />

module ContactManagerApp {

  export class ContactPanelController {
    static $inject = ['UserService', '$mdBottomSheet'];

    constructor(
      private UserService: IUserService,
      private $mdBottomSheet: angular.material.IBottomSheetService) {
      this.user = UserService.selectedUser;
    }

    user: User;

    actions = [
      { name: 'Phone', icon: 'phone' },
      { name: 'Twitter', icon: 'twitter' },
      { name: 'Google+', icon: 'google_plus' },
      { name: 'Hangout', icon: 'hangouts' }
    ];

    submitContact(action): void {
      this.$mdBottomSheet.hide(action);
    }

  }
}