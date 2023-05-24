
async function getDataForEach(ids) {
  let listForData = [];
  ids.forEach(async (id) => {
    let res = await fetch("https://reqbin.com/echo/get/json");
    let result = await res.json();
    listForData.push(result.data);
  });
  listForData.forEach((item) => console.log(item));
}

async function getDataFor(ids) {
  let listForData = [];
  for (let i = 0; i < ids.length; i++) {
    let res = await fetch("https://reqbin.com/echo/get/json");
    let result = await res.json();
    listForData.push(result.data);
  }
  listForData.forEach((item) => console.log(item));
}

getDataFor([1, 2, 3]).then(console.log("done"));
getDataForEach([1, 2, 3]).then(console.log("done"));
