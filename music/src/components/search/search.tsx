import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

interface SearchBarProps {
	onSearch: (query: string) => void
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
	const [query, setQuery] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault() 
		if (query.trim()) {
			onSearch(query.trim())
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className='flex items-center w-full max-w-md mx-auto bg-purple-70   rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-main-10/60 animate overflow-hidden'
		>
			<div className='pl-3 text-gray-400'>
				<IoSearchSharp size={20} />
			</div>

			<input
				type='text'
				value={query}
				onChange={e => setQuery(e.target.value)}
				placeholder='Search for tracks and albums...'
				className='w-full px-3 py-2 text-gray-700 placeholder-gray-400 bg-transparent outline-none text-sm'
			/>

			<button
				type='submit'
				className='px-4 py-2 text-sm font-medium text-main-10 bg-secondary-400 hover:bg-secondary-400/60 animate'
			>
				Search
			</button>
		</form>
	)
}

export default SearchBar