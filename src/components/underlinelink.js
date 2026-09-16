import * as React from 'react'
import { Link } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'

// shared styling for inline underlined links
// pass `to` for internal gatsby routes, `href` for external ones
// a `#hash` href is treated as an on-page anchor (stays in the same tab)
export default function UnderlineLink({ to, href, children, ...props }) {
    const isAnchor = href && href.startsWith('#')
    const linkProps = to ? { as: GatsbyLink, to } : { href, isExternal: !isAnchor }

    return (
        <Link {...linkProps} textDecoration="underline" _hover={{ color: "whiteAlpha.700" }} {...props}>
            {children}
        </Link>
    )
}
