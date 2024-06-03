import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    isVisible: false,
    label: "",
    isDisable: false,
    isEdit: false,
    user: {
      id: "",
      name: "",
      address: "",
      gender: "",
      birtDate: "",
      createdAt: "",
    },
  },
  reducers: {
    showForm: (state, actions) => {
      state.isVisible = true;
      state.label = actions.payload.label;
      if (actions.payload.user) {
        state.user = actions.payload.user;
      }
      if (actions.payload.isDisable) {
        state.isDisable = actions.payload.isDisable;
      }
      if (actions.payload.isEdit) {
        state.isEdit = actions.payload.isEdit;
      }
    },
    hiddenForm: (state) => {
      state.isVisible = false;
      state.label = "";
      state.user = {
        id: "",
        name: "",
        address: "",
        gender: "",
        birtDate: "",
        createdAt: "",
      };
      state.isDisable = false;
      state.isEdit = false;
    },
  },
});

export const { hiddenForm, showForm } = formSlice.actions;
export default formSlice.reducer;
