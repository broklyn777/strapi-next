// import Header from 'components/Header'
// import { ThemeProvider } from 'emotion-theming'
// import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
// import theme from '../theme/theme.js'
// import getConfig from 'next/config'
// import fetch from 'isomorphic-unfetch'

// function MyApp({ Component, pageProps }) {
//     return (
//         <>
//             <ThemeProvider theme={theme}>
//                 <GlobalStyles />
//                 <Header />
//                 <Component {...pageProps} />
//             </ThemeProvider>
//         </>
//     )
// }

// export default MyApp

import Header from 'components/Header'
import { ThemeProvider } from 'emotion-theming'
import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import { DefaultSeo } from 'next-seo'
import ContextWrapper from 'components/ContextWrapper'
// import { appWithTranslation } from '../i18n'
// import Router from 'next/router'
// import { parseCookies  } from 'nookies'
import {QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()


import SEO from '../next-seo.config'

function MyApp({ Component, pageProps, navigation }) {
    console.log(navigation)

    return (
        <>
         <DefaultSeo {...SEO} />
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                 <ContextWrapper navigation={navigation}>
                    <Header />
                </ContextWrapper>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </ThemeProvider>
        </>
      
    )
}

const { publicRuntimeConfig } = getConfig()

MyApp.getInitialProps = async () => {
    const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
    const navigation = await res.json()

    return { navigation }
}

export default MyApp





// // import Header from 'components/Header'
// // import { ThemeProvider } from 'emotion-theming'
// // import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
// // import theme from '../theme/theme.js'
// // import getConfig from 'next/config'
// // import fetch from 'isomorphic-unfetch'

// // function MyApp({ Component, pageProps }) {
// //     return (
// //         <>
// //             <ThemeProvider theme={theme}>
// //                 <GlobalStyles />
// //                 <Header />
// //                 <Component {...pageProps} />
// //             </ThemeProvider>
// //         </>
// //     )
// // }

// // export default MyApp

// import Header from 'components/Header'
// import { ThemeProvider } from 'emotion-theming'
// import GlobalStyles from 'components/GlobalStyles/GlobalStyles'
// import theme from '../theme/theme.js'
// import getConfig from 'next/config'
// import fetch from 'isomorphic-unfetch'
// import { DefaultSeo } from 'next-seo'
// import SEO from '../next-seo.config'
// import ContextWrapper from 'components/ContextWrapper'
// // import { appWithTranslation } from '../i18n'
// // import Router from 'next/router'
// // import { parseCookies  } from 'nookies'
// // import {QueryClientProvider, QueryClient } from 'react-query'

// function MyApp({ Component, pageProps, navigation }) {
//     console.log(navigation)

//     return (
//         <>
//          <DefaultSeo {...SEO} />
//             <ThemeProvider theme={theme}>
//                 <GlobalStyles />
//                  <ContextWrapper navigation={navigation}>
//                     <Header />
//                 </ContextWrapper>
//                 <Component {...pageProps} />
//             </ThemeProvider>
//             {/* <DefaultSeo {...SEO} />
//             <ThemeProvider theme={theme}>
//                 <GlobalStyles />
//                 <ContextWrapper navigation={navigation}>
//                     <Header />
//                 </ContextWrapper>
//                 <QueryClientProvider client={queryClient}>
//                     <Component {...pageProps} />
//                 </QueryClientProvider>
//             </ThemeProvider> */}
//         </>
//     )
// }

// const { publicRuntimeConfig } = getConfig()

// MyApp.getInitialProps = async () => {
//     const res = await fetch(`${publicRuntimeConfig.API_URL}/navigations`)
//     const navigation = await res.json()

//     return { navigation }
// }

// export default MyApp
