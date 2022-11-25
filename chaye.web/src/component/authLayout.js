import React from 'react'
import { Grid, Image , GridItem } from '@chakra-ui/react'
const AuthLayout = ({children}) => {
  return (
    <Grid
        h='100vh'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={0}
        overflow={"hidden"}
        >
        <GridItem rowSpan={2} colSpan={2} bg='#616084'  >
          {children}
        </GridItem>
        <GridItem rowSpan={2}  colSpan={3} bg='tomato'>
          <Image
          style={{width:"100%", height:"100%"}}
          src="https://gifimage.net/wp-content/uploads/2018/04/people-talking-animated-gif-6.gif"/>
          </GridItem>
        
        </Grid>
  )
}

export default AuthLayout