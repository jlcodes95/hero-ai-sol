const transformValue = (obj) => {
  // Write your solution here. You can create any number of helper functions
  for (const key in obj) {
    switch (typeof obj[key]) {
      case "number":
        obj[key] = obj[key] + 1;
        break;
      case "string": {
        if (obj[key]) obj[key] += " AI";
        else obj[key] = "AI";
        break;
      }
      case "object": {
        //recurse if object
        obj[key] = transformValue(obj[key]);
      }
    }
  }
  return obj;
};

//test case
// console.log(
//   transformValue({
//     a: 123,
//     b: "hero",
//     c: [1, 2, 3],
//     d: {
//       e: 3,
//       f: ["abc", "def"],
//     },
//   })
// );
