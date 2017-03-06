<!DOCTYPE html>
<html>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Pangolin" rel="stylesheet">
    <title><?php bloginfo("name");?></title>
</head>

<body>
    <div id="main">
        <div id="ban">


        <header>
            <!-- <h1>Ecole Primaire ** </h1>
            <h2>Les Pommiers ** </h2> -->
            <?php lespommiers_the_custom_logo() ?>
        </header>

        <nav id="menu-sec">
			<?php wp_nav_menu(array('theme_location' => 'menuSec'));?>
        </nav>

        </div>
		<div id="content">
            <nav id="menu-pri">
				<?php wp_nav_menu(array('theme_location' => 'menuPri'));?>
            </nav>
