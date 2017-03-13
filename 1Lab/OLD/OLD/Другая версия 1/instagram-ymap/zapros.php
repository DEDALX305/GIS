<?php

header("Content-Type: text/html; charset=utf-8");

if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest') {

$CLIENT_ID = '';

if(isset($_GET['lat'])) {$lat = $_GET['lat'];}
if(!isset($lat)) {$lat = 56.326944;}

if(isset($_GET['lon'])) {$lon = $_GET['lon'];}
if(!isset($lon)) {$lon = 44.0075;}

function curl_zapros($strRequest) 
{
if( $curl = curl_init() ){

curl_setopt($curl,CURLOPT_URL,$strRequest);
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);

$result_data = curl_exec($curl);

$result_data = trim($result_data);

return $result_data;

// Закрываем соединение
curl_close($curl);
}
}

function json2array($json){
   $json_array = false;
   $json = substr($json, 1, -1);
   $json = str_replace(array(":", "{", "[", "}", "]"), array("=>", "array(", "array(", ")", ")"), $json);
   @eval("\$json_array = array({$json});");
   return $json_array;
}

$strRequest = 'https://api.instagram.com/v1/media/search?lat='.$lat.'&lng='.$lon.'&client_id='.$CLIENT_ID;

$json =  curl_zapros($strRequest);

echo $json;

}
?>