<?php
/**
 * @package    calendar
 *
 * @author     sau <akinaysau@gmail.com>
 * @copyright  A copyright
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       http://a-sau.ru
 */

defined('_JEXEC') or die;

$calendar= $params->get('calendar-list', '[]');
?>
<div class="resources-blog__item">
	<h5 class="resources-blog__item-title">Календарь событий</h5>
	<div class="calendar-blog">
		<div class="calendar-blog__date js-calendar-date" data-json='<?php echo $calendar; ?>'></div>
		<div class="calendar-blog__output js-calendar-output"></div>
	</div>
</div>