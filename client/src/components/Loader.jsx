import React from 'react';
import { Spinner, Box } from '@chakra-ui/react';

const Loader = () => (
    <Box className='mt-20'>
        <Spinner
            thickness="4px"
            w="50px"
            h="50px"
            speed="0.65s"
            emptyColor="gray"
            color="#6469ff"
            size="xl"
        />
    </Box>
);

export default Loader;