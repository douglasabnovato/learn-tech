import React from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div className="w-full min-h-screen pt-[6ch] flex items-center justify-center">
      <div className="max-w-md w-full bg-neutral-50 border border-neutral-200 shadow-sm space-y-8 rounded-xl p-8">
        <div className="space-y-1.5">
          <h1 className="text-2xl text-neutral-800 font-bold">Sign In</h1>
          <p className="text-sm text-neutral-600 font-normal">
            Sign In To Your Account
          </p>
        </div>
        <div className="space-y-6">
          {/** e-mail */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="text-sm text-neutral-600 font-medium block"
            >
              E-mail Address
            </label>
            <input
              type="email"
              className="w-full rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 outline-none ease-in-out duration-300"
              placeholder="Enter email address..."
            />
          </div>
          {/** password */}
          <div className="space-y-1.5">
            <label
              htmlFor="password"
              className="text-sm text-neutral-600 font-medium block"
            >
              Password
            </label>
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 outline-none ease-in-out duration-300"
                placeholder="Enter password..."
              />
              <button
                className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                onClick={toggleShowPassword}
              >
                {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
              </button>
            </div>
          </div>
          {/** remember */}
          <div className="flex items-center justify-between gap-2 !-mt-3 w-full px">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberme"
                id="rememberme"
                className="w-4 h-4"
              />
              <label
                htmlFor="rememberme"
                className="text-sm text-neutral-600 font-medium"
              >
                Remember Me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-neutral-600 font-medium hover:text-neutral-800 ease-in-out"
            >
              Forgot password
            </Link>
          </div>
          {/** sign in btn */}
          <button className="w-full rounded-lg h-12 px-8 cursor-pointer bg-neutral-800 text-neutral-50">
            Sign In
          </button>
          {/** or */}
          <div className="w-full flex items-center justify-center">
            <div className="w-full border border-neutral-200"></div>
            <span className="text-sm px-2 text-neutral-700 font-medium whitespace-nowrap">
              OR SIGN IN WITH
            </span>
            <div className="w-full border border-neutral-200"></div>
          </div>
          {/** Social Auth */}
          <div className="w-full flex items-center gap-6">
            <button className="w-full rounded-lg py-2 px-4 bg-transparent hover:bg-neutral-100 cursor-pointer border border-neutral-300 text-neutral-700 flex items-center jsutify-center gap-x-2 ease-in-out duration-300-center">
              <FaGoogle size={16} /> Google
            </button>
            <button className="w-full rounded-lg py-2 px-4 bg-transparent hover:bg-neutral-100 cursor-pointer border border-neutral-300 text-neutral-700 flex items-center jsutify-center gap-x-2 ease-in-out duration-300-center">
              <FaGithub size={16} /> Github
            </button>
          </div>
          {/** Don't have an account */}
        </div>
      </div>
    </div>
  );
};
