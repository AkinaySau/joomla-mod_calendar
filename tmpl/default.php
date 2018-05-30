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

// Access to module parameters
$domain = $params->get('domain', 'https://www.joomla.org');
?>

<a href="<?php echo $domain; ?>">
	<?php echo 'calendar'; ?>
</a>