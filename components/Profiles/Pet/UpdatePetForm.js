import { useEffect, useContext } from "react";
import { GeneralContext } from "../../../contexts/GeneralContext";
import { useForm } from "react-hook-form";
import ErrorPetsMsg from "../../ErrorFormMsg/ErrorPetsMsg";
import { feedbackAlert } from "../../../helpers/alerts/alerts";

const UpdatePetForm = ({ toUpdatePet, toggleModal }) => {
  const { petsCtx } = useContext(GeneralContext);
  const { updatePetHandler } = petsCtx;

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const id = toUpdatePet._id;

  useEffect(() => {
    setValue("name", toUpdatePet.name);
    setValue("age", toUpdatePet.age);
    setValue("microchip", toUpdatePet.microchip);
    setValue("species", toUpdatePet.species);
    setValue("breed", toUpdatePet.breed);
    setValue("weight", toUpdatePet.weight);
    setValue("status", toUpdatePet.status);
    setValue("gender", toUpdatePet.gender);
  }, []);

  const onSubmitHandler = async (values) => {
    updatePetHandler({ ...values, id });
    feedbackAlert(`${values.name} data`, "was successfully updated", "success");
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
          type="number"
          placeholder="Microchip"
          {...register("microchip", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.microchip && (
          <ErrorPetsMsg errorMessage={errors.microchip?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Species"
          {...register("species", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.species && (
          <ErrorPetsMsg errorMessage={errors.species?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Breed"
          {...register("breed", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.breed && <ErrorPetsMsg errorMessage={errors.breed?.message} />}
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
          type="number"
          placeholder="Weight (Kg)"
          {...register("weight", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.weight && (
          <ErrorPetsMsg errorMessage={errors.weight?.message} />
        )}
      </div>
      <div>
        <input
          className="placeholder:text-mid-green block bg-transparent w-full border-2 border-mid-green rounded-md py-2 pl-2  sm:pl-4 pr-3  focus:outline-none focus:border-mid-green focus:ring-mid-green focus:ring-1"
          type="text"
          placeholder="Status"
          {...register("status", {
            required: { value: true, message: "*Required field" },
          })}
        />
        {errors.status && (
          <ErrorPetsMsg errorMessage={errors.status?.message} />
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
      <div className="col-span-2 h-[5rem] flex justify-center items-center">
        <button
          type="submit"
          className="absolute bottom-8 bg-dark-green text-white tracking-wider w-[85%] h-[3rem] rounded-md duration-100 hover:bg-gradient-to-t from-dark-green to-[#147e7e]"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdatePetForm;
