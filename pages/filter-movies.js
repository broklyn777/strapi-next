import { Flex, Box } from 'reflexbox'


const FilterMovies = ({ movies}) => {


    return (
        <>
            <Box variant="container">
                <Box as="h2" my={40}>Filter movies</Box>
    
                <Flex mb={100}>
                    <Box width={200} mr={20}>

                        filters go here
                       
                    </Box>


                    <Box>
                   {movies.map(movie => (
                            <Box key={movie.id} p={10}>
                                <strong>{movie.title}</strong> - {movie.genre ? movie.genre.title : null}<br />

                                {movie.actors.length > 0 && movie.actors.map(actors => (
                                    <small key={actors.id}>{actors.first_name} {actors.last_name} &nbsp;</small>
                                ))}

                            </Box>
                        ))}
                    </Box>
                    
                </Flex>
            </Box>
        </>
    )
}


export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/movies`)
    const data = await res.json()



    return {
        props: {
            movies: data,
          
        },
    }
}

export default FilterMovies





