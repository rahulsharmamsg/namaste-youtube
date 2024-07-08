import React, { useState } from 'react'
import Api from '../utils/AxiosApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        fullname: '',
        profile: '',
      });
      const [getFile,setFile] = useState("");
      const navigate = useNavigate();
      console.log(getFile);
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = async(e) => {
        try{
            const data = new FormData();
            data.append('username',formData.username)
            data.append('password',formData.password)
            data.append('fullname',formData.fullname)
            data.append('profile',getFile)
            const res = await Api("post","register",data,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              })
              if(res.status){
                alert("Register success please check email and verify.")
                navigate('/login')

              }else{
                alert("register Not success")
              }
           
        }catch(error){
console.log(error)
        }

      };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="email"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Full Name
          </label>
          <input
            type="test"
            id="email"
            name="fullname"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
            Profile
          </label>
          <input
            type="file"
            id="confirmPassword"
            name="profile"
            className="w-full p-3 border border-gray-300 rounded"
            onChange={(e)=>setFile(e.target.files[0] )}
            required
          />
        </div>
        <button
          type="button"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
          onClick={handleSubmit}
        >
          Register
        </button>
      </form>
    </div>
  </div>
  )
}
export default Register
