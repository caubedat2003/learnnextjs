// model
export function autoMapper<T>(data: any, model: T): T {
  for (const key in model) {
    if (!data.hasOwnProperty(key)) continue;
    model[key] = data[key];
  }
  return model;
}

export function autoMapperToArray<T>(data: any, model: T): T[] {
  const keys = Object.keys(data);

  let result: any[] = [];
  for (let i = 0; i < keys.length; i++) {
    let template: any = {};
    let isObject: boolean = false;
    for (const key in model) {
      var props = `[${i}].${key}`;
      if (!data.hasOwnProperty(props)) {
        template[key] = undefined;
      } else {
        isObject = true;
        template[key] = data[props];
      }
    }
    if (isObject) result.push(template);
  }
  return result;
}
