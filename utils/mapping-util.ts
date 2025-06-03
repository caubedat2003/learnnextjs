 // model 
 function mapping<T>(data: any, model: T): T {
  for (const key in model) {
    if (!data.hasOwnProperty(key)) continue;
    model[key] = data[key];
  }
  return model;
}