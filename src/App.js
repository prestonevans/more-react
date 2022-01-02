import logo from './logo.svg';
import Header from './Header';
import CatPhotos from './CatPhotos';
import CatList from './CatList';
import CatForm from './CatForm';
import Footer from './Footer';
import './App.css';

function App() {
	return (
		<div>
			<Header title="CatPhotoApp" />
			<main>
				<CatPhotos />
				<CatList />
				<CatForm />
			</main>
				<Footer />
		</div>
	);
}

export default App;
