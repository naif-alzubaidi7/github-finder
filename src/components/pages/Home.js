import React,{Fragment} from 'react'
import Users from '../users/Users'
import Search from '../users/Search'

export const Home = () => {
    return (
        <Fragment>
        <Search  
       
        ></Search>
        <div className='container'>
        <Users  ></Users>
      
        </div>
        </Fragment>
    )
}

export default Home
