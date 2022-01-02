export default function CatForm() {
	return (
		<section>
			<h2>Cat Form</h2>
			<form action="https://freecatphotoapp.com/submit-cat-photo">
				<fieldset>
					<legend>Is your cat an indoor or outdoor cat?</legend>
					<label>
						<input checked name="indoor-outdoor" type="radio" id="indoor" value="indoor" /> Indoor
					</label>
					<label>
						<input name="indoor-outdoor" type="radio" id="outdoor" value="outdoor" /> Outdoor
					</label>
				</fieldset>
				<fieldset>
					<legend>What's your cat's personality?</legend>
					<input checked type="checkbox" name="personality" id="loving" value='loving' /> <label for="loving">Loving</label>
					<input type="checkbox" name="personality" id="lazy" value='lazy' /> <label for="lazy">Lazy</label>
					<input type="checkbox" name="personality" id="energetic" value='energetic' /> <label for="energetic">Energetic</label>
				</fieldset>
				<input type="text" name="catphotourl" id="" placeholder="cat photo URL" required />
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}
