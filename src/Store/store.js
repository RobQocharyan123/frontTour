import { configureStore } from "@reduxjs/toolkit";
// import AuthenticationSlice from "./Slices/AuthenticationSlice";
// import RegistrationSlice from "./Slices/RegistrationSlice";
// import CustomerListSlice from "./Slices/CustomerSlices/CustomerListSlice";
// import CustomerFilterSlice from "./Slices/CustomerSlices/CustomerFiltersSlice";
// import TemplateFIlterSlice from "./Slices/Templates/TemplateFIlterSlice";
// import TemplatesSLice from "./Slices/Templates/TemplatesSLice";

export const store = configureStore({
  reducer: {
    // auth: AuthenticationSlice,
    // userRegistr: RegistrationSlice,
    // customer: CustomerListSlice,
    // customerFilters: CustomerFilterSlice,
    // templateFilters: TemplateFIlterSlice,
    // templates: TemplatesSLice
  },
});
