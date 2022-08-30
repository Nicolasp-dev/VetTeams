// React Features
import { useState, useEffect, Fragment, useContext } from "react";
import { GeneralContext } from "../../../contexts/GeneralContext";
// Next Features
import { useRouter } from "next/router";
// Third Party Library
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import BounceLoader from "react-spinners/BounceLoader";
// Components
import Navigation from "../../Layout/Navigation";
import PetsForm from "../Pet/PetsForm";
import UpdateUserForm from "./UpdateUserForm";
import PetCard from "../Pet/PetCard";
import UserData from "./UserData";
// ----------------------------------------------------------------------------------------

const MainProfile = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [cardsPerPage, setCardsPerPage] = useState();
  const [modal, setModal] = useState(false);
  const [toggleForm, setToggleForm] = useState(true);

  const { usersCtx, petsCtx, width, getWidthHandler } =
    useContext(GeneralContext);

  const { user, getUserHandler } = usersCtx;
  const { pets, getAllPetsHandler } = petsCtx;

  const toggleModal = (e) => {
    if (!e) return setModal(!modal);
    const actionType = e.target.innerText;
    if (actionType === "Edit") setToggleForm(true);
    if (actionType === "Add") setToggleForm(false);
    setModal(!modal);
  };
  const closeModal = () => setModal(false);

  useEffect(() => {
    closeModal();
  }, []);

  useEffect(() => {
    setLoading(true);
    getUserHandler(router.query.userId);
    getAllPetsHandler();
    setLoading(false);
  }, []);

  useEffect(() => {
    getWidthHandler();

    if (width < 650) {
      setCardsPerPage(1);
    }

    if (width > 900) {
      setCardsPerPage(2);
    }

    if (width > 1200) {
      setCardsPerPage(3);
    }

    window.addEventListener("resize", getWidthHandler);

    return () => window.removeEventListener("resize", getWidthHandler);
  }, [width]);

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Navigation />
      <section className="grid grid-cols-12 grid-rows-mobileAuto sm:grid-rows-[repeat(10,_minmax(10vh,_10vh))] font-inter h-full w-full">
        {loading ? (
          <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center">
            <BounceLoader color={"#166060"} loading={loading} size={250} />
            <p className="mt-10 text-3xl text-mid-green">. . . Loading . . .</p>
          </div>
        ) : (
          <motion.div
            className="col-start-1 col-end-13 sm:col-start-3 sm:col-end-12 sm:row-start-2 sm:row-end-10 pt-[6rem] sm:pt-0"
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear" }}
          >
            {/* USER__DETAILS__CONTAINER */}
            <UserData user={user} toggleModal={toggleModal} />

            {/* PETS CARDS CONTAINER */}
            <Splide
              options={{ perPage: `${cardsPerPage}`, speed: 1000 }}
              className="px-[2rem]"
            >
              {pets?.map((pet) => {
                return (
                  <SplideSlide
                    key={pet._id}
                    className="w-full h-[20rem] flex flex-wrap sm:flex-nowrap justify-center items-center gap-8 sm:mt-[5rem] "
                  >
                    <PetCard pet={pet} closeModal={closeModal} />
                  </SplideSlide>
                );
              })}
            </Splide>
          </motion.div>
        )}

        {/* ADD NEW PET MODAL */}
        <Transition appear show={modal} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={toggleModal}>
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
                      {toggleForm ? "Edit" : "Add"}
                    </Dialog.Title>
                    {toggleForm ? (
                      <UpdateUserForm
                        toUpdateUser={user}
                        toggleModal={toggleModal}
                      />
                    ) : (
                      <PetsForm closeModal={closeModal} />
                    )}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </section>
    </>
  );
};

export default MainProfile;
