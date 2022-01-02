import './PhotoFixer.css';

export default function CatLikes(props) {
	const {likes} = props
	return (
		<section>
			<h3>Things cats love:</h3>
			<ul>
				{likes.map(like => <li>{like}</li>)}
			</ul>
			<figure>
				<img
					src="https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
					alt="lasagna"
				/>
				<figcaption>Cats <em>love</em> lasagna</figcaption>
			</figure>
		</section>
	);
}
