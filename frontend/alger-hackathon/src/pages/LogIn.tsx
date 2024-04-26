import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

export default function LogIn() {
  const { login } = useContext(AuthContext);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    
    try {
      const accessToken = await login(username, password);
      console.log("Login result:", accessToken);
      
    } catch (error) {
      // Handle errors if any
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      <div className="flex min-h-[100vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={Logo}
            alt="CollaborativeTG"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User name
              </label>
              <div className="mt-2">
                <input
                  id="userName"
                  name="userName"
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="user name"
                  autoComplete="user name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/reset-password"
                    className="font-semibold text-bluenormal hover:text-bluelight"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                
                onClick={handleLogin}
                className="flex w-full justify-center rounded-md bg-bluenormal px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-bluelight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/signup"
              className="font-semibold leading-6 text-bluenormal hover:text-bluelight"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
