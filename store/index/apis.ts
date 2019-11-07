export const fetchJson = () =>
  fetch("http://localhost:3000/api/users").then(res => res.json());

export default {};
