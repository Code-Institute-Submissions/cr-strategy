angular.module("routeControllers", [])
    .controller("homeController", function() {

    })
    .controller("newsController", function() {

    })
    .controller("decksController", function() {

    })
    .controller("formController", function($scope) {
        var limit = 8;
        $('label input').on('change', function(evt) {
            if($("input[name='cards']:checked").length > limit) {
                this.checked = false;
                window.alert("You can only select 8 cards! If you would like to change a card, please de-select one first.");
            } else {
                $(this).siblings().toggleClass("checked");
            }
        });
    })
    .controller("faqController", function() {

    });