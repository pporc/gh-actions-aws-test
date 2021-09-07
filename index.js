const Axios = require("axios").default;

exports.handler = async (event) => {
  let time = new Date().getSeconds();
  let dataString = "";

  await Axios.get(
    "https://api.airtable.com/v0/TABLE_ID/MainTable?sort%5B0%5D%5Bfield%5D=ID&sort%5B0%5D%5Bdirection%5D=asc",
    {
      headers: { Authorization: "Bearer " + "api_key" },
    }
  )
    .then(function (response) {
      let data = response.data.records;
      dataString =
        data[time % data.length].fields.title +
        ", " +
        data[(time + 1) % data.length].fields.title +
        ", " +
        data[(time + 2) % data.length].fields.title;
    })
    .catch(function (error) {
      console.log(error);
    });

  const res = {
    statusCode: 200,
    body: JSON.stringify(dataString),
  };
  return res;
};
