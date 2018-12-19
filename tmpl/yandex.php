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
                        var yandexMap_".$module->id." = new YandexMap({
                        id: '" . $module_id . "',
                        centerCoord: [" . $center_lat . ", " . $center_lng . "],
                        zoom: " . $map_zoom . "});
                     });";
$script .= "
    });
";

$document->addScriptDeclaration($script);
?>
<div id="<?= $module_id ?>" class="seoclick-map <?= $moduleclass_sfx ?>"></div>
