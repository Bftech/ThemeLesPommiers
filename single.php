<?php
get_header();
?>
<div id="posts">
	<?php while (have_posts()) :
		the_post();?>

		<article class="post">

			<div class="date">
				<img src="<?php $day = get_the_time('d'); echo get_template_directory_uri();?>/img/date/<?php echo $day;?>.png" />
				<p><?php echo ucfirst(get_the_time('F'));?></p>
			</div>

			<h3><?php the_title();?></h3>
			<p><?php the_content();?> </p>
			<span>Categorie : <?php the_category(); ?></span>
		</article>

	<?php endwhile;?>
</div>
<?php
get_footer();
?>
