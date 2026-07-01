import { useState } from 'react'
import hero from '../../../public/hero.svg' 
import CustomLink from './Link'
import { type SectionId, navLinks } from '../types/types'
import SearchBar from '../search/search' 
import useMediaQuery from '../hooks/useMediaQuery'
const NavBar = () => {
	const [activeSection, setActiveSection] = useState<SectionId | null>(
		navLinks[0]?.id || null,
	)

	const handleSetActive = (sectionId: SectionId) => {
		setActiveSection(sectionId)
	}
		const [isTopPage, setIsTopPage] = useState<boolean>(true)
		const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)

		const isAboveMediaScreen = useMediaQuery('(min-width: 1120px)')

		const navBarBg = isTopPage ? '' : 'bg-primary-100 drop-shadow'
const handleSearchSubmit = (searchQuery: string) => {
	console.log('Что мы ищем:', searchQuery)
}
	return (
		<nav className='bg-secondary-200 relative h-16'>
			<div className='mx-auto h-full items-center flex justify-between w-5/6'>
				<img src={hero} className='h-11' alt='Logo' />

				<div className='flex items-center justify-between w-full ml-20'>
					<div className='flex items-center gap-8 text-sm font-medium'>
						{navLinks.map(link => (
							<CustomLink
								key={link.id}
								section={link.id}
								onClick={handleSetActive}
								activeSection={activeSection}
							>
								{link.label}
							</CustomLink>
						))}
					</div>
					<div className=''>
						<SearchBar onSearch={handleSearchSubmit} />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
