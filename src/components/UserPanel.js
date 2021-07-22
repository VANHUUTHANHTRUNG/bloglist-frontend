const UserPanel = ({ username, handleLogout }) => {
  return (
    <div>
      <h2>User</h2>
      <p> Current user : {username}</p>
      <button type='button' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default UserPanel
