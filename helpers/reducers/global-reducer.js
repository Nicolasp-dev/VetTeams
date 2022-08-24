const defaultGlobalState = {
  users: [],
  user: [],
  pets: [],
  pet: [],
  records: [],
  appointments: [],
  appointment: [],
};

const globalActionType = {
  getAllUsers: "GET_ALL_USERS",
  getAllPets: "GET_ALL_PETS",
  getAllPetRecords: "GET_ALL_PET_RECORDS",
  getUserById: "GET_USER_BY_ID",
  getPetById: "GET_PET_BY_ID",
  createUser: "CREATE_USER",
  createPet: "CREATE_PET",
  createRecord: "CREATE_PET_RECORD",
  updateUserData: "UPDATE_USER",
  updatePetData: "UPDATE_PET_DATA",
  removePet: "REMOVE_PET",
  removeRecord: "REMOVE_RECORD",
  getAllAppointments: "GET_ALL_APPOINTMENTS",
  createAppointment: "CREATE_APPOINTMENT",
  removerAppointment: "REMOVE_APPOINTMENT",
};

const globalReducer = (state, action) => {
  switch (action.type) {
    case globalActionType.getAllUsers:
      return { ...state, users: action.payload };
    case globalActionType.getUserById:
      return { ...state, user: action.payload };
    case globalActionType.createUser:
      return { ...state, users: [{ ...action.payload }] };
    case globalActionType.updateUserData:
      return { ...state, user: { ...action.payload } };
    case globalActionType.getAllPets:
      return { ...state, pets: action.payload };
    case globalActionType.getPetById:
      return { ...state, pet: action.payload };
    case globalActionType.createPet:
      return { ...state, pets: [...state.pets, { ...action.payload }] };
    case globalActionType.updatePetData:
      return { ...state, pet: { ...action.payload } };
    case globalActionType.removePet:
      const updatedList = state.pets.filter(
        (pets) => pets.id !== action.payload
      );
      return { ...state, pets: updatedList };
    case globalActionType.getAllPetRecords:
      return { ...state, records: action.payload };
    case globalActionType.createRecord:
      return { ...state, records: [...state.records, { ...action.payload }] };
    case globalActionType.removeRecord:
      const updatedRecords = state.records.filter(
        (record) => record.id !== action.payload
      );
      return { ...state, records: updatedRecords };
    case globalActionType.getAllAppointments:
      return { ...state, appointments: action.payload };
    case globalActionType.createAppointment:
      return {
        ...state,
        appointments: [...state.appointments, { ...action.payload }],
      };
    case globalActionType.removerAppointment:
      const updatedAppointments = state.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
      return { ...state, appointments: updatedAppointments };
    default:
      return defaultGlobalState;
  }
};

export { defaultGlobalState, globalActionType };
export default globalReducer;
