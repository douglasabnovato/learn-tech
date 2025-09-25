import React from "react";

export const SignIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div className="w-full min-h-screen pt-[6ch] flex items-center justify-center">
      <div className="max-w-md w-full bg-neutral-50 border border-neutral-200 shadow-sm space-y-8 rounded-xl p-8">
        <div className="space-y-1.5">
          <h1 className="text-2xl text-neutral-800 font-bold">Sign ,In</h1>
          <p className="text-sm text-neutral-600 font-normal">
            Sign In To Your Account
          </p>
        </div>
        <div className="space-y-6">
          {/** e-mail */}
          <div className="space-y-1.5">
            {/** e-mail */}
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
            {/** password */}
            <label
              htmlFor="password"
              className="text-sm text-neutral-600 font-medium block"
            >
              Password
            </label>
            <input
              type="password"
              className="w-full rounded-lg px-3 h-12 bg-transparent focus:bg-sky-500/5 outline-none ease-in-out duration-300"
              placeholder="Enter password..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
