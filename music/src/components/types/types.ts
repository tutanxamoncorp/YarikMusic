import type { JSX } from 'react'

export type SectionId = 'home' | 'library' | 'genres' | 'playlists'

export const navLinks: { id: SectionId; label: string }[] = [
	{ id: 'home', label: 'Home' },
	{ id: 'library', label: 'Library' },
	{ id: 'genres', label: 'Genres' },
	{ id: 'playlists', label: 'Playlists' },
]

export type BenefitType = {
	icon?: JSX.Element
	title: string
	description: string
}
export type ClassType = {
	title: string
	description?: string
	image: string
}