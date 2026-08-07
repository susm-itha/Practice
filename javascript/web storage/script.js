function store(name) {
  localStorage.setItem("username", name);
  sessionStorage.setItem("sessionUser", name);
}
 
function retrieve() {
  return {
    local: localStorage.getItem("username"),
    session: sessionStorage.getItem("sessionUser")
  };
}
function save() {
  let name = "samudrala";
 
  localStorage.setItem("username", name);
  sessionStorage.setItem("sessionUser", name);
 
  console.log("Saved!");
}
 
// usage
store("samudrala");
store("susmitha");
 
let data = retrieve();
console.log("Local:", data.local);
console.log("Session:", data.session)