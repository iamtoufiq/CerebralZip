import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../utils/cookies";
import { loginUser } from "../services/authService";

const initialState = {
  UserName: "trial",
  password: "assignment123",
  loading: false,
};

const Login = () => {
    const navigate=useNavigate()
  const [loginInfo, setLoginInfo] = useState(initialState);

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoginInfo((prev) => ({ ...prev, loading: true }));

      try {
        const loginDetails = {
          username: loginInfo.UserName,
          email: "string",
          password: loginInfo.password,
          phone_number: "string",
          input_code: 0,
        };
        const data = await loginUser(loginDetails);
        setCookie("token", data.message || "", 1); // Token expires in 1 day
        navigate("/");
      } catch (err) {
        alert(err instanceof Error ? err.message : "Something went wrong!");
        console.error(err);
      } finally {
        setLoginInfo((prev) => ({ ...prev, loading: false }));
      }
    },
    [loginInfo.UserName, loginInfo.password, navigate]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full md:max-w-md mx-5 md:mx-0 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* UserName Input */}
          <div className="flex flex-col gap-1">
            <label className="block text-gray-600 text-sm mb-1">UserName</label>
            <input
              value={loginInfo.UserName}
              onChange={(e) => setLoginInfo((prev) => ({ ...prev, UserName: e.target.value }))}
              required
              type="UserName"
              placeholder="Enter your UserName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="block text-gray-600 text-sm mb-1">Password</label>
            <input
              value={loginInfo.password}
              onChange={(e) => setLoginInfo((prev) => ({ ...prev, password: e.target.value }))}
              required
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 md:mt-6w-full bg-[#005dde] text-white py-2 rounded-md cursor-pointer hover:opacity-90 transition disabled:opacity-50"
            disabled={loginInfo.loading}
          >
            {loginInfo.loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
