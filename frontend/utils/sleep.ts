const sleep = (delay: number = 2000) =>
  new Promise((r) => setTimeout(r, delay));

export default sleep;
