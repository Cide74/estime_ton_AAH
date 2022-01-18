import {
  DEL_USER_REFRESH,
  DEL_FORM_REFRESH,
  DEL_ART_REFRESH,
  DEL_GB_REFRESH,
  DEL_COM_REFRESH,
} from "src/actions/admin";

const initialState = {
  delUserConfirm: "",
  delUserSuccess: false,
  delFormConfirm: "",
  delFormSuccess: false,
  delArtConfirm: "",
  delArtSuccess: false,
  delGbConfirm: "",
  delGbSuccess: false,
  delComConfirm: "",
  delComSuccess: false,
};

const admin = (state = initialState, action = {}) => {
  switch (action.type) {
    case DEL_USER_REFRESH: {
      console.log("del refresh ", action.payload);
      return {
        ...state,
        delConfirm: action.payload.data.message,
        delStatus: action.payload.data.success,
      };
    }
    case DEL_FORM_REFRESH: {
      console.log("del form ", action.payload);
      return {
        ...state,
        delFormSuccess: action.payload.data.success,
        delFormComfirm: action.payload.data.message,
      };
    }
    case DEL_ART_REFRESH: {
      return {
        ...state,
        delArtConfirm: action.payload.data.message,
        delArtSuccess: action.payload.data.success,
      };
    }
    case DEL_GB_REFRESH: {
      return {
        ...state,
        delGbConfirm: action.payload.data.message,
        delGbSuccess: action.payload.data.success,
      };
    }
    case DEL_COM_REFRESH: {
      return {
        ...state,
        delComConfirm: action.payload.data.message,
        delComSuccess: action.payload.data.success,
      };
    }
    default:
      return state;
  }
};
export default admin;
