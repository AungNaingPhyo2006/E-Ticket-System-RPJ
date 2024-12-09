import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("googleUser")) || null
  );
  // const [ user, setUser ] = useState([]);
  const [profile, setProfile] = useState([]);
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
          console.log("res===>", res);
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setUser(null); //add
    setProfile(null);
    localStorage.removeItem("googleUser");
  };

  // <=====================>
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          E-Ticket System Google Login
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
          <button onClick={login} className="btn btn-primary btn-block">
            Sign in with Google
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
