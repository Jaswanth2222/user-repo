import React from 'react'
import { Col } from 'react-bootstrap';

const UserCard = ({ data }) => {
   
    const {owner, language, description} = data
  return (
      <Col lg={4} md={6} xs={12} className='my-3 border '>
          <div className='w-100'>
                <img className='w-100' src={owner?.avatar_url} alt="" />
            </div>
          <p className='p-0 ps-2 m-0'>{owner?.login}</p>
          <p className='p-0 m-0 ps-2'>stars</p>
          <p className='p-0 m-0 ps-2'>{description}</p>
          <p className='p-0 m-0 ps-2'>{language}</p>
      </Col>
  )
}

export default UserCard