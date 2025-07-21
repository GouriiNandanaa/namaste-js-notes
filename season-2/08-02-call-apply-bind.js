let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " in " + state
  );
};

let name = {
  firstName: "gouri",
  lastName: "nandana",
};

printName.call(name, "kadakkal", "kerala");

let name2 = {
  firstName: "dhum",
  lastName: "dhum aunty",
};

printName.call(name2, "dholakpur", "india");
