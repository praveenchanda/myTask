angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('searchCtrl', function($scope, $stateParams) {
	$scope.result = function(){
	/*var canvas =	document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		var radius = canvas.height / 2;
		ctx.translate(radius,radius);
		radius = radius*0.90 setInterval(drawClock,1000);
		function drawClock(){
			drawFace(ctx,radius);
			drawNumbers(ctx,radious);
			drawTime(ctx,radius);
		}
		function drawFace(ctx,radius){
			var grad;
			ctx.beginPath();
			ctx.arc(0,0,radius,0,2*Math.PI);
			ctx.fillstyle = 'white';
			ctx.fill();
			gard = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
			grad.addColorStop(0.,'#333');
			grad.addColorStop(0.5,'white');
			grad.addColorStop(1,'#333');
			ctx.strokeStyle = grad;
			ctx.lineWidth = radius*0.1;
			ctx.stroke();
			ctx.beginPath();
		ctx.arc(0,0,radius*0.1,0,2*Math.PI);
		ctx.fillstyle = '#333';
		ctx.fill();
		}
		function drawNumbers(ctx,radius){
			var ang;
			var num;
			ctx.font = radius*0.15 +"px arial";
			ctx.textBaseline="middle";
			ctx.textAlign="center";
			for(num = 1; num < 13;num++){
				ang = num * Math.PI / 6;
				ctx.rotate(ang);
				ctx.translate(0,radius*0.85);
				ctx.rotate(-ang);
			}
	}
	function drawTime(ctx,radius){
		var now = new Date();
		var hour = now.getHours();
		var minite = now.getMinutes();
		var second = now.getSeconds();
		//hour
		hour=hour%12;
		hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
		drawHand(ctx,hour,radius*0.5,radius*0.07);
	}		
		//minute
	
		minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
		drawHand(ctx,minute,radius*0.8,radius*0.07);
		//second
		
		second=(second*Math.PI/30);
		drawHand(ctx,second,radius*0.9,radius*0.02);
	}	
	function drawHand(ctx,pos,length,width){
		ctx.beginPath();
		ctx.lineWidth = width;
		ctx.lineCap = "round";
		ctx.moveTo(0,0);
		ctx.rotate(pos);
		ctx.lineTo(0,-length);
		ctx.stroke();
		ctx.rotate(-pos);*/
	}
			
		
})
.controller('questionarieCtrl', function($scope,$state, $stateParams) {
	$scope.q1btn = function(){
		angular.element(document.querySelector("#q1")).css('display','none');
		angular.element(document.querySelector("#q2")).css('display','block');
	}
	$scope.q2btn = function(){
		var name = angular.element(document.querySelector("#myname")).val();
		var age = angular.element(document.querySelector("#myage")).val();
		$scope.name = name;
		$scope.age = age;
		
		angular.element(document.querySelector("#q2")).css('display','none');
		angular.element(document.querySelector("#q3")).css('display','block');
		
	}
	$scope.result = function () {
		$state.go('app.search');
	};
})	

	

it('should change state', function() {
  var inputs = element.all(by.model('color.name'));
  var color = element(by.binding('color.name'));

  expect(color.getText()).toContain('extremly');

  inputs.get(0).click();
  expect(color.getText()).toContain('verylikely');

  inputs.get(1).click();
  expect(color.getText()).toContain('not so likely');
});


it('should change state', function() {
  var value1 = element(by.binding('checkboxModel.value1'));
  var value2 = element(by.binding('checkboxModel.value2'));

  expect(value1.getText()).toContain('true');
  expect(value2.getText()).toContain('YES');

  element(by.model('checkboxModel.value1')).click();
  element(by.model('checkboxModel.value2')).click();

  expect(value1.getText()).toContain('false');
  expect(value2.getText()).toContain('NO');
});
;
