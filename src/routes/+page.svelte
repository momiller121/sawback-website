<script lang="ts">
	import trips from '$lib/data/trips.json';
</script>

<div class="splash">
	<div class="earnturns">
		<h1>Earn<br />Your<br />Turns</h1>
		<p class="p1">Ski trips to the most<br /> amazing places on earth</p>
	</div>
</div>

<ul>
	<li>
		(The following data is pulled from the <a
			href="https://github.com/momiller121/sawback-website/tree/main/src/lib/data/trips.json"
			target="_blank">trips.json file</a
		> at build time)
	</li>
	{#each trips as trip}
		<li>
			<a href="/{trip.slug}">
				<span>{trip.id}</span>
				<span>{trip.name}:</span>
			</a>
			<span>Starting on {trip.startDate}</span>
			<span>
				({(new Date(trip.endDate).getTime() - new Date(trip.startDate)) / (1000 * 60 * 60 * 24)} days)
			</span>
			<span> [capacity: {trip.capacity}]</span>
		</li>
	{/each}
</ul>
<article>
	<p>
		Fruitcake marzipan sweet roll caramels jujubes danish fruitcake pastry. Croissant chupa chups
		carrot cake jujubes gummies I love danish. Cheesecake lollipop cheesecake biscuit shortbread.
		Chocolate cake powder tootsie roll cupcake I love pie lemon drops apple pie. Gummies I love
		chocolate bar bear claw shortbread bear claw I love cookie shortbread. Apple pie I love dessert
		cupcake brownie croissant I love sweet roll. I love chocolate bar I love sweet croissant I love
		icing cookie I love. Gummies chupa chups jelly-o topping marshmallow ice cream pie. Lollipop
		sesame snaps danish I love chocolate bar apple pie jelly beans gummies sesame snaps. Oat cake
		soufflé caramels donut I love chocolate I love danish dragée. Tiramisu bonbon pastry brownie
		jelly beans lollipop chocolate dragée. Tootsie roll donut muffin jelly chocolate cake.
	</p>
	<p>
		I love cupcake halvah candy canes jelly-o I love. Powder cheesecake wafer bonbon halvah gummi
		bears pudding bonbon. Cupcake I love chocolate cake cookie I love wafer toffee. I love danish
		chupa chups halvah fruitcake wafer cotton candy. Carrot cake oat cake croissant jelly shortbread
		tart sweet candy shortbread. I love gummies jelly carrot cake candy chocolate. Cake apple pie
		topping jelly ice cream gummi bears candy canes marzipan sweet. Jelly macaroon chocolate cake
		icing tiramisu. Croissant chocolate icing danish gingerbread donut. Sesame snaps fruitcake
		cupcake gummi bears soufflé. Chupa chups ice cream halvah cake sugar plum fruitcake. Powder I
		love marshmallow danish gingerbread chupa chups candy. Sweet roll cake I love ice cream
		gingerbread.
	</p>
	<p>
		Shortbread sweet roll dragée I love sesame snaps chocolate cake I love tiramisu shortbread. I
		love gummies I love dragée cotton candy wafer cheesecake. Macaroon marzipan chupa chups bonbon
		danish cookie. Biscuit chocolate cake jelly beans chocolate cake marzipan candy soufflé lollipop
		cotton candy. Oat cake cookie dessert jujubes cake. Lemon drops cake pudding chocolate lemon
		drops danish macaroon pudding. Sweet roll chocolate cake gummi bears marzipan sesame snaps
		danish liquorice. Powder macaroon pudding marshmallow pudding. I love pie soufflé croissant I
		love shortbread. Apple pie jujubes liquorice bear claw gummies. I love liquorice cake carrot
		cake donut cake chocolate bar sesame snaps. Cake apple pie dragée soufflé danish jelly beans
		lemon drops cake pastry.
	</p>
	<p>
		Tootsie roll candy ice cream chocolate cake marzipan gummi bears jujubes topping powder.
		Chocolate croissant muffin marzipan wafer oat cake pie apple pie cheesecake. Tart cookie sugar
		plum lollipop apple pie. Dragée sweet roll I love gingerbread chocolate bar. Soufflé cheesecake
		halvah pastry pudding. Powder bear claw candy canes danish icing sugar plum. Croissant liquorice
		gummi bears cheesecake carrot cake donut. Pie sweet roll sesame snaps sweet roll pie wafer I
		love dessert macaroon. Topping jelly beans caramels cotton candy soufflé. Bear claw I love jelly
		beans gummies chupa chups. Cotton candy sweet pudding chocolate cake fruitcake I love biscuit
		jujubes danish. Sweet roll macaroon cake icing cotton candy gingerbread I love ice cream.
	</p>
	<p>
		Macaroon dragée lemon drops croissant caramels muffin cheesecake. Dessert I love tiramisu
		chocolate bar candy tootsie roll. Marshmallow marshmallow chocolate gingerbread marzipan soufflé
		jujubes. Brownie apple pie sweet roll I love chocolate wafer chocolate cake I love. Cheesecake
		gummies apple pie tootsie roll sweet. Gummi bears I love wafer sweet cake dessert. I love
		croissant sesame snaps I love lollipop powder. Wafer marshmallow chupa chups sweet jujubes
		pudding sesame snaps. Sweet cake sugar plum I love sesame snaps. Candy macaroon cookie lollipop
		muffin. Soufflé wafer cake oat cake wafer chocolate cake bonbon bear claw bear claw. Dessert
		icing lollipop candy macaroon. Gummi bears gingerbread oat cake lollipop I love bonbon lemon
		drops bear claw icing. Bear claw lemon drops cheesecake candy sesame snaps.
	</p>
</article>

<style>
	ul {
		margin-block: var(--size-8);
	}
	h1 {
		margin-block: 0px;
		color: white;
		text-transform: uppercase;
		font-family: 'Michroma', sans-serif;
		font-size: var(--font-size-8);
	}
	article {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		flex: 1fr 1;
	}
	div {
		margin: 0px;
		padding: 0px;
	}
	div.splash .earnturns {
		position: relative;
		top: 50vh;
		padding-right: 4rem;
	}
	div.splash p {
		color: white;
		position: relative;
		text-align: right;
		max-inline-size: none;
		font-size: var(--font-size-5);
	}
	div.splash {
		max-inline-size: none;
		position: relative;
		margin-inline: 0px;
		min-height: 96vh;
		top: 0;
		left: 0;
		background-image: url(/sawback-bg.webp);
		background-position-x: right;
		background-position-y: top;
		background-repeat: no-repeat;
		background-size: cover;
	}
	div.splash h1 {
		text-align: right;
		max-inline-size: none;
	}
	@media (max-width: 900px) {
		div.splash {
			background-image: url(/sawback-bg-small.webp);
			background-position-y: bottom;
		}
		div.splash h1 {
			font-size: var(--font-size-6);
		}
		div.splash p {
			font-size: var(--font-size-3);
		}
	}
</style>
