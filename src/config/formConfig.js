// Web3Forms Configuration for CAL TECHNOLOGIES
// 1. Visit https://web3forms.com (100% free, no account or password required)
// 2. Enter Support@caltech.co.in (or caltechnologiesbangalore@gmail.com)
// 3. Paste the Access Key sent to your email here or set VITE_WEB3FORMS_ACCESS_KEY in .env

export const WEB3FORMS_ACCESS_KEY = 
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY";

export async function sendWeb3Form({ subject, fromName, data }) {
  const key = WEB3FORMS_ACCESS_KEY;

  // If a valid key is configured, post to Web3Forms API
  if (key && key !== "YOUR_WEB3FORMS_ACCESS_KEY") {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        access_key: key,
        subject: subject || "New Machine Tool Calibration Inquiry - CAL TECHNOLOGIES",
        from_name: fromName || "CAL TECH Website Inquiry",
        ...data
      })
    });

    const result = await response.json();
    return result;
  }

  // Graceful fallback for local development / before key is inserted
  console.info("Web3Forms Access Key not yet set. Inquiry recorded locally:", data);
  return { success: true, simulated: true };
}
