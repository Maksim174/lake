$(function() {
	
	// отправка данных на API Getaway 
	$('#form').submit(function(){
		
		$('.btn-submit-result').attr('disabled', 'true');
//         $.ajax({
//             type: "POST",
//             url: "https://410kzqlhs9.execute-api.us-east-1.amazonaws.com/cleanlike_product",
//             data: $(this).jsonify(),
//             success: function(response){
//                 if (response){
// 				var json_obj = JSON.parse(response["body"]);
// 				console.log(json_obj["name"]); 
//             $('#form').trigger('reset');
//             alert('Спасибо за обращение! В ближайшее время наш сотрудник свяжется с Вами');
// 		$('.btn-submit-result').removeAttr("disabled")
//                 }else{
//                     alert('Что-то пошло не так. Попробуйте отправить сообщение позднее или позвоните по телефону.')
//                 }
//             }
//         })


		//test

		var request = $.ajax({
			url: "https://410kzqlhs9.execute-api.us-east-1.amazonaws.com/cleanlike_product",
			method: "POST",
			data: $(this).jsonify(),
			dataType: "json"
		});

		request.done(function(response){
			var json_obj = JSON.parse(response["body"]);
				console.log(json_obj["name"]); 
            $('#form').trigger('reset');
            alert('Спасибо за обращение! В ближайшее время наш сотрудник свяжется с Вами');
		$('.btn-submit-result').removeAttr("disabled");
		});

		request.fail(function(msg){
			alert(msg)
		})

        return false;
    }); 

	//  прокрутка до якоря
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("main").animate({scrollTop: $(_href).offset().top+"px"}, 2000);
		return false;
	});
	
});
