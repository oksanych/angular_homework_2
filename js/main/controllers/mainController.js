App.controller('MainCtrl', function ($scope, toaster) {

    $scope.data = model;

    $scope.addNewPerson = function (userDetails, isvalid) {

        if (isvalid) {
            $scope.data.persons.push({
                name: userDetails.name,
                lastName: userDetails.lastName,
                userName: userDetails.userName,
            });

            toaster.pop({
                type: 'success',
                title: "Success",
                body: "User added!",
                showCloseButton: true
            });

            userDetails.name = "";
            userDetails.lastName = "";
            userDetails.userName = "";
        }
        else {
            toaster.pop({
                type: 'error',
                title: "Error",
                body: "Please, enter the correct information in the field.",
                showCloseButton: true
            });
        }
    }

    $scope.removeUser = function (index) {
        $scope.data.persons.splice(index, 1);

        toaster.pop({
            type: 'success',
            title: "Success",
            body: "User removed!",
            showCloseButton: true
        });
    }
});