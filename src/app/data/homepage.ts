import { cache } from 'react'
import { createClient } from '@/prismicio'

// The single "homepage" Prismic document holds every text, picture and price of the site.
// cache() dedupes the request between generateMetadata, the page and the share image.
export const getHomepage = cache(() => createClient().getSingle('homepage'))
