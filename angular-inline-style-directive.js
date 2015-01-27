'use strict';

angular.module('bitliner.inlineStyle', [])
    .directive('inlineStyle', function($compile, $log) {
        return {
            scope: {
                'css': '@'
            },
            restrict: 'E',
            link: function postLink(scope, element) {
                var $el;

                $el = $(element);

                function update() {
                    var content;


                    content = '<style>' + scope.css + '</style>';


                    $el.html(content);

                }


                scope.$watch('css', function(n) {
                    scope.css = n;
                    update(n);
                });

            }
        };
    });