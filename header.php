<!DOCTYPE html>
<html>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Pangolin" rel="stylesheet">
    <title><?php bloginfo("name");?></title>
    <?php if(is_category('madame-grenouille') OR is_category(get_option( 'classe_grenouille'))): ?>
    <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/nouille/MmeGrenouille275x225.js"></script>
    <script>
    var canvas, stage, exportRoot;
    function init() {
    	canvas = document.getElementById("canvas");
    	handleComplete();
    }
    function handleComplete() {
    	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    	exportRoot = new lib.MmeGrenouilleV3();
    	stage = new createjs.Stage(canvas);
    	stage.addChild(exportRoot);
    	stage.enableMouseOver();
    	//Registers the "tick" event listener.
    	createjs.Ticker.setFPS(lib.properties.fps);
    	createjs.Ticker.addEventListener("tick", stage);
    	//Code to support hidpi screens and responsive scaling.
    	(function(isResp, respDim, isScale, scaleType) {
    		var lastW, lastH, lastS=1;
    		window.addEventListener('resize', resizeCanvas);
    		resizeCanvas();
    		function resizeCanvas() {
    			var w = lib.properties.width, h = lib.properties.height;
    			var iw = window.innerWidth, ih=window.innerHeight;
    			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
    			if(isResp) {
    				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
    					sRatio = lastS;
    				}
    				else if(!isScale) {
    					if(iw<w || ih<h)
    						sRatio = Math.min(xRatio, yRatio);
    				}
    				else if(scaleType==1) {
    					sRatio = Math.min(xRatio, yRatio);
    				}
    				else if(scaleType==2) {
    					sRatio = Math.max(xRatio, yRatio);
    				}
    			}
    			canvas.width = w*pRatio*sRatio;
    			canvas.height = h*pRatio*sRatio;
    			canvas.style.width = w*sRatio+'px';
    			canvas.style.height = h*sRatio+'px';
    			stage.scaleX = pRatio*sRatio;
    			stage.scaleY = pRatio*sRatio;
    			lastW = iw; lastH = ih; lastS = sRatio;
    		}
    	})(false,'both',false,1);
    }
    </script>
    <?php endif; ?>

</head>

<body onload="init();">
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

        <?php if(is_category('madame-grenouille') OR is_category(get_option( 'classe_grenouille'))): ?>

          <?php if(is_category('classe-1')): ?>
            <a href="<?php echo home_url() ?>/category/madame-grenouille">
          <?php endif; ?>

          <canvas id="canvas" width="275" height="225" style="display: block; background-color:rgba(255, 255, 255, 0)"></canvas>

          <?php if(is_category('classe-1')): ?>
            </a>
          <?php endif; ?>

        <?php endif; ?>
            </nav>
