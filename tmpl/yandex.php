<?php
/**
 * @package    seoclick-googlemap
 *
 * @author     Vlast <vlasteg@mail.ru>
 * @copyright  A copyright
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       https://seoclick.by
 */

defined('_JEXEC') or die;

$module_id = 'yandex-map-' . $module->id . '-' . rand(1, 99999);

$script = "
        document.addEventListener(\"DOMContentLoaded\", function(){
            
           document.getElementById('" . $module_id . "').style.height = '" . $map_height . "px';
           document.getElementById('" . $module_id . "').innerHTML = '<div class=\"map-loader\"><div>Загрузка карты. Подождите...</div><div><img src=\"" . $module_path . "/assets/images/Preloader.gif\"/></div></div>';
        });
           window.addEventListener('load', function(){
                    document.getElementById('" . $module_id . "').innerHTML = '';
                     ymaps.ready(function(){
                        var yandexMap_" . $module->id . " = new YandexMap({
                        id: '" . $module_id . "',
                        centerCoord: [" . $center_lat . ", " . $center_lng . "],
                        zoom: " . $map_zoom . ",
                        wheel_zoom: ". $zoom_control_wheel ."});";

$keys = array_keys($places);
if (!empty($places[$keys[0]]["lat"]) && !empty($places[$keys[0]]["lng"]))
{
	$counter      = 1;
	$places_count = count($places);
	$script       .= "yandexMap_" . $module->id . ".addPlace([";

	foreach ($places as $place)
	{
		$script .= "
            {
              name: '" . $place["name"] . "',
              position: {lat: " . $place["lat"] . ", lng: " . $place["lng"] . "}";
		if ($marker_image && $marker_image_width && $marker_image_height)
		{
			$script .= " ,
			    icon: {
			        iconLayout: 'default#image',
			        iconImageHref: '" . $marker_image . "',
			        iconImageSize: [$marker_image_width, $marker_image_height],
			        iconImageOffset: [$marker_image_offset_x, $marker_image_offset_y]
			    }"
                ;
		}
		if (!empty($place["info_window_content"]) && $info_window)
		{
			$script .= ",
              infoWindowContent: '<div class=\"markerContent\">" . str_replace("\r\n", "<br/>", $place["info_window_content"]) . "</div>'";
		}
		$script .= "
            }
        ";
		if ($counter++ != $places_count) $script .= ',';
	}

	$script .= "]);";
}

if ($map_controls["zoom"]) $script .= "yandexMap_" . $module->id . ".addControl('zoomControl');";
if ($map_controls["mapType"]) $script .= "yandexMap_" . $module->id . ".addControl('typeSelector');";
if ($map_controls["fullscreen"]) $script .= "yandexMap_" . $module->id . ".addControl('fullscreenControl');";
if ($map_controls["geolocation_control"]) $script .= "yandexMap_" . $module->id . ".addControl('geolocationControl');";
if ($map_controls["search_control"]) $script .= "yandexMap_" . $module->id . ".addControl('search_control');";
if ($map_controls["route_control"]) $script .= "yandexMap_" . $module->id . ".addControl('routeButtonControl');";
if ($map_controls["traffic_control"]) $script .= "yandexMap_" . $module->id . ".addControl('trafficControl');";
if ($map_controls["ruler_control"]) $script .= "yandexMap_" . $module->id . ".addControl('rulerControl');";

$script .= "});";
$script .= "
    });
";

$document->addScriptDeclaration($script);
?>
<div id="<?= $module_id ?>" class="seoclick-map <?= $moduleclass_sfx ?>"></div>
