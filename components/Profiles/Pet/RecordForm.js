import { useContext } from "react";
import { GeneralContext } from "../../../contexts/GeneralContext";
import { useForm } from "react-hook-form";
import ErrorPetsMsg from "../../ErrorFormMsg/ErrorPetsMsg";
import { feedbackAlert } from "../../../helpers/alerts/alerts";

const RecordForm = ({ toggleModal }) => {
  const { petsCtx } = useContext(GeneralContext);
  const { addRecordHandler } = petsCtx;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (values) => {
    addRecordHandler(values);
    feedbackAlert(`Record data`, "was successfully updated", "success");
    toggleModal();
  };

  return (
    <form
      className="grid grid-cols-2  gap-y-6 gap-x-2 mt-10 font-inter"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          autoComplete="off"
          type="text"
          placeholder="Record"
          {...register("record", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.record && (
          <ErrorPetsMsg errorMessage={errors.record?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1 max-h-11"
          type="text"
          placeholder="Diagnosis"
          {...register("diagnosis", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.diagnosis && (
          <ErrorPetsMsg errorMessage={errors.diagnosis?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Treatment"
          {...register("treatment", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.treatment && (
          <ErrorPetsMsg errorMessage={errors.treatment?.message} />
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
        {errors.date && <ErrorPetsMsg errorMessage={errors.date?.message} />}
      </div>

      <div className="col-span-2 h-[5rem] flex justify-center items-center">
        <button
          type="submit"
          className="absolute bottom-8 bg-dark-green text-white tracking-wider w-[85%] h-[3rem] rounded-md duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e]"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default RecordForm;
