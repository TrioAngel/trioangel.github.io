// slide part

let imgs = [
    "url('imgs/1.png')",
    "url('imgs/2.png')",
    "url('imgs/3.png')",
    "url('imgs/4.png')",
    "url('imgs/5.png')",
    "url('imgs/6.png')",
    "url('imgs/7.png')",
    "url('imgs/8.png')"
];

let counter = 1;

setInterval(() => {
    if (counter == 8) {
        counter = 0
    }
    document.getElementById('backSlide').style.backgroundImage = imgs[counter];

    counter++;
}, 8000);


// SVG part

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

// navbar



//ask a question

$('#firstBtn, #secondBtn').on('click', function(){
    $('#secondBtn').toggle();
    $('.secondNav').toggle();
    $('#firstBtn').toggle();
})


//modal

$('#openModal, #closeModal').click(function(){
    $('#modal-all').toggle();
})