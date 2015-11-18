/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.1.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */
$(function () {
    $('#id_start_date').datetimepicker({
        format: "YYYY-MM-DD HH:mm:ss"
    });

    // Contact forms validation
    //-----------------------------------------------       
    if($("#footer-form").length>0) {
        $("#footer-form").validate({
            submitHandler: function(form) {
                $('.submit-button').button("Sending...");
                $(form).ajaxSubmit({
                    success: function(){
                        $('#MessageNotSent').addClass('hidden');
                        $('#MessageSent').removeClass('hidden');
                        $('.submit-button').val("Send");
                    },
                    error: function(){
                        $('#MessageSent').addClass('hidden');
                        $('#MessageNotSent').removeClass('hidden');
                        $('.submit-button').val("Error");
                    },
                    clearForm: true
                });
            },              
            // debug: true,
            errorPlacement: function(error, element) {
                error.insertAfter( element );
            },
            onkeyup: false,
            onclick: false,
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "Please specify your name",
                    minlength: "Your name must be longer than 2 characters"
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Please enter a valid email address e.g. name@domain.com"
                },
                message: {
                    required: "Please enter a message",
                    minlength: "Your message must be longer than 10 characters"
                }                   
            },
            errorElement: "span",
            highlight: function (element) {
                $(element).parent().removeClass("has-success").addClass("has-error");
                $(element).siblings("label").addClass("hide"); 
            },
            success: function (element) {
                $(element).parent().removeClass("has-error").addClass("has-success");
                $(element).siblings("label").removeClass("hide"); 
            }
        });
    };

    // Book forms validation
    //-----------------------------------------------       
    if($("#book-form").length>0) {
        $('#btn-book').click(function(){
            $("#book-form").submit();
        });

        $("#book-form").validate({
            submitHandler: function(form) {
                $('.submit-button').button("Sending...");
                $(form).ajaxSubmit({
                    success: function(){
                        $('#MessageNotSent2').addClass('hidden');
                        $('#MessageSent2').removeClass('hidden');
                        $('.submit-button').val("Send");
                    },
                    error: function(){
                        $('#MessageSent2').addClass('hidden');
                        $('#MessageNotSent2').removeClass('hidden');
                        $('.submit-button').val("Error");
                    },
                    clearForm: true
                });
            },              
            // debug: true,
            errorPlacement: function(error, element) {
                error.insertAfter( element );
            },
            onkeyup: false,
            onclick: false,
            rules: {
                first_name: {
                    required: true,
                    minlength: 2
                },
                last_name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                book_date: {
                    required: true
                }
            },
            messages: {
                first_name: {
                    required: "Please specify your first name",
                    minlength: "Your first name must be longer than 2 characters"
                },
                last_name: {
                    required: "Please specify your last name",
                    minlength: "Your last name must be longer than 2 characters"
                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Please enter a valid email address e.g. name@domain.com"
                },
                book_date: {
                    required: "Please enter a date and time for the booking"
                }                   
            },
            errorElement: "div",
            highlight: function (element) {
                $(element).parent().removeClass("has-success").addClass("has-error");
                //$(element).siblings("label").addClass("hide"); 
            },
            success: function (element) {
                $(element).parent().removeClass("has-error").addClass("has-success");
                //$(element).siblings("label").removeClass("hide"); 
            }
        });
    };
});