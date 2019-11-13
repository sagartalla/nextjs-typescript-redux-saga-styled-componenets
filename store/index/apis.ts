export const fetchJson = () => fetch(`/api/users`).then(res => res.json());

export default {};
