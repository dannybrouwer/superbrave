$(function() {
    var obj = jQuery.parseJSON( '{"products": [{"name": "Viagra","dosages": [{"dosage": "10mg","packages": [{"type": "Tabletten","amount": 12,"price": 123.4,"productVariantId": 11}, {"type": "Tabletten","amount": 24,"price": 250,"productVariantId": 12}, {"type": "Tabletten","amount": 36,"price": 450,"productVariantId": 13}]}, {"dosage": "25mg","packages": [{"type": "Tabletten","amount": 8,"price": 80,"productVariantId": 14}, {"type": "Tabletten","amount": 12,"price": 120,"productVariantId": 15}, {"type": "Tabletten","amount": 16,"price": 160,"productVariantId": 16}]}]}, {"name": "Levitra","dosages": [{"dosage": "50mg","packages": [{"type": "Tabletten","amount": 4,"price": 400,"productVariantId": 210}, {"type": "Tabletten","amount": 8,"price": 800,"productVariantId": 420}]}, {"dosage": "100mg","packages": [{"type": "Tabletten","amount": 2,"price": 220,"productVariantId": 500}, {"type": "Tabletten","amount": 4,"price": 440,"productVariantId": 1200}]}, {"dosage": "150mg","packages": [{"type": "Tabletten","amount": 24,"price": 120,"productVariantId": 650}, {"type": "Tabletten","amount": 48,"price": 240,"productVariantId": 150}]}]}]}' );
	$.each(obj.products, function (index, value) {
		var prodcts = $('<option />');
    	prodcts.attr('value', obj.name).text(this.name);
    	$('#products').append(prodcts);
	    $('#amount').append("<label><input type='radio' name='amount' value='"+value.dosages[index].dosage+"'>" + value.dosages[index].dosage + "</label>");
  	});

  	$('input:radio[name="amount"]').change(function(){
    	if ($(this).is(':checked')) {
    		$('input:radio[name="amount"]').parent().removeClass("checked");
        	$(this).parent().addClass("checked");
    	}
    });
    $('select#products, select#category').change(function(){
    	if ($(this).find("option").is(':selected')) {
    		if ($(this).val().length > 0){
        		$(this).parent().addClass("selected");
        	}
        	else{
        		$(this).parent().removeClass("selected");
        	}
    	}
    });
});