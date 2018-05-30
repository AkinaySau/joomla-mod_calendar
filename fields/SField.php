<?php
/**
 * Created by PhpStorm.
 * User: sau
 * Date: 30.05.18
 * Time: 16:13
 */

use Joomla\CMS\Factory;
use Joomla\CMS\Form\FormField;
use Joomla\CMS\Uri\Uri;

/**
 * Class SField
 * @since 1.0
 */
class SField extends FormField {

	public function __construct( $form = null ) {
		parent::__construct( $form );
		$path_to_module = Uri::root() . DS . 'modules' . DS . 'mod_calendar' . DS;
		$doc            = Factory::getDocument();
		$doc->addScript( $path_to_module . 'assets' . DS . 'build.js', [] );
	}
}