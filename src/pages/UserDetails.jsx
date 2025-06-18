import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching user:", error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getUsers();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-xl font-semibold">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#dce3ea] flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-8 space-y-6 bg-white transition-shadow hover:shadow-2xl">
        <h3 className="text-xl md:text-2xl font-semibold text-[#334155]">{user.name}</h3>
        <p className="text-base md:text-lg text-[#334155]">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-base md:text-lg text-[#334155]">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-base md:text-lg text-[#334155]">
              <strong>Username:</strong> {user.username}
        </p>
        <div>
           <p className="text-base md:text-lg text-[#334155]">
              <strong>Website:</strong> {user.website}
        </p>
         <p className="text-base md:text-lg text-[#334155]">
              <strong>Company Name:</strong> {user.company?.name}
        </p>
        </div>
        <Link to="/user">
          <button className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-blue-700 transition">
            back to users
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserDetails;
