const ip = "192.168.100.8";
const port = 3000;
const URL = "http://" + ip + ":" + port + "/";
export const getAllStudents = (fnRefreshList) => {
  console.log("getAllStudents  entrando");
  fetch(URL+"student")
    .then((response) => response.json()) 
    .then((body) => {
      console.log("Data from server:", body); // Log the data
      
      fnRefreshList(body);
    });
};
