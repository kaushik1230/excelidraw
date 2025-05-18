"use client";

export function AuthPage({ isSignin }: { isSignin: boolean }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="p-2 m-2 bg-white rounded">
        <input type="text" placeholder="Email"></input>
        <input placeholder="Password" type="password"></input>
        <button
          onClick={() => {
            if (isSignin) {
              // Handle sign in logic
              console.log("Signing in...");
            } else {
              // Handle sign up logic
              console.log("Signing up...");
            }
          }}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>
      </div>
    </div>
  );
}
