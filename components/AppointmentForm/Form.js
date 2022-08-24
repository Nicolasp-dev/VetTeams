import React from "react";
import ErrorFormMsg from "../ErrorFormMsg/ErrorFormMsg";
import { useRouter } from "next/router";
// 3rd Party Library
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralContext";
import { feedbackAlert } from "../../helpers/alerts/alerts";
// ---------- //

const Form = () => {
  const { push } = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { appointmentCtx } = useContext(GeneralContext);
  const { addAppointmentHandler } = appointmentCtx;

  const onSubmitHandler = (values) => {
    addAppointmentHandler(values);
    feedbackAlert(values.service, "has been register successfully", "success");
    push("/appointmentsList");
  };

  return (
    <div className=" flex flex-col gap-y-6 sm:py-5 py-[110px] px-5 sm:pl-[7rem] lg:pl-0">
      <h1 className="text-2xl sm:text-[2rem] text-[#1F6B6B] font-bold text-center">
        Make an appointment
      </h1>

      <p className="text-sm sm:text-md text-justify">
        In this section you can request an appointment for a general medical
        consultation, specialized medical consultation, vaccinations and
        administrative procedures.
        <br />
        <br />
        It is not possible to request appointments online for some activities
        (diagnostic tests, minor surgery, etc.) that require a prior indication
        from a professional or special preparation conditions.
      </p>

      <form
        className="text-center flex flex-col"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <fieldset className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div>
            <select
              className="placeholder:text-mid-green block bg-transparent w-full
                border-2 border-mid-green rounded-md py-2 pl-2 sm:pl-4 pr-3
                focus:outline-none focus:border-mid-green focus:ring-mid-green
                focus:ring-1 max-h-[45px]"
              type="text"
              placeholder="Service"
              {...register("service", {
                required: { value: true, message: "*Required field" },
              })}
            >
              <option>Medical Service</option>
              <option>Grooming Service</option>
            </select>
            {errors.service && (
              <ErrorFormMsg errorMessage={errors.service?.message} />
            )}
          </div>
          <div>
            <input
              className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
              type="date"
              placeholder="Date"
              {...register("date", {
                required: { value: true, message: "*Required field" },
              })}
            />
            {errors.date && (
              <ErrorFormMsg errorMessage={errors.date?.message} />
            )}
          </div>
        </fieldset>

        <textarea
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-4 focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 mb-5"
          cols={10}
          rows={6}
          placeholder="Some description"
          {...register("description", { required: true })}
        ></textarea>

        <button
          type="submit"
          className="px-2 rounded-md h-[3rem]  bg-mid-green text-white tracking-wider text-sm sm:text-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
