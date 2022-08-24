// React Features
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
// Third Party Library
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
// Components
import ErrorFormMsg from "../ErrorFormMsg/ErrorFormMsg";
import { useRouter } from "next/router";
import { feedbackAlert } from "../../helpers/alerts/alerts";
// ----------------------------------------

const RegisterForm = () => {
  const { push } = useRouter();
  const { usersCtx } = useContext(GeneralContext);
  const { addUserHandler } = usersCtx;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (values) => {
    const newUserData = {
      id: uuidv4(),
      ...values,
    };
    addUserHandler(newUserData);
    feedbackAlert(values.name, "has been register successfully", "success");
    push("/users");
  };

  return (
    <form
      className=" flex flex-col h-[80%] justify-center md:justify-center 2xl:justify-center"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="grid grid-cols-2 gap-5 2xl:gap-y-[1.5rem] 2xl:mt-10  ">
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            type="text"
            placeholder="Name"
            autoComplete="off"
            {...register("name", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.name && <ErrorFormMsg errorMessage={errors.name?.message} />}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4  "
            autoComplete="off"
            type="text"
            placeholder="Last Name"
            {...register("lastName", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.lastName && (
            <ErrorFormMsg errorMessage={errors.lastName?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="number"
            placeholder="ID"
            {...register("document", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.document && (
            <ErrorFormMsg errorMessage={errors.document?.message} />
          )}
        </div>
        <div>
          <select
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 
          placeholder:text-sm border-mid-green 
          sm:pl-4 pr-3 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
            type="text"
            placeholder="Gender"
            {...register("gender", {
              required: {
                value: true,
                message: "*Required field",
              },
            })}
          >
            <option className="text-gray-600 text-sm block" value="" disabled>
              Select your option
            </option>
            <option value={1}>Male</option>
            <option value={2}>Female</option>
          </select>
          {errors.GenderId && (
            <ErrorFormMsg errorMessage={errors.GenderId?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
            autoComplete="off"
            type="number"
            placeholder="Phone"
            {...register("phone", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.phone && (
            <ErrorFormMsg errorMessage={errors.phone?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="email"
            placeholder="E-mail"
            {...register("email", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.email && (
            <ErrorFormMsg errorMessage={errors.email?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4  "
            autoComplete="off"
            type="text"
            placeholder="age"
            {...register("age", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.birthday && (
            <ErrorFormMsg errorMessage={errors.birthday?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="text"
            placeholder="Address"
            {...register("address", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.adress && (
            <ErrorFormMsg errorMessage={errors.adress?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="password"
            placeholder="Password"
            {...register("password", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.password && (
            <ErrorFormMsg errorMessage={errors.password?.message} />
          )}
        </div>
        <div>
          <input
            className="block w-full rounded-md py-2 pl-3 max-h-9 text-sm md:text-md bg-gray-200 placeholder:text-gray-600 placeholder:text-sm focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 2xl:py-4 "
            autoComplete="off"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: { value: true, message: "*Required field" },
            })}
          />
          {errors.passwordconfirm && (
            <ErrorFormMsg errorMessage={errors.passwordconfirm?.message} />
          )}
        </div>
      </div>
      {/* Action__Button__Container */}
      <div className="flex flex-col justify-between items-center   ">
        <button
          className="bg-[#166060] text-white tracking-widest w-full h-[3rem] text-sm sm:h-[3rem] absolute bottom-0 2xl:h-[3.5rem] 2xl:text-xl 2xl:tracking-[0.2rem] hover:bg-[#2b9d9d] duration-300 rounded-b-md"
          type="submit"
        >
          REGISTER
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
