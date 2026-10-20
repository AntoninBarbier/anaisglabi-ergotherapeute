import type { RichTextField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import { PrismicRichText, type JSXMapSerializer } from '@prismicio/react'

const components: JSXMapSerializer = {
	hyperlink: ({ node, children }) => (
		<PrismicNextLink field={node.data} className='underline'>
			{children}
		</PrismicNextLink>
	),
}

// Paragraphs without their <p>, for rich text rendered inside a heading or a paragraph
const inlineComponents: JSXMapSerializer = {
	...components,
	paragraph: ({ children }) => <>{children}</>,
}

type RichTextProps = {
	field: RichTextField
	className?: string
}

// Paragraphs are spaced by one line, like the former <br /><br /> separators
const RichText = ({ field, className = '' }: RichTextProps) => (
	<div className={`flex flex-col gap-[1lh] ${className}`}>
		<PrismicRichText field={field} components={components} />
	</div>
)

export const InlineRichText = ({ field }: { field: RichTextField }) => <PrismicRichText field={field} components={inlineComponents} />

export default RichText
