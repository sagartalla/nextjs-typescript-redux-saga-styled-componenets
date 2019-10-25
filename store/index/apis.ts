export const fetchJson = () =>
  fetch("http://localhost:3000/api/middleware").then(res => res.json());

export default {};
