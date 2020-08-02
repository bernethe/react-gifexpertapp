import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['The Simpsons']);

	// const handleAdd = () => {
	// 	// setCategories( categories.push('HunterXHunter') );
	// 	setCategories( [...categories ,'HunterXHunter'] );
	// 	// console.log(categories);
	// }

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{
					categories.map( category => {
						return (<GifGrid key={category} category={category} />);
					} )
				}
			</ol>
		</>
	)
}

export default GifExpertApp;