import { Link } from 'react-scroll'

import { type SectionId } from '../types/types'
type Props = {
	section: SectionId
	children: React.ReactNode
	onClick: (SectionId: SectionId) => void
	activeSection: SectionId | null
}

const CustomLink = ({section, children, onClick, activeSection}:Props)=>{
  const isActive = activeSection = section
  return (
		<Link
			to={section}
			onClick={() => onClick(section)}
			className={`animate hover:text-primary-200 cursor-pointer capitalize  ${isActive ? 'text-main-30' : ''}`}
		>
			{children}
		</Link>
	)
}
export default CustomLink