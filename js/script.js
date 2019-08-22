(function(){

var templatebox = document.getElementById('template-image-list').innerHTML;
var templateItem = document.getElementById('template-image-content').innerHTML;

Mustache.parse(templateItem);

var listItem = '';
	for(var i = 0; i < imageData.length; i++){

		listItem += Mustache.render(templateItem, imageData[i]);
	}

var fullImageList = Mustache.render(templatebox,{products: listItem});
results.insertAdjacentHTML('beforeend', fullImageList)
})();
// import carousel
(function(){

var templateSlide = document.getElementById('template-slide').innerHTML;

Mustache.parse(templateSlide);

var slideItem = '';
	for(var k = 0; k < slideArr.length; k++){
		
		slideItem += Mustache.render(templateItem, imageData[k]);
	}

var fullImageList = Mustache.render(templateSlide,{products: slideItem});
results2.insertAdjacentHTML('beforeend', fullImageList)
})();


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  freeScroll:true,
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  draggable: false,
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
  freeScroll: true,
  contain: true,
  prevNextButtons: false,
  
});
