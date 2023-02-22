import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
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
			

			<button className="button-57 mt-4"><span class="text">Add</span><span>Create Blog</span></button>
		</form>
	)
}

export default AddUserForm