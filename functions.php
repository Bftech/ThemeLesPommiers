<?php
/* creer dans l interface d'administration du theme Secondcreationsk un zone d'accueil de widget*/

add_action('widgets_init','footerSidebar_add_sidebar');
function footerSidebar_add_sidebar()
{
    register_sidebar(array(
        'id' => 'footer-sidebar',
        'name' => 'Footer',
        'description' => 'Apparait en bas du site',
        'before_widget' => '<div class="widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));
}

add_action('init', 'menuSec_add_menu');
function menuSec_add_menu()
{
    register_nav_menu('menuSec', 'Menu secondaire (haut)');
}

add_action('init', 'menuPri_add_menu');
function menuPri_add_menu()
{
    register_nav_menu('menuPri', 'Menu principal (gauche)');
}

function lespommiers_the_custom_logo() {

	if ( function_exists( 'the_custom_logo' ) ) {
		the_custom_logo();
	}

}

function lespommiers_setup() {

	add_theme_support( 'custom-logo', array(
		'height'      => 120,
		'width'       => 300,
		'flex-width' => true,
	) );

}
add_action( 'after_setup_theme', 'lespommiers_setup' );
?>
