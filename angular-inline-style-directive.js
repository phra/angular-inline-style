'use strict';

angular.module('bitliner.inlineStyle', [])
    .directive('inlineStyle', function($compile, $log) {
        return {
            scope: {
                'css': '='
            },
            restrict: 'E',
            link: function postLink(scope, element) {
                var content, result;

                function update(str) {
                    element.replaceWith('<style>' + scope.css + '</style>');
                    // element.replaceWith('<style ng-bind-template="' + str + '"></style>');
                }


                scope.$watch('css', function(n) {
                    $log.info('n', n);
                    update(n);
                });

            }
        };
    });