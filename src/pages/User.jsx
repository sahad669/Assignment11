import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const User = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        setUsers(response.data); 
        setLoading(false)
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false)
        
      }
      
    };

  useEffect(() => {
    getUsers();
  }, []);

 if (loading) return <div className="text-center mt-10 text-xl font-semibold">Loading...</div>;

  return (
   <div className="min-h-screen bg-[#dce3ea] flex flex-col items-center justify-center px-4 py-10">
  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#334155]">
    User Details
  </h2>

  <div className="w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6 bg-[#2e455c] transition-shadow hover:shadow-2xl">
    <div className="space-y-4">
      <h3 className="text-xl md:text-2xl font-semibold text-white">Name: {users.name}</h3>
      <p className="text-base md:text-lg text-white"><strong>Email:</strong> {users.email}</p>
      <p className="text-base md:text-lg text-white"><strong>Phone:</strong> {users.phone}</p>
    </div>

    <Link to={`/userdetails/${users.id}`}>
      <button className="bg-blue-600 text-white text-sm md:text-base font-medium px-5 py-3 rounded hover:bg-blue-700 transition w-full">
        View Details
      </button>
    </Link>
  </div>
</div>



  );
};

export default User;

