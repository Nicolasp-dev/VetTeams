// Next Feature
import { router } from "next/router";
// React Features
import { useState, useReducer, createContext } from "react";
// Third Party Library
import Cookie from "js-cookie";
import api from "../axiosApi/api";
// HTTP Req
import {
  fetchAll,
  fetchById,
  createData,
  updateData,
  deleteDataById,
} from "../helpers/ReqHandlers/httpReq";
// Global Reducer
import globalReducer, {
  defaultGlobalState,
  globalActionType,
} from "../helpers/reducers/global-reducer";
import { confirmDelete, feedbackAlert } from "../helpers/alerts/alerts";
// ----------------------------------------------------------

export const GeneralContext = createContext();

const getWindowSize = () => {
  const { innerWidth: width } = window;
  return { width };
};

const GeneralContextProvider = (props) => {
  const [globalState, dispatchGlobalAction] = useReducer(
    globalReducer,
    defaultGlobalState
  );

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [width, setWidth] = useState();

  const getWidthHandler = () => {
    const { width } = getWindowSize();
    setWidth(width);
  };

  // Users Functions Handlers
  const getAllUsersHandler = async () => {
    const response = await fetchAll("/users");
    dispatchGlobalAction({
      type: globalActionType.getAllUsers,
      payload: response,
    });
  };

  const getUserHandler = async (userId) => {
    try {
      const response = await fetchById("/users", userId);
      dispatchGlobalAction({
        type: globalActionType.getUserById,
        payload: response,
      });
    } catch (error) {
      console.log("Error getting user", error);
    }
  };

  const addUserHandler = async (newUserData) => {
    const response = await createData("/users", newUserData);
    dispatchGlobalAction({
      type: globalActionType.createUser,
      payload: response,
    });
  };

  const updateUserHandler = async (newData) => {
    const response = await updateData("/users", newData);
    dispatchGlobalAction({
      type: globalActionType.updateUserData,
      payload: response,
    });
  };

  const usersCtx = {
    users: globalState.users,
    user: globalState.user,
    getAllUsersHandler,
    getUserHandler,
    addUserHandler,
    updateUserHandler,
  };

  // Pets Functions Handlers
  const getAllPetsHandler = async () => {
    try {
      const response = await fetchAll("/pets");
      dispatchGlobalAction({
        type: globalActionType.getAllPets,
        payload: response,
      });
    } catch (error) {
      console.error("An error occur during GET /pets", error);
    }
  };

  const getPetHandler = async (petId) => {
    try {
      const response = await fetchById("/pets", petId);
      dispatchGlobalAction({
        type: globalActionType.getPetById,
        payload: response,
      });
    } catch (error) {
      console.error("Error occur during /GET pet");
    }
  };

  const getPetRecords = async () => {
    const response = await fetchAll("/records");
    dispatchGlobalAction({
      type: globalActionType.getAllPetRecords,
      payload: response,
    });
  };

  const addPetHandler = async (newPetData) => {
    const response = await createData("/pets", newPetData);
    dispatchGlobalAction({
      type: globalActionType.createPet,
      payload: response,
    });
  };

  const addRecordHandler = async (recordData) => {
    await createData("/records", recordData);
    dispatchGlobalAction({
      type: globalActionType.createRecord,
      payload: recordData,
    });
  };

  const updatePetHandler = async (newPetData) => {
    try {
      const response = await updateData("pets", newPetData);
      dispatchGlobalAction({
        type: globalActionType.updatePetData,
        payload: response,
      });
    } catch (error) {
      console.error("Error occur during pet update", error);
    }
  };

  const deletePetHandler = async (id, name) => {
    confirmDelete().then(async (result) => {
      if (result.isConfirmed) {
        feedbackAlert(`${name}`, `has been deleted.`, "success");
        await deleteDataById("/pets", id);
        dispatchGlobalAction({
          type: globalActionType.removePet,
          payload: id,
        });
      }
    });
  };

  const deleteRecordHandler = async (id, record) => {
    confirmDelete().then(async (result) => {
      if (result.isConfirmed) {
        feedbackAlert(`Record ${record}`, `has been deleted.`, "success");
        await deleteDataById("/records", id);
        dispatchGlobalAction({
          type: globalActionType.removeRecord,
          payload: id,
        });
      }
    });
  };

  const getAllAppointmentsHandler = async () => {
    const response = await fetchAll("/appointments");
    dispatchGlobalAction({
      type: globalActionType.getAllAppointments,
      payload: response,
    });
  };

  const addAppointmentHandler = async (newAppointmentData) => {
    const response = await createData("/appointments", newAppointmentData);
    dispatchGlobalAction({
      type: globalActionType.createAppointment,
      payload: response,
    });
  };

  const deleteAppointmentHandler = async (id, appointment) => {
    confirmDelete().then(async (result) => {
      if (result.isConfirmed) {
        feedbackAlert(
          `${appointment} appointment`,
          `has been deleted.`,
          "success"
        );
        await deleteDataById("/appointments", id);
        dispatchGlobalAction({
          type: globalActionType.removerAppointment,
          payload: id,
        });
      }
    });
  };

  const petsCtx = {
    pets: globalState.pets,
    pet: globalState.pet,
    records: globalState.records,
    getAllPetsHandler,
    getPetHandler,
    getPetRecords,
    addPetHandler,
    addRecordHandler,
    updatePetHandler,
    deletePetHandler,
    deleteRecordHandler,
  };

  const appointmentCtx = {
    appointments: globalState.appointments,
    getAllAppointmentsHandler,
    addAppointmentHandler,
    deleteAppointmentHandler,
  };

  const searchHandler = (term) => {
    setSearchValue(term);
    if (term !== "") {
      const user = globalState.users.filter((user) => {
        return Object.values(user)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase());
      });
      setSearchResults(user);
    } else {
      setSearchResults(globalState);
    }
  };

  const logUser = async (loginData) => {
    const options = {
      headers: {
        accept: " */*",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await api.post("/auth/login", loginData, options);
      const { token } = response.data;

      if (token) {
        Cookie.set("token", token);

        api.defaults.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Login Error", error.message);
    }
  };

  const logout = async () => {
    try {
      // const response = await api.post("/logout");
      Cookie.remove("token");
      const jwt = Cookie.get("token");
      if (!jwt) {
        router.push("/");
      }
    } catch (error) {
      console.log("Logout Error", error);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        usersCtx,
        petsCtx,
        appointmentCtx,
        searchValue,
        searchHandler,
        setSearchValue,
        searchResults,
        logUser,
        logout,
        width,
        getWidthHandler,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
