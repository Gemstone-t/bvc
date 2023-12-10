new Splide( '#photo-slider' , {
    type    : 'loop',
    perPage : 4,
    focus   : 'center',
    perMove : 1,
    gap     : '0',
    autoplay: true,
    interval: 2000,
}).mount();

new Splide( '#story-slider' , {
    type    : 'loop',
    perPage : 1,
    perMove : 1,
}).mount();

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
