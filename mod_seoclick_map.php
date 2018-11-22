<?php
/**
 * @package    seoclick-googlemap
 *
 * @author     Vlast <vlasteg@mail.ru>
 * @copyright  A copyright
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       https://seoclick.by
 */

use Joomla\CMS\Helper\ModuleHelper;

defined('_JEXEC') or die;

$document = JFactory::getDocument();
$module_path = "/modules/mod_seoclick_map";

$document->addStyleSheet("$module_path/assets/css/styles.min.css?v=".filemtime(__DIR__."/assets/css/styles.min.css"));
JHtml::_('jquery.framework');

$document->addScript("$module_path/assets/js/google.min.js?v=".filemtime(__DIR__."/assets/js/google.min.js"));

$key = $params->get("google_key");
$map_height = $params -> get("map_height", 500);
$map_zoom = $params -> get("map_zoom", 15);
$marker_image = $params -> get("marker_image", false);
$info_window = $params -> get("info_window");
$center_lat = $params -> get("lat");
$center_lng = $params -> get("lng");
$map_controls = array(
	"custom" => $params -> get("custom_control"),
	"zoom" => $params -> get("zoom_control"),
	"mapType" => $params -> get("mapType_control"),
	"streetView" => $params -> get("streetView_control"),
	"fullscreen" => $params -> get("fullscreen_control")
);
$places = json_decode(json_encode($params -> get("markers", false)), true);

$document->addScript("https://maps.googleapis.com/maps/api/js?key=$key", true, true);

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

require ModuleHelper::getLayoutPath('mod_seoclick_map', $params->get('layout', 'default'));
