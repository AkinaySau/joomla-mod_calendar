<?php
/**
 * Created by PhpStorm.
 * User: sau
 * Date: 30.05.18
 * Time: 15:18
 */

use Joomla\CMS\Form\FormField;

defined( '_JEXEC' ) or die( 'Restricted access' );

// Подключение требуемых файлов
jimport( 'joomla.form.formfield' );
include __DIR__ . '/SField.php';

/**
 * @since 1.0
 */
class SText extends SField {
	protected function getInput() {
		$html = '<div class="vue-sauFieldText"></div>';

		return $html;
	}

}

class JFormFieldSText extends SText {
	protected $type = 'SText';
}