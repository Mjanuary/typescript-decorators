import "reflect-metadata";

// this is the vscode for this stupid stuff and i realy love this 

// const plane = { color: "red" };
// Reflect.defineMetadata("note", "hi there", plane);
// console.log(plane);
// console.log(Reflect.getMetadata("note", plane));
// Reflect.defineMetadata("note", "hi there", plane, "color");
// const note = Reflect.getMetadata("note", plane, "color");

@controller
class Plane {
  color: string = "red";

  @get("Hi there haha")
  fly(): void {
    console.log("vrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    const middleware = Reflect.getMetadata("middleware", target.prototype, key);
    console.log(path);

    // router.get(path, middleware, target.prototype[key])
  }
}
