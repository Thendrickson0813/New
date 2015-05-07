'use strict';
$.noConflict();

function makeMovable() {

    jQuery(document).ready(function($) {


        //Makes boxes Sortable
        $(function() {
            $(".sortable").sortable();
            $(".sortable").disableSelection();
        });
        $("#sortOne, #sortTwo").sortable({
            connectWith: "#sortOne, #sortTwo"
        });

        // Room Description Drag 

        setTimeout(function() {
            $('.roomDescriptionViewer').resizable({
                ghost: true,
                animate: true,
                delay: 30,
                snap: true
            });
            $('.roomDescriptionViewer').slimScroll({
                position: 'left',
                height: '10vh',
                railVisible: true,
                alwaysVisible: true,
                wheelStep: 1
            });
            $('.new').slimScroll({
                position: 'left',
                height: '70vh',
                railVisible: true,
                alwaysVisible: true,
                wheelStep: 1
            });
            $('.new1').slimScroll({
                position: 'right',
                height: '70vh',
                railVisible: true,
                alwaysVisible: true,
                wheelStep: 1
            });

            // Resizes the item boxes
            $('.resizable').resizable({
                maxWidth: 200,
                minWidth: 200,
                delay: 30,
                ghost: true,
                animate: true,
                autoHide: true
            });
        }, 0);
    });
}