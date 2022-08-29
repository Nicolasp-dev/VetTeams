// Next Feature
import Link from "next/link";
import { useRouter } from "next/router";
// React Features
import { useContext, useState } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
// Third Party Library ( Hook-Form )
import { useForm } from "react-hook-form";
// Components
import ErrorFormMsg from "../ErrorFormMsg/ErrorFormMsg";
import { useAuth } from "../../contexts/AuthCtx";
import { sign } from "crypto";
import Cookies from "js-cookie";

// ------------------------------------------------------------

const LoginForm = () => {
  const [isLoginIn, setIsLoginIn] = useState(true);
  const [error, setError] = useState(null);
  const { logUser } = useContext(GeneralContext);
  const { push } = useRouter();

  const { login, signup, currentUser } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (values) => {
    const { email, password } = values;

    if (isLoginIn) {
      try {
        await login(email, password);
        const { accessToken: token } = currentUser;

        if (token) {
          Cookies.set("token", token);
          push("/welcome");
        }
      } catch (error) {
        setError("* Invalid email / password");
      }
    } else {
      await signup(email, password);
    }

    // logUser(values).then(() => {
    // });
  };

  return (
    <>
      <div className="mb-[2.5rem] flex flex-col items-center justify-between ">
        <h1 className="text-4xl font-bold text-center text-white">
          {isLoginIn ? "¡ Welcome Back !" : "New Account"}
        </h1>
        <p className="text-white mt-5 tracking-widest self-start leading-8 text-lg">
          {isLoginIn ? "Login into your account:" : "Quick and easy register"}
        </p>
      </div>
      <form
        className="w-full h-[75%] flex flex-col justify-around"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="flex flex-col justify-between  gap-5">
          <div>
            <input
              className="placeholder:text-white block bg-transparent border-b-[1px] w-full py-2 pl-4 focus:outline-none focus:border-b-2 text-white autofill:bg-inherit mb-2"
              id="username"
              type="text"
              placeholder="E-mail"
              autoComplete="off"
              {...register("email", {
                required: { value: true, message: "* Required field" },
                minLength: {
                  value: 6,
                  message: "* This field required min 6 characters",
                },
              })}
            />
            {<ErrorFormMsg errorMessage={errors.username?.message} />}
          </div>
          <div>
            <input
              className="placeholder:text-white block bg-transparent border-b-[1px] w-full py-2 pl-4 focus:outline-none focus:border-b-2 text-white mb-2"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "* Required field" },
                minLength: {
                  value: 6,
                  message: "* This field required min 6 characters",
                },
              })}
            />
            {<ErrorFormMsg errorMessage={errors.password?.message} />}
          </div>
        </div>
        {/* Side__Text__Container */}
        <div className="mt-6">
          {error && isLoginIn && (
            <p className="text-white tracking-widest text-left leading-8 text-md mb-2">
              {error}
            </p>
          )}
          <p
            className="text-white tracking-widest text-left leading-8 text-md cursor-pointer"
            onClick={() => setIsLoginIn(!isLoginIn)}
          >
            {isLoginIn ? "Create new account" : "Already have an account ?"}
          </p>
        </div>
        {/* Action__Button__Container */}
        <div className="flex flex-col justify-between items-center h-[30%] ">
          <button
            className="bg-[#166060e4] text-white tracking-widest w-full h-[3rem] rounded-md hover:bg-[#2b9d9d] duration-100 mt-5 text-sm"
            type="submit"
          >
            {isLoginIn ? "LOGIN" : "REGISTER"}
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
