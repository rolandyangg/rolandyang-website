import { extendTheme } from "@chakra-ui/react"

const breakpoints = {
	ssm: '27em', // small minus
	sm: '30em',
	mmd: '44em', // medium minus
	md: '48em',
	mdd: '52em', // medium plus
	lg: '62em',
	lgg: '68em', // large plus
	xl: '80em',
	'2xl': '96em',
  }

const theme = extendTheme({
  breakpoints,
  initialColorMode: 'dark',
  useSystemColorMode: false,
  colors: {
		secondary: "#171a23",
		primary: "#ffffff",
	},
	styles: {
		global: () => ({
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "white",
				backgroundColor: "secondary",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "primary",
				borderRadius: "50px",
			},
		}),
	},
})

export default theme;