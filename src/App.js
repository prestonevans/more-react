import logo from './logo.svg';
import Header from './Header';
import CatPhotos from './CatPhotos';
import CatList from './CatList';
import './App.css';

function App() {
	return (
		<div>
			<Header title="CatPhotoApp" />
			<main>
				<CatPhotos />
        <CatList />
			</main>
		</div>
	);
}

export default App;
