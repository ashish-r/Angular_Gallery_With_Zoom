angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($uibModal, $log, $scope) {
  
  $scope.items = [{"image":"Portrait-8.jpg","name":"Cat on Fence"},
    {'image':'l1.jpg', 'text':'Mad Cat'},
    {'image':'l2.jpg', 'text':'Fluffy Cat'},
     {"image":"l8.jpg","name":"Cat on Fence"},
    {'image':'l3.jpg', 'text':'Mad Cat'},
    {'image':'l4.jpg', 'text':'Fluffy Cat'},
    {'image':'l5.jpg', 'text':'Cat Laying Down'},
    {'image':'l6.jpg', 'text':'Cat Laying Down'},
    {'image':'l7.jpg', 'text':'Content Cat'}];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      ariaDescribedBy: 'modal-body-gallery',
      templateUrl: 'myGalleryModal.html',
      controller: 'ModalInstanceCtrl',
	  windowClass: 'gallery-modal-ash',
      
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
    
    

});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, items, $scope) {
  
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
    
  $scope.selectedimage = null;
  $scope.selectedimagecount = null;
  $scope.zoomvisible = 'hidden';
  $scope.imagevisible = 'visible'
    
  $scope.openImg = function (imagenum) {
  $scope.zoomvisible = 'hidden';
  $scope.selectedimagecount = imagenum;
  $scope.selectedimage = $scope.items[imagenum];
  console.log($scope.selectedimage);
  };
    
  $scope.zoomImg = function () {
  $scope.zoomvisible = 'visible';
  };
   
  $scope.zoomOut = function () {
  $scope.zoomvisible = 'hidden';
  };
    
});
 



// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('ui.bootstrap.demo').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    

    $scope.$onInit = function () {
      $scope.items = $scope.resolve.items;
      $scope.selected = {
        item: $scope.items[0]
      };
    };

    $scope.ok = function () {
      $scope.close({$value: $scope.selected.item});
    };

    $scope.cancel = function () {
      $scope.dismiss({$value: 'cancel'});
    };
      

  }
});
