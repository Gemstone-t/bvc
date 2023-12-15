$('#drop').on('change', function (){
    if(this.checked){
        $('#show-list').hide();
        $('#hide-list').show();
    }
    else{
        $('#show-list').show();
        $('#hide-list').hide();
    }
}) 
