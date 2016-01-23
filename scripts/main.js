(function() {
    var app = angular.module('leoApp', []);

    app.controller("TabController", function() {
        this.tab = 1;

        this.isSet = function(checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
            this.tab = setTab;
        };
    });

    /*Fitness controller*/

    app.controller("FitnessController", function($scope){


        this.calculate = function(h, w, a) {

            /*BMI and HRZ calculations */
            this.bmi = w/(h/100*h/100);
            this.max = 220 - a; /*220 is a default max heart rate*/
            this.hr1 = (this.max * 0.6);
            this.hr2 = (this.max * 0.7);
            this.hr3 = (this.max * 0.8);



            /*Set proper message and background color depending on BMI */
            if (this.bmi<18.5) {
                this.result = "You are underweight";
                this.color = "lightgreen";
            }
            else if (this.bmi<=25) {
                this.result = "You have optimal weight";
                this.color = "green";
            }
            else if (this.bmi<=30) {
                this.result = "You are overweight";
                this.color = "darkorange";
            }
            else if (this.bmi>30) {
                this.result = "You have obese";
                this.color = "red";
            }
        };

        /*clear form and results*/
        this.clear = function(){
            $scope.dataForm.$setPristine();
            this.h = null;
            this.w = null;
            this.a = null;
        }

    });
})();