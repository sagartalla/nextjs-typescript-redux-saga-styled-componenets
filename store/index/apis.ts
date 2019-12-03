export const fetchAppData = () => fetch(`/api/header`).then(res => res.json());

export default {};
