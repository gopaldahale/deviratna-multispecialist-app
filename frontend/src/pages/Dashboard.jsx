import React from 'react'

const Dashboard = () => {

  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"))
  console.log(currentUser.role)

  return (
    <>
      hi,
      {currentUser.role === "patient" && (
        <p className="mt-4">You are logged in as Patient 👤</p>
      )}

      {currentUser.role === "doctor" && (
        <p className="mt-4">You are logged in as Doctor 👨‍⚕️</p>
      )}
    </>
  )
}

export default Dashboard