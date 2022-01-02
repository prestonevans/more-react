import SubHeader from './SubHeader';
import './PhotoFixer.css';

export default function CatPhotos(props) {
	return (
		<section className="CatPhotos">
			<SubHeader title="Cat Photos" />
			<p>
				Click here to view more{' '}
				<a target="_blank" href="https://unsplash.com/s/photos/cats">
					cat photos
				</a>.
			</p>
			<a target="_blank" href="https://unsplash.com/s/photos/cats">
				<img
					src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
					alt="A cat with a butterfly on its nose"
				/>
			</a>
		</section>
	);
}
