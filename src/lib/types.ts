export type Categories = 'crochet' | 'tunisian crochet' | 'christmas'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
