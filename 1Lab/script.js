var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map
    ('map',
          {
            center: [55.1547, 61.3758],
            zoom: 12,
		        controls: ['zoomControl', 'typeSelector']
          }
    );

	var myCollection = new ymaps.GeoObjectCollection();

  $("#hashsearch").click(function ()
  {
    var address = $('input[name="search_hash"]').val();

      var xhr = new XMLHttpRequest();

      var str = 'https://api.instagram.com/v1/tags/' + address + '/media/recent?access_token=4723090197.a973d3c.5aea6d57347245e382dcb716401126c4';

      xhr.open('GET', str, false);

      xhr.send();

      var json = JSON.parse(xhr.responseText);

      var out = '<ul>';
      myCollection.removeAll();

      for (j = 0; j < json.data.length; j++)
      {

            var x = json.data[j].location.latitude;
            var y = json.data[j].location.longitude;


            myCollection.add(new ymaps.Placemark([x, y],
              {
              balloonContent: '<strong>'+json.data[j].location.name+'</strong><br />' +json.data[j].caption.text +  '<br /><a href="'+json.data[j].link+'" target="_blank"><img src="'+json.data[j].images.thumbnail.url+'" /></a>'},
            {
              iconLayout: 'default#image',
              iconImageHref: 'instagram-icon-map.png',
              iconImageSize: [30, 30],
              iconImageOffset: [-15, -15]
          }));

  out += '<li style="display: inline-block; padding: 25px"><a href="'+json.data[j].link+'" target="_blank"><img src="'+json.data[j].images.thumbnail.url+'" /></a></li>';

  }

    out += '</ul>';

    $("#add_img").html(out);

    myMap.geoObjects.add(myCollection);

  		myMap.setBounds(myCollection.getBounds());
    
              myMap.setBounds(bounds, {
                  checkZoomRange: true
              });
   });

}
