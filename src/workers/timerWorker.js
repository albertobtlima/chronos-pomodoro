self.onmessage = function (event) {
  console.log("Chegou", event.data);

  self.postMessage("Outra vez café");
};
