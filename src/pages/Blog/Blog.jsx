import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Blog.scss'
import UserTable from './Create/tables/UserTable';
import AddUserForm from './Create/forms/AddUserForm';
import EditUserForm from './Create/forms/EditUserForm';

const Blog = () => {

  const usersData = [
		{ id: 1, name: '01 August, 2022', username: "Amazon'dan Offer Oldim" },
		{ id: 2, name: '09 April, 2022', username: "100ta Intervyu Nimani O'rgatdi?" },
		{ id: 3, name: '30 November, 2021', username: "Bloomberg'dan Offer Oldim" },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

  return (
    <section className='Blog container'>
      
      <div className='title'>
          <h2>Blog</h2>
      </div>

      <article>
        <div id='archive' className='col-md-7'>
          <h4 className='sticky'>2022</h4>
          <h4>August</h4>
          {/* <ul className='list-wrapper'>
            <li>
              <Link to={'https://www.instagram.com/uzakoff_u/'} target="blank"  className='list-item'>
                  <div className='date'>01 August, 2022</div>
                  <div className='title'>Amazon'dan Offer Oldim</div>
              </Link>
            </li>
          </ul>
          <h4>April</h4>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://www.instagram.com/uzakoff_u/'} target="blank" className='list-item'>
                  <div className='date'>09 April, 2022</div>
                  <div className='title'>100ta Intervyu Nimani O'rgatdi?</div>
              </Link>
            </li>
          </ul>
          <h4 className='sticky'>2021</h4>
          <h4>November</h4>
          <ul className='list-wrapper'>
            <li>
              <Link to={'https://www.instagram.com/uzakoff_u/'} target="blank" className='list-item'>
                  <div className='date'>30 November, 2021</div>
                  <div className='title'>Bloomberg'dan Offer Oldim</div>
              </Link>
            </li>
            <li>
              <Link to={'https://www.instagram.com/uzakoff_u/'} target="blank" className='list-item'>
                  <div className='date'>01 November, 2021</div>
                  <div className='title'>Facebook'dan Offer Oldim</div>
              </Link>
            </li>
          </ul>
          <h4>June</h4>
          <ul className='list-wrapper'>
            <li>
              <Link className='list-item'>
                  <div className='date'>30 June, 2021</div>
                  <div className='title'>Yandex'ga Topshirish Haqida</div>
              </Link>
            </li>
            <li>
              <Link to={'https://www.instagram.com/uzakoff_u/'} target="blank" className='list-item'>
                  <div className='date'>26 June, 2021</div>
                  <div className='titl'>Toptal'ga Topshirish Haqida</div>
              </Link>
            </li>
          </ul> */}
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        
        <div className='sticky col-md-4'>
            <h6>NEWSLETTER</h6>
            <p>Subscribe to <Link to={'https://t.me/Uzakoff_u'} className="tg">@lazyprogrammer</Link> telegram channel where I share my new courses, articles, talks and more.</p>
            {/* <div classname="flex mx-auto items-center justify-center shadow-lg mt-54 mb-4 max-w-lg">
              <div classname="flex flex-wrap -mx-3 mb-6">
              <form classname="w-full max-w-xl bg-black rounded-lg px-4 pt-2">
                      <h2 classname="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                      <div classname="w-full md:w-full px-3 mb-2 mt-2">
                          <textarea onChange={change} value={val} classname="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white" name="body" placeholder='Type Your Comment' required></textarea>
                      </div>
                      <div classname="w-full flex items-start md:w-full px-3">
                          <div classname="-mr-1">
                              <button onClick={click} className="button-55">Post</button>
                          </div>
                      </div>
                  </form>
              </div>
              <div className='poster'>
                  <p id='result' value={val}></p>
              </div>
            </div> */}
            {editing ? (
						<>
							<h2 className='mb-4 text-center font-extrabold text-xl opacity-90'>Edit Blog</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</>
					) : (
						<>
							<h2 className='mb-4 text-center font-extrabold text-xl opacity-90 fancy'>Add BLOG</h2>
							<AddUserForm addUser={addUser} />
						</>
					)}
        </div>
      </article>

    </section>
  )
}

export default Blog