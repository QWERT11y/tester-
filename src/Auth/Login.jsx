import React, { useEffect, useState } from "react";
import ErorModal from "./ErorModal";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error , setError] = useState(false)
  const navigate = useNavigate()

  const submit = (e) => {
    console.log(email, password);
    e.preventDefault();
    const findUser = users.find(
      (user) => user.email == email && user.password == password
    );
    if(!findUser){
      return setError(true)
    }
    return navigate("/home")
  };
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://fakestoreapi.com/users");
      const data = await res.json();
      setUsers(data);
      console.log(data);
      
    };
    fetchUsers();
  }, []);


  return (
    <div className="bg-gray-950">
    {error && <ErorModal setError={setError} /> }
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-medium text-slate-700">Login</h2>
          <p className="text-slate-500">Enter details below.</p>
        </div>
        <form className="w-full mt-4 space-y-3" onSubmit={submit}>
          <div>
            <input
              className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="email"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              className="outline-none border-2 rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="mr-2 w-4 h-4"
                id="remember"
                name="remember"
                type="checkbox"
              />
              <span className="text-slate-500">Remember me </span>
            </div>
            <a className="text-blue-500 font-medium hover:underline" href="#">
              Forgot Password
            </a>
          </div>
          <button
            className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2"
            id="login"
            name="login"
            type="submit"
          >
            login
          </button>
          <p className="flex justify-center space-x-1">
            <span className="text-slate-700"> Have an account? </span>
            <a className="text-blue-500 hover:underline" href="#">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
