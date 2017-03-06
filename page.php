<?php
get_header();
?>
			<div id="posts">
				<?php while (have_posts()) : 
					the_post();?>
					<article class="post">
						<h3><?php the_title();?></h3>
						<p><?php the_content();?> </p>
					</article>
				<?php endwhile;?>
			</div>
<?php
get_footer();
?>