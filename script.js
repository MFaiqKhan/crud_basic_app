const BtnAllusers = document.getElementById("getusers");
const Btnuser = document.getElementById("getuser-id");
const btncreate = document.getElementById("postuser");
const BtnEdit = document.getElementById("putuser-id");
const BtnDel = document.getElementById("deluser-id");
const BtnDelAll = document.getElementById("delallusers");

BtnAllusers.addEventListener("click", () => {
  axios
    .get("http://localhost:3000/users")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

btncreate.addEventListener("click", () => {
  let inpName = document.getElementById("crN").value;
  let inpEmail = document.getElementById("crE").value;
  let inpAddr = document.getElementById("crA").value;
  if (!inpName || !inpEmail || !inpAddr) {
    //if(inpName === ""||inpEmail === "" || inpAddr ==="") {}
    alert("Input All Fields");
  }
  axios
    .post("http://localhost:3000/user", {
      name: inpName,
      email: inpEmail,
      address: inpAddr,
    })
    .then((response) => {
      alert(`USER is added `);
      console.log(response.data);
    })
    .catch((error) => {
      alert("Enter All fields Correctly Please!!");
      console.log(error);
    });
});

Btnuser.addEventListener("click", () => {
  let InpgetUser = document.getElementById("get_user").value;
  axios
    .get(`http://localhost:3000/user/${InpgetUser}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

BtnEdit.addEventListener("click", () => {
  let editid = document.getElementById("Edid").value;
  let editNam = document.getElementById("Edna").value;
  let editEmai = document.getElementById("Edem").value;
  let editAddr = document.getElementById("EdAddr").value;
  axios
    .put(`http://localhost:3000/user/${editid}`, {
      name: editNam,
      email: editEmai,
      address: editAddr,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

});
BtnDel.addEventListener("click", () => {
  const DeleID = document.getElementById("delid").value;
  axios
    .delete(`http://localhost:3000/user/${DeleID}`, {
      name: {},
      email: {},
      address: {},
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
BtnDelAll.addEventListener("click", () => {});
