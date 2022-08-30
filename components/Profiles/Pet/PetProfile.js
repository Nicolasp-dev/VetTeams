// React Features
import { useState, useEffect, Fragment, useContext } from "react";
// Next Feature
import { useRouter } from "next/router";
// Third Party Library
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import BounceLoader from "react-spinners/BounceLoader";
// Components
import Navigation from "../../Layout/Navigation";
import PetData from "./PetData";
import PetTable from "./PetTable";
import UpdatePetForm from "./UpdatePetForm";
import RecordForm from "./RecordForm";
import { GeneralContext } from "../../../contexts/GeneralContext";
// ----------------------------------------------------------

const PetProfile = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [toggleForm, setToggleForm] = useState(true);
  const { petsCtx } = useContext(GeneralContext);
  const petId = router.query.index;
  const { pet, records, getPetHandler, getPetRecords, addRecordHandler } =
    petsCtx;

  const [modal, setModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPetHandler(petId);
    getPetRecords();
    setLoading(false);
  }, []);

  const toggleModal = (e) => {
    if (!e) return setModal(!modal);
    const actionType = e.target.innerText;
    if (actionType === "Edit") setToggleForm(true);
    if (actionType === "New") setToggleForm(false);
    setModal(!modal);
  };

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Navigation />
      {loading ? (
        <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
          <BounceLoader color={"#166060"} loading={loading} size={250} />
          <p className="mt-10 text-3xl text-mid-green">. . . Loading . . .</p>
        </div>
      ) : (
        <motion.section
          className="grid grid-cols-12 grid-rows-mobileAuto sm:grid-rows-[repeat(10,_minmax(10vh,_10vh))] font-inter h-full w-full"
          variants={variants}
          initial="hidden"
          animate="enter"
          exit="exit"
          transition={{ type: "linear" }}
        >
          <div className="col-start-1 col-end-13 sm:col-start-3 sm:col-end-12 sm:row-start-2 sm:row-end-10 pt-[6rem] sm:pt-0">
            <PetData pet={pet} toggleModal={toggleModal} />
          </div>

          <div className="sm:mt-5 col-start-1 col-end-13 sm:col-start-3 sm:col-end-12 row-start-6">
            <PetTable records={records} />
          </div>
        </motion.section>
      )}

      <Transition appear show={modal} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" transform overflow-hidden rounded-md bg-white p-10 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold  text-dark-green border-b-[1px] border-dark-green pb-5 "
                  >
                    {toggleForm ? "Edit" : "New Record"}
                  </Dialog.Title>
                  {toggleForm ? (
                    <UpdatePetForm
                      toUpdatePet={pet}
                      toggleModal={toggleModal}
                    />
                  ) : (
                    <RecordForm toggleModal={toggleModal} />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default PetProfile;
