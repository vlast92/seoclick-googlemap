<?php
/**
 * @package    seoclick-googlemap
 *
 * @author     user <your@email.com>
 * @copyright  A copyright
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       http://your.url.com
 */

use Joomla\CMS\Helper\ModuleHelper;

defined('_JEXEC') or die;

$document = JFactory::getDocument();

$document->addStyleSheet("/modules/mod_seoclick_googlemap/assets/css/styles.css");

JHtml::_('jquery.framework');
$document->addScript("/modules/mod_seoclick_googlemap/assets/js/map.js");
$document->addScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAtNQUb5pPkTalqxWPNdcy3f9ToAsUHo0U&callback=initMap", true, true);

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

require ModuleHelper::getLayoutPath('mod_seoclick_googlemap', $params->get('layout', 'default'));
