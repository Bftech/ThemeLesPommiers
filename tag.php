<?php
get_header();
?>
			<div id="posts">

				<article class="post">
					<h2>Tag : <?php the_tag(); ?></h2>
				</article>

				<?php while (have_posts()) :
					the_post();?>

					<article class="post">

						<div class="date">
							<img src="<?php $day = get_the_time('d'); echo get_template_directory_uri();?>/img/date/<?php echo $day;?>.png" />
							<p><?php echo ucfirst(get_the_time('F'));?></p>
						</div>

						<h3><a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
						<p><?php the_excerpt();?> </p>
					</article>

				<?php endwhile;?>
			</div>
<?php
get_footer();
?>
