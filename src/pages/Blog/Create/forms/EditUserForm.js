import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label for="inp" class="inp">
				<input placeholder="&nbsp;" type="text" name="name" id="inp" required value={user.name} onChange={handleInputChange} />
				<span className="label">Date</span>
				<span className="focus-bg"></span>
			</label>
			<label for="inp" class="inp">
				<input placeholder="&nbsp;" type="text" name="username" id="name" required value={user.username} onChange={handleInputChange} />
				<span className="label">Create Blog</span>
				<span className="focus-bg"></span>
			</label>
      <div className='flex justify-between mt-4'>
      <button className="button-57"><span class="text">Edit</span><span>Upgrade Blog</span></button>
        <button onClick={() => props.setEditing(false)} className="button muted-button">
          x
        </button>
      </div>
    </form>
  )
}

export default EditUserForm



