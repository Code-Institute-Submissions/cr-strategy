angular.module("routeControllers", [])
    .controller("formController", function($scope, $location) {
        $(document).ready(function() {
            var limit = 8;
            $('label input').on('change', function(evt) {
                if($("input[name='cards']:checked").length > limit) {
                    this.checked = false;
                    alert("You can only select 8 cards! If you would like to change a card, please de-select one first.");
                } else {
                    $(this).siblings().toggleClass("checked");
                }
            });
            $('#submit-btn').click(function() {
                checked = $("input[name='cards']:checked").length;
                if(checked !== 8) {
                    alert("You have selected less than 8 cards. Please select a total of 8 cards.");
                } else {
                    alert("Thank you for submitting your deck to us. We will publish your deck after review.");
                }
            });
        });
    })
    .controller("arenasController", function() {
        $('#carousel-text').html($('.active > .carousel-caption').html());
        $('.carousel').on('slid.bs.carousel', function () {
            $('#carousel-text').html($('.active > .carousel-caption').html());
        });
    });