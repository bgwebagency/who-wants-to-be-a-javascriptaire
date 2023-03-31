function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data retrieved successfully");
    }, 1000);
  });
}

async function main() {
  try {
    const data = await getData();
    console.log(data);
    throw new Error("Something went wrong");
  } catch (err) {
    console.log("Caught an error:", err.message);
    return "Error occurred";
  } finally {
    console.log("Finally block executed.");
    return "Finally block value";
  }
}

console.log(main());
