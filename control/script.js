$(document).ready(function() {
   $('#btn-menu').on('click', function() {
    $('.nav-mobile').toggleClass('active');
    $('#btn-menu').find('i').toggleClass('fa-x')
   });
});