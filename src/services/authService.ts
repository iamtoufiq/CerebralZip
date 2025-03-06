import apiConfig from "./config";

interface LoginResponse {
  message: string;
  token?: string;
}

interface LoginDetails {
  username: string;
  email: string;
  password: string;
  phone_number: string;
  input_code: number;
}

export const loginUser = async (loginDetails: LoginDetails): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${apiConfig.baseURL}login/`, {
      method: "POST",
      headers: {
        Accept:apiConfig.Accept,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginDetails),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Invalid credentials. Please try again.");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : "An unexpected error occurred");
  }
};
