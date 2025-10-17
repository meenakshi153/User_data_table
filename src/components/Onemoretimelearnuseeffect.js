import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Onemoretimelearnuseeffect = () => {

  const[users, setUsers] = useState([])
  const[search, Setsearch] = useState('')
  

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=> res.json())
    .then((data) => setUsers(data))
    .catch((err)=> console.log("Error of loading data"));
  }, [])

  const filtersearch = users.filter((user)=> {
    const filterusers = search.toLowerCase();
    return(
      user.name.toLowerCase().includes(filterusers) ||
      user.email.toLowerCase().includes(filterusers) ||
      user.address.city.toLowerCase().includes(filterusers)||
      user.phone.toString().includes(filterusers)
      
    )
  })



  return (
    <div>
      <h1>Users data</h1>


      <input
      placeholder='Search Here'
      value={search}
      onChange={(e)=> Setsearch(e.target.value)}
      className='border border-gray-500  p-2 rounded mb-4 w-full'
      />

      {/* table is here */}
       {/* 🧾 Scrollable table container */}
      <div className="max-h-64 overflow-y-auto border border-gray-300 rounded-lg shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-slate-700 text-white sticky top-0">
            <tr>
              <th className="py-2 px-4 border border-gray-300">ID</th>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Email</th>
              <th className="py-2 px-4 border border-gray-300">Phone</th>
              <th className="py-2 px-4 border border-gray-300">City</th>
            </tr>
          </thead>

          <tbody>
            {filtersearch.length > 0 ? (
              filtersearch.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100 text-center">
                  <td className="py-2 px-4 border border-gray-300">{user.id}</td>
                  <td className="py-2 px-4 border border-gray-300">{user.name}</td>
                  <td className="py-2 px-4 border border-gray-300">{user.email}</td>
                  <td className="py-2 px-4 border border-gray-300">{user.phone}</td>
                  <td className="py-2 px-4 border border-gray-300">
                    {user.address.city}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-4 text-gray-600 italic"
                >
                  {users.length === 0 ? "Loading users..." : "No users found"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>


      
      <button className="text-lg text-white p-5 bg-black"><Link to="/onemoretime">Go to Todo Page</Link>  </button>


    </div>
  )
}

export default Onemoretimelearnuseeffect