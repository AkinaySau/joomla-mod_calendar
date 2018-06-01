<?php
/**
 * Created by PhpStorm.
 * User: sau
 * Date: 30.05.18
 * Time: 15:18
 */

defined( '_JEXEC' ) or die( 'Restricted access' );

jimport( 'joomla.form.formfield' );
include __DIR__ . '/SField.php';

/**
 * @since 1.0
 */
class SCalendarList extends SField {
	protected function getInput() {
		$value = $this->value;
		$html  = sprintf( '<div class="vue-sauFieldSCalendarList" data-value=\'%1$s\' data-name="%2$s"></div>', $value, $this->name );

		return $html;
	}

}

class JFormFieldSCalendarList extends SCalendarList {
	protected $type = 'SCalendarList';
}