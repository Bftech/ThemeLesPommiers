<?php
/* creer dans l interface d'administration du theme Secondcreationsk un zone d'accueil de widget*/
function childtheme_cat_limited_blog( $query ) {
    if ( $query->is_home() && $query->is_main_query() ) {
        $query->set( 'cat', get_cat_ID( 'ecole' ) );
    }
}
add_action( 'pre_get_posts', 'childtheme_cat_limited_blog' );

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
add_action('widgets_init','footerSidebar_add_sidebar');

function menuSec_add_menu()
{
    register_nav_menu('menuSec', 'Menu secondaire (haut)');
}
add_action('init', 'menuSec_add_menu');

function menuPri_add_menu()
{
    register_nav_menu('menuPri', 'Menu principal (gauche)');
}
add_action('init', 'menuPri_add_menu');


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

// SETTINGS
function myThemeRegisterSettings( )
{
	register_setting( 'themeLesPommiers', 'classe_grenouille' ); // couleur de fond

}
add_action( 'admin_init', 'myThemeRegisterSettings' );

function myThemeAdminMenu( )
{
	add_menu_page(
		'Options du thème Les Pommiers', // le titre de la page
		'Les Pommiers',            // le nom de la page dans le menu d'admin
		'administrator',        // le rôle d'utilisateur requis pour voir cette page
		'themeLesPommiers-option',        // un identifiant unique de la page
		'myThemeSettingsPage'   // le nom d'une fonction qui affichera la page
	);
}
add_action( 'admin_menu', 'myThemeAdminMenu' );

function myThemeSettingsPage( )
{
?>
	<div class="wrap">
		<h2>Options du thème</h2>

		<form method="post" action="options.php">
			<?php
				// cette fonction ajoute plusieurs champs cachés au formulaire
				// pour vous faciliter le travail.
				// elle prend en paramètre le nom du groupe d'options
				// que nous avons défini plus haut.

				settings_fields( 'themeLesPommiers' );
			?>
      <label for="classe_grenouille">Identifiant catégorie classe Madame Grenouille</label>
      <input type="text" id="classe_grenouille" name="classe_grenouille" value="<?php echo get_option( 'classe_grenouille' ); ?>" />

			<p class="submit">
				<input type="submit" class="button-primary" value="Mettre à jour" />
			</p>
		</form>
	</div>
<?php
}

?>
