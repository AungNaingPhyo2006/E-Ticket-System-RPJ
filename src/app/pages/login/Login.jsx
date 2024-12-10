import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("googleUser")) || null
  );
  const [profile, setProfile] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem("googleUser", JSON.stringify(codeResponse));
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle email/password login logic here
    console.log("Logging in with email and password:", email, password);
  };

  const logOut = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
    localStorage.removeItem("googleUser");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          E-Ticket System Login
        </h2>
        {profile ? (
          <div className="text-center">
            <img
              src={profile.picture}
              alt="user"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">User Logged In</h3>
            <p className="text-sm text-gray-600">Name: {profile.name}</p>
            <p className="text-sm text-gray-600">Email: {profile.email}</p>
            <button onClick={logOut} className="btn btn-error btn-block mt-4">
              Log out
            </button>
          </div>
        ) : (
          <>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block mt-4">
                Sign In
              </button>
            </form>
            <div className="flex items-center my-4">
              <div className="border-t border-gray-300 flex-grow"></div>
              <span className="px-3 text-sm text-gray-500">OR</span>
              <div className="border-t border-gray-300 flex-grow"></div>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={login}
                className="btn btn-outline btn-block mt-2 mb-2"
              >
                Sign in with Google
              </button>
              <p className="text-sm">
                Don't have an account?{" "}
                <a href="/register" className="text-blue-600 hover:underline">
                  Please Register
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
