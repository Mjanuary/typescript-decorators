@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("Opps this is an error")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator wake: boolean
  ): void {
    // throw new Error();
    // return console.log("Swish");
    if (speed === "fast") {
      console.log("Swim");
    } else {
      console.log("Nothing");
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

// on a varoiable
function testDecorator(target: any, key: string) {
  //   console.log("Target: ", target);
  console.log("Key: ", key);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}

// new Boat().pilot("fast", false);
