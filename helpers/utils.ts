export const isEmptyObject = (obj: Record<string, unknown>) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;
