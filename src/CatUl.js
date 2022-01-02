import './PhotoFixer.css';

export default function CatUl(props) {
	const {list, noun, alt, img} = props
	return (
		<section>
			<h3>Things cats {noun}:</h3>
			<ul>
				{list.map(item => <li>{item}</li>)}
			</ul>
			<figure>
				<img
					src={img}
					alt={alt}
				/>
				<figcaption>Cats <em>{noun}</em> {alt}</figcaption>
			</figure>
		</section>
	);
}
