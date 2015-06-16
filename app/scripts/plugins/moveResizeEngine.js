'use strict';
$.noConflict();

function makeMovable() {

    jQuery(document).ready(function($) {


        //Makes boxes Sortable
        $(function() {

            $('#sortOne, #sortTwo').sortable({
                appendTo: document.body,
                connectWith: '#sortTwo, #sortOne',
                zIndex: 9999,
                tolerance: 'intersect',
                helper: 'clone',
                containment: 'parent',
                revert: true,
                forcePlaceholderSize: true
            });

        });
        // Room Description Drag 

        setTimeout(function() {

            $('.roomDescriptionViewer').slimScroll({
                position: 'right',
                height: '12vh',
                railVisible: false,
                alwaysVisible: true,
                distance: '-20px',
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
                delay: 30,
                ghost: true,
                animate: true,
                autoHide: true,
                handles: 's'
            });
        }, 0);
    });
}