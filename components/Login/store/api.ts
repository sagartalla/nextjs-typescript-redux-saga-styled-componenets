export const fetchSendOtp = (payload: any) =>
  fetch(`/api/send_otp`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());

export const fetchVerifyOtp = (payload: any) =>
  fetch(`/api/verify_otp`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.json());
