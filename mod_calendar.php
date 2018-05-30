<?php
/**
 * @package    calendar
 *
 * @author     sau <akinaysau@gmail.com>
 * @copyright  A copyright
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       http://a-sau.ru
 */

use Joomla\CMS\Helper\ModuleHelper;

defined( '_JEXEC' ) or die;

JHtml::stylesheet( 'mod_languages/template.css', array( 'version' => 'auto', 'relative' => true ) );
JHtml::script( 'mod_calendar/assets/build.js', array( 'version' => 'auto', 'relative' => true ) );


$moduleclass_sfx = htmlspecialchars( $params->get( 'moduleclass_sfx' ) );

require ModuleHelper::getLayoutPath( 'mod_calendar', $params->get( 'layout', 'default' ) );
