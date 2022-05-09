// import fetch from "node-fetch"
function goTechy(){fetch('https://techy-api.vercel.app/api/json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    $("#techy").append(data.message);
  })}
goTechy();
