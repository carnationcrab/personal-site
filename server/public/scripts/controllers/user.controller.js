myApp.controller('UserController', function(UserService) {
    var vm = this;
    console.log("in User Controller")
    var fsClient = filestack.init('AUHqPIAOCQIetYD0qFky5z');

    vm.openPicker = function(){
      fsClient.pick({
        fromSources:["local_file_system","imagesearch","facebook","instagram"],
        accept:["image/*"],
        transformations:{
        crop:true}
      }).then(function(response) {
        handleFilestack(response);
      });
    }
});