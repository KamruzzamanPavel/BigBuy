// import React, { useRef } from "react";

// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { login } from "../store/auth-actions";

// const Login = () => {
//   const dispatch = useDispatch();
//   const auth = useSelector((store) => store.auth);
//   const usernameRef = useRef();
//   const passwordRef = useRef();
//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     const username = usernameRef.current.value;
//     const password = passwordRef.current.value;
//     if (!password.trim() || !username.trim()) return;
//     dispatch(
//       login({
//         username,
//         password,
//       })
//     );
//     usernameRef.current.value = "";
//     passwordRef.current.value = "";
//   };
//   return (
//     <div className="px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover">
//       <form
//         onSubmit={formSubmitHandler}
//         action=""
//         className="border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem] rounded-md shadow-lg"
//       >
//         <h1 className="uppercase text-3xl mb-6 font-bold text-center text-gray-800">
//           Log in
//         </h1>
//         <input
//           className="p-3 mb-4 border-2 rounded focus:outline-none focus:border-red-500"
//           type="text"
//           placeholder="Username"
//           ref={usernameRef}
//         />
//         <input
//           className="p-3 mb-4 border-2 rounded focus:outline-none focus:border-green-500"
//           type="password"
//           placeholder="Password"
//           ref={passwordRef}
//         />
//         <button
//           className="mb-4 bg-teal-700 text-white p-3 rounded focus:outline-none disabled:bg-teal-500 disabled:cursor-not-allowed"
//           disabled={auth.isFetching}
//         >
//           {auth.isFetching ? "Logging in..." : "Login"}
//         </button>
//         {auth.error && (
//           <p className="text-red-600 mb-4">
//             Something went wrong. Please try later...
//           </p>
//         )}
//         <Link
//           to="/signup"
//           className="text-center capitalize underline text-blue-700"
//         >
//           Create a new account
//         </Link>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth-actions";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (!password.trim() || !username.trim()) return;
    dispatch(login({ username, password }));
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="px-4 w-full h-screen flex justify-center items-center bg-login bg-no-repeat bg-cover">
      <form
        onSubmit={formSubmitHandler}
        className="border bg-white p-6 flex flex-col min-w-[17rem] sm:min-w-[22rem] md:min-w-[25rem] rounded-md shadow-lg"
      >
        <h1 className="uppercase text-3xl mb-6 font-bold text-center text-gray-800">
          Log in
        </h1>
        <input
          className="p-3 mb-4 border-2 rounded focus:outline-none focus:border-red-500"
          type="text"
          placeholder="Username"
          ref={usernameRef}
        />
        <input
          className="p-3 mb-4 border-2 rounded focus:outline-none focus:border-green-500"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          className="mb-4 bg-teal-700 text-white p-3 rounded focus:outline-none disabled:bg-teal-500 disabled:cursor-not-allowed"
          disabled={auth.isFetching}
          type="submit"
        >
          {auth.isFetching ? "Logging in..." : "Login"}
        </button>
        {auth.error && (
          <p className="text-red-600 mb-4">
            Something went wrong. Please try later...
          </p>
        )}
        <Link
          to="/signup"
          className="text-center capitalize underline text-blue-700"
        >
          Create a new account
        </Link>
      </form>
    </div>
  );
};

export default Login;
