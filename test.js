const entry = {
  a: {
    b: {
      c: {
        dd: "abcdd",
      },
    },
    d: {
      ee: "adee",
    },
    f: "af",
  },
};

function recurse(obj, str = '', result = {}) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object") {
      recurse(obj[key], str + key + ".", result);
    } else {
      result[str + key] = obj[key];
    }
  }
  return result;
}

console.log(recurse(entry));
