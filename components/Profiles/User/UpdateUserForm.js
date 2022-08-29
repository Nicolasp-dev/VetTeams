// React Features
import { useEffect, useContext } from "react";
import { GeneralContext } from "../../../contexts/GeneralContext";
// Third Party Library
import { useForm } from "react-hook-form";
// Components
import ErrorPetsMsg from "../../ErrorFormMsg/ErrorFormMsg";
import { feedbackAlert } from "../../../helpers/alerts/alerts";
// ----------------------------------------------------------

const UpdateUserForm = ({ toUpdateUser, toggleModal }) => {
  const { usersCtx } = useContext(GeneralContext);
  const { updateUserHandler } = usersCtx;

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();
  const id = toUpdateUser._id;

  useEffect(() => {
    setValue("name", toUpdateUser.name);
    setValue("lastName", toUpdateUser.lastName);
    setValue("document", toUpdateUser.document);
    setValue("email", toUpdateUser.email);
    setValue("phone", toUpdateUser.phone);
    setValue("age", toUpdateUser.age);
    setValue("address", toUpdateUser.address);
    setValue("gender", toUpdateUser.gender);
  }, []);

  const onSubmitHandler = (values) => {
    updateUserHandler({ id, ...values });
    feedbackAlert(`${values.name} data`, "was successfully updated", "success");
  };

  return (
    <form
      className="grid grid-cols-2 p-5 gap-y-2 gap-x-2 mt-5"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          autoComplete="off"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.name && <ErrorPetsMsg errorMessage={errors.name?.message} />}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 max-h-11"
          type="text"
          placeholder="Last Name"
          {...register("lastName", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.lastName && (
          <ErrorPetsMsg errorMessage={errors.lastName?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 max-h-11"
          type="text"
          placeholder="Document"
          {...register("document", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.document && (
          <ErrorPetsMsg errorMessage={errors.document?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.email && <ErrorPetsMsg errorMessage={errors.email?.message} />}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="number"
          placeholder="Phone"
          {...register("phone", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.phone && <ErrorPetsMsg errorMessage={errors.phone?.message} />}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="number"
          placeholder="Age"
          {...register("age", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.age && <ErrorPetsMsg errorMessage={errors.age?.message} />}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Address"
          {...register("address", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.address && (
          <ErrorPetsMsg errorMessage={errors.address?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Gender"
          {...register("gender", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.gender && (
          <ErrorPetsMsg errorMessage={errors.gender?.message} />
        )}
      </div>

      <button
        type="submit"
        className=" bg-dark-green text-white tracking-wider w-full col-span-2 h-[3rem] rounded-md duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e] mt-7"
        onClick={toggleModal}
      >
        Update
      </button>
    </form>
  );
};

export default UpdateUserForm;
