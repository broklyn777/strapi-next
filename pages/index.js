import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import { Flex, Box } from 'reflexbox'
import Image from 'next/image'
import propTypes from 'prop-types'
/// ******** OBS t  --- kan saknas
const Home = ({ movies, t }) => {
    console.log(movies)

    return (
        <Box variant="container">
            <Image src="/images/chewy.jpg" width={2400} height={1600} />
            <Box my={40} as="h2">{('Latest Movies')}</Box>
            <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row" }} mb={100} flexWrap="wrap">
                {movies.map(movie => (
                    <Box key={movie.id} width={{ _: "100%", md: "30%" }}>
                        <Card movie={movie} />
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

Home.propTypes = {
    t: propTypes.func.isRequired,
    movies: propTypes.array.isRequired,
}

//  const Home = ({ movies, t }) => {
 

//     return (
//         <Box variant="container">
//             <Image src="/images/chewy.jpg" width={2400} height={1600} />
//             <Box my={40} as="h2">Latest Movies</Box>
//             <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row" }} mb={100} flexWrap="wrap">
//                 {movies.map(movie => (
//                     <Box key={movie.id} width={{ _: "100%", md: "30%" }}>
//                         <Card movie={movie} />
//                     </Box>
//                 ))}
//             </Flex>
//         </Box>
//     )
// }

// Home.propTypes = {
//     t: propTypes.func.isRequired,
//     movies: propTypes.array.isRequired,
// }

export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/movies`)
    const data = await res.json()

    return {
        props: {
            movies: data
        }
    }
}

export default Home






// import fetch from 'isomorphic-unfetch'
// import Card from 'components/Card'
// import { Flex, Box } from 'reflexbox'

// const Home = ({ movies }) => {
//     console.log(movies)

//     return (
// flexDirection={{ _: "column", md: "row" }} {{ _: "100%", md: "30%" }}
        
//         <Box variant="container">
          
//             <Box my={40} as="h2">Latest Movies</Box>
//             <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row" }} mb={100} flexWrap="wrap">
//                 {movies.map(movie => (
//                     <Box key={movie.id} width="30%">
//                         <Card movie={movie} />
//                     </Box>
//                 ))}
//             </Flex>
//         </Box>
   
//         <Box variant="container">
//             <Image src="/images/chewy.jpg" width={2400} height={1600} />
//             <Box my={40} as="h2">{t('Latest Movies')}</Box>
//             <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row" }} mb={100} flexWrap="wrap">
//                 {movies.map(movie => (
//                     <Box key={movie.id} width={{ _: "100%", md: "30%" }}>
//                         <Card movie={movie} />
//                     </Box>
//                 ))}
//             </Flex>
//         </Box>


//         <Box variant="container" bg={["red", "green", "blue", "black"]}  >
           
//             <h2>Latest Movies</h2>
         
//             {movies.map(movie => (
//                 <Card key={movie.id} movie={movie} />
//             ))}
//             </Box>
      
//     )
// }

// export async function getServerSideProps() {
//     const { API_URL } = process.env

//     const res = await fetch(`${API_URL}/movies`)
//     const data = await res.json()

//     return {
//         props: {
//             movies: data
//         }
//     }
// }

// export default Home
