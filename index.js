import Axios from "Axios";

exports.handler = async (event) => {
  let time = new Date().getSeconds();

  Axios.get(
    "https://api.airtable.com/v0/appwdD9TcXOOae9pA/MainTable?sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=asc",
    {
      headers: { Authorization: "Bearer " + "app_key" },
    }
  )
    .then(function (response) {
      let data = response.data.records;
      console.log(data[time % data.length].fields.title);

      const res = {
        statusCode: 200,
        body: JSON.stringify(
          `${data[time % data.length].fields.title}, 
           ${data[(time + 1) % data.length].fields.title}, 
           ${data[(time + 2) % data.length].fields.title}`
        ),
      };
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
};
