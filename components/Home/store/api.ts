export const fetchProposalData = () =>
  fetch(`/api/proposal`).then(res => res.json());

export const fetchPolicyData = () =>
  fetch(`/api/policy`).then(res => res.json());

export default { fetchProposalData };
