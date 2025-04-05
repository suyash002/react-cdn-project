const heading = React.createElement("h1", null, "Learn web development");

const paragraph = React.createElement("p", null, [
  "Welcome to the MDN learning area. This set of articles aims to guide complete",
  React.createElement("br"),
  "beginners to web development with all that they need to start coding websites.",
]);
const divone = React.createElement("div", null, [ paragraph]);
const paragraph2 = React.createElement("p", null, [
  "The aim of this area of MDN is not to take you from \"beginner\" to \"expert\" but to",
  React.createElement("br"),
  "take you from \"beginner\" to \"comfortable.\" From there, you should be able to start",
  React.createElement("br"),
  "making your way, learning from ",
  React.createElement("a", {
    href: "https://developer.mozilla.org",
    target: "_blank",
  }, "the rest of MDN"),
  ", and other intermediate to",
  React.createElement("br"),
  "advanced resources that assume a lot of previous knowledge.",
]);
const divtwo = React.createElement("div", null, [ paragraph2]);

const paragraph3 = React.createElement("p", null, [
  "If you are a complete beginner, web development can be challenging - we will hold",
  React.createElement("br"),
  "your hand and provide enough detail for you to feel comfortable and learn the topics",
  React.createElement("br"),
  "properly. You should feel at home whether you are a student learning web",
  React.createElement("br"),
  "development (on your own or as part of a class), a teacher looking for class",
  React.createElement("br"),
  "materials, a hobbyist, or someone who just wants to understand more about how",
  React.createElement("br"),
  "web technologies work.",
]);
const divthree = React.createElement("div", null, [ paragraph3,]);
const contentWrapper = React.createElement("div", { className: "content-wrapper" }, [
  heading,
  divone,
  divtwo,
  divthree
]);

const container = React.createElement("div", { className: "right" }, contentWrapper);

ReactDOM.render(container, document.getElementById("root"));
