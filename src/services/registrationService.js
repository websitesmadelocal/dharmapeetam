const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwgzE2Li3fgo5EFfcYw5F9S-BElCcnZ8CD3FTEiZrsMZZbkLy3oD40cZTekO5sPmonoPg/exec"
export const submitRegistration = async (formData) => {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });

    return await response.json();
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }
};