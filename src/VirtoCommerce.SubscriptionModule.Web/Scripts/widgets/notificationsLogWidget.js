angular.module('virtoCommerce.subscriptionModule')
.controller('virtoCommerce.subscriptionModule.notificationsLogWidgetController', ['$scope', 'platformWebApp.bladeNavigationService', function ($scope, bladeNavigationService) {
	var blade = $scope.widget.blade;

    blade.showSubscriptionNotificationsLog = function () {
		var objectId = blade.currentEntity.id;
		var objectTypeId = 'Subscription';
		var newBlade = {
			id: 'notificationLogWidgetChild',
			objectId: objectId,
			objectType: objectTypeId,
			title: 'subscription.widgets.notificationsLogWidget.blade-title',
			subtitle: 'subscription.widgets.notificationsLogWidget.blade-subtitle',
			controller: 'virtoCommerce.notificationsModule.notificationsJournalController',
			template: 'Modules/$(VirtoCommerce.Notifications)/Scripts/blades/notifications-journal.tpl.html'
		};
		bladeNavigationService.showBlade(newBlade, blade);
	};
}]);
