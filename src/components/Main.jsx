import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    /*
    Player List 클릭 시, List 컴포넌트로 이동
    => <Link> 이용
    */
  return (
    <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
    }}>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7IHNxPYQ6SPINDqPK3xDmMa4uBboRDTZYRWNjtd9z2Y8CCBrW0v4gyZqeESUMq-Jr9OM&usqp=CAU'/>
       <br />
       <Link to='/list' 
             style={{
                     fontSize: '1.5em',
                     textDecoration: 'none',
                     color: 'black',
                     backgroundColor: 'lightblue',
                     padding: '20px 30px',
                     borderRadius: '20px'
       }}>
        Player List
        </Link> 
    </div>
  )
}

export default Main