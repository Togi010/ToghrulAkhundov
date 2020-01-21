window.addEventListener("load", function(){
	let bolean_val = true;
	let documentClientHeight = document.querySelector('.counter').offsetTop - document.querySelector('.counter').clientHeight - document.querySelector('.counter').scrollHeight;
	if(bolean_val){
		document.body.onscroll = function(){
			if(window.scrollY > documentClientHeight && bolean_val == true){
				document.querySelectorAll('.counter_box').forEach(function(el){
					let plus = 0;
					let el_limit = parseInt(el.getAttribute('data-count'));
					if(plus <= el_limit){
						  let intervalItem = setInterval(function(){
							el.querySelector('.count').innerHTML = plus+=100;
							if(plus > el_limit){
								el.querySelector('.count').innerHTML = el_limit;
							}
							plus > el_limit ? clearInterval(intervalItem) : false;
						}, 10);
						 bolean_val = false;
					}
					else{
						
					}
				});
			}
			else{}
		}
	}
	else{}
});

function openNav(){
	document.querySelector('.header-box').classList.add('active');
	document.querySelector('.open-module').classList.add('active');
	document.querySelector('.bg-module').classList.add('active');
}

function closeNav(){
	document.querySelector('.header-box').classList.remove('active');
	document.querySelector('.open-module').classList.remove('active');
	document.querySelector('.bg-module').classList.remove('active');
}


(function ($) {
    "use strict";
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);