import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      navigate("/dashboard");
    }
  }

  return (
    // Vibrant purple background matches the screenshot
    <div className="min-h-screen flex items-center justify-center bg-[#8B1CFF] p-4 font-sans">
      
      {/* Centered White Card with rounded corners */}
      <div className="bg-white w-full max-w-[480px] rounded-2xl py-12 px-8 md:px-12 flex flex-col items-center shadow-xl">
        
        <header className="text-center mb-8">
          <h1 className="text-[#8B1CFF] text-3xl font-bold mb-2">Log in to flowva</h1>
          <p className="text-gray-500 text-sm font-medium">Log in to receive personalized recommendations</p>
        </header>

        <form onSubmit={handleLogin} className="w-full space-y-5">
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-semibold text-sm">Email</label>
            <input
              type="email"
              placeholder="user@example.com"
              className="w-full border border-gray-200 p-3.5 rounded-lg outline-none focus:border-[#8B1CFF] transition-colors placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2 relative">
            <label className="text-gray-700 font-semibold text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="........"
                className="w-full border border-gray-200 p-3.5 rounded-lg outline-none focus:border-[#8B1CFF] transition-colors placeholder:text-gray-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B1CFF] font-medium text-xs uppercase"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="flex justify-end mt-1">
              <button type="button" className="text-[#8B1CFF] text-xs font-bold hover:underline">
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B1CFF] hover:bg-[#7a1ae0] text-white py-4 rounded-full text-lg font-bold shadow-lg transition-all active:scale-[0.98] mt-2"
          >
            {loading ? "Logging in..." : "Sign in"}
          </button>
        </form>

        {/* Divider line with "or" */}
        <div className="w-full flex items-center my-8">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="px-4 text-[#8B1CFF] text-xs font-bold uppercase">or</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Google Login Button */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-colors mb-6">
          <img 
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
            className="w-5 h-5" 
            alt="Google" 
          />
          <span className="text-gray-600 font-semibold text-sm">Sign in with Google</span>
        </button>

        {/* Footer Navigation */}
        <p className="text-gray-500 text-sm font-medium">
          Don't have an account? <Link to="/signup" className="text-[#8B1CFF] font-bold ml-1">Sign up</Link>
        </p>

      </div>
    </div>
  );
}