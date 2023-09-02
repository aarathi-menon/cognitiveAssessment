import axiosinstance from "./AxiosInstance";
import initialData from "../Mock/InitializeItems.json"
import newData from "../Mock/clickedItems.json"

export async function getInitialItems() {
    // if (process.env.NODE_ENV === "development") {
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(initialData);
    //     }, 1000);
    //   });
    // } else 
    {
      const response = await axiosinstance.get(`/initializeItems`);
      return response;
    }
  }

  export async function postFormData(formData) {
    // if (process.env.NODE_ENV === "development") {
    //   console.log({clickData})
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(newData);
    //     }, 1000);
    //   });
    // } 
    // else 
    {
      let headers = {
        dob: formData.dateOfBirth,
        sex: formData.sex,
        qualifications: formData.qualifications,
        language_proficiency: formData.languageProficiency,
        vision: formData.vision,
        handedness: formData.handedness,
        country: formData.country,
        city: formData.city,
        ethnicity: formData.ethnicity,
        device_information: "laptop",
        disability: formData.disability
      }
      const response = await axiosinstance.get(`/assessment/testing` );
      console.log(response);
      return response;
    }
  } 


  

  export async function postClicked(clickData) {
    // if (process.env.NODE_ENV === "development") {
    //   console.log({clickData})
    //   return new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve(newData);
    //     }, 1000);
    //   });
    // } 
    // else 
    {
      let headers = {
        shapeID : clickData.shape,
        time : clickData.time
      }
      const response = await axiosinstance.post(`/clickedItem`, headers );
      return response;
    }
  }