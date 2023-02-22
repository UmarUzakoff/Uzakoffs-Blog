import React from 'react'
import edit from '../../images/edit.gif'
import trash from "../../images/delete.gif"
import { Link } from 'react-router-dom'

const UserTable = props => (
  <>
    {/* <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead> */}

          {/* <ul className='list-wrapper'>
            <li>
              <Link to={'https://www.instagram.com/uzakoff_u/'} target="blank"  className='list-item'>
                  <div className='date'>01 August, 2022</div>
                  <div className='title'>Amazon'dan Offer Oldim</div>
              </Link>
            </li>
          </ul> */}
      {props.users.length > 0 ? (
        props.users.map(user => (
          <div id='archive' className='col-md-7'>
            <ul className='list-wrapper' key={user.id}>
              <li>
                <Link to={'https://www.instagram.com/uzakoff_u/'} target="blank"  className='list-item'>
                  <div className='date'>{user.name}</div>
                  <div className='title'>{user.username}</div>
                </Link>
                  <span className='buttons'>
                    <button
                      onClick={() => {
                        props.editRow(user)
                      }}
                      className="button muted-button"
                    >
                      <img src={edit} alt="edit"></img>
                    </button>
                    <button
                      onClick={() => props.deleteUser(user.id)}
                      className="button muted-button"
                    >
                      <img src={trash} alt="delete"></img>
                    </button>
                  </span>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <h5 className='text-center py-10'>
          No Users...
        </h5>
      )}
      <h4 className='sticky'>2021</h4>
      <h4>November</h4>
    </>
)

export default UserTable
