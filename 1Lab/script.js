var myMap;
ymaps.ready(init);
function init ()
{
  myMap = new ymaps.Map('map',{
      center: [55.1547, 61.3758],
      zoom: 12,
		  controls: ['zoomControl', 'typeSelector']});

	var myCollectionPhoto = new ymaps.GeoObjectCollection();

  $("#hashsearch").click(
    function ()
    {
      //Здесь по клику на кнопке в форме поиска, мы получаем навазние тега.
      var TagName = $('input[name="search_hash"]').val();
      var TagNameText = 'https://api.instagram.com/v1/tags/' + TagName + '/media/recent?access_token=4723090197.a973d3c.5aea6d57347245e382dcb716401126c4';

      $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: TagNameText,
            success: function(data)
            {
              /*  console.log(data); */
                var answer = data;
              /*  console.log(answer); */
                var out = '<ul>';
                myCollectionPhoto.removeAll();
                for (j = 0; j < answer.data.length; j++)
                {
                        var x = answer.data[j].location.latitude;
                        var y = answer.data[j].location.longitude;

                          myCollectionPhoto.add(new ymaps.Placemark([x, y],
                              {
                                balloonContent: '<strong>'+answer.data[j].location.name+'</strong><br />' +answer.data[j].caption.text +  '<br /><a href="'+answer.data[j].link+'" target="_blank"><img src="'+answer.data[j].images.thumbnail.url+'" /></a>'
                              },
                              {
                                iconLayout: 'default#image',
                                iconImageHref: 'instagram-icon-map.png',
                                iconImageSize: [30, 30],
                                iconImageOffset: [-15, -15]
                              }));
                          out += '<li style="display: inline-block; padding: 25px"><a href="'+answer.data[j].link+'" target="_blank"><img src="'+answer.data[j].images.thumbnail.url+'" /></a></li>';
                }
                out += '</ul>';
                $("#add_img").html(out);

                myMap.geoObjects.add(myCollectionPhoto);
                myMap.setBounds(myCollectionPhoto.getBounds());
                myMap.setBounds(bounds, {checkZoomRange: true });
            }
        });
   });
}
