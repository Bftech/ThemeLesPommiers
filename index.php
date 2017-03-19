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

							<h3><a href="<?php the_permalink();?>"><?php the_title();?></a></h3>
							<p><?php the_excerpt();?> </p>
							<a class="readMore" href="<?php the_permalink();?>">Lire la suite...</a>
						</article>

				<?php endwhile;?>
				<div id="pagination">
					<div class="pagi pagi-previous"><?php next_posts_link( '<<< Anciens articles' ); ?></div>
					<div class="pagi pagi-next"><?php previous_posts_link( 'Articles Récents >>>' ); ?></div>
				</div>
			</div>
<?php
get_footer();
?>
