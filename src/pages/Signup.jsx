import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email to confirm your account");
      navigate("/login");
    }
  }

  return (
    // Vibrant purple background
    <div className="min-h-screen flex items-center justify-center bg-[#8B1CFF] p-4">
      {/* Centered White Card */}
      <div className="bg-white w-full max-w-[480px] rounded-sm py-12 px-8 md:px-12 flex flex-col items-center">
        
        <header className="text-center mb-8">
          <h1 className="text-[#8B1CFF] text-3xl font-bold mb-2">Create Your Account</h1>
          <p className="text-gray-500 text-lg">Sign up to manage your tools</p>
        </header>

        <form onSubmit={handleSignup} className="w-full space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border border-gray-200 p-4 rounded-md outline-none focus:border-[#8B1CFF] transition-colors placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="........"
              className="w-full border border-gray-200 p-4 rounded-md outline-none focus:border-[#8B1CFF] transition-colors placeholder:text-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-4 text-[#8B1CFF] font-medium text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="........"
              className="w-full border border-gray-200 p-4 rounded-md outline-none focus:border-[#8B1CFF] transition-colors placeholder:text-gray-400"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 bottom-4 text-[#8B1CFF] font-medium text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B1CFF] hover:bg-[#7a1ae0] text-white py-4 rounded-full text-lg font-semibold shadow-lg transition-all active:scale-[0.98]"
          >
            {loading ? "Creating account..." : "Sign up Account"}
          </button>
        </form>

        {/* Divider */}
        <div className="w-full flex items-center my-8">
          <div className="flex-grow border-t border-gray-100"></div>
          <span className="px-4 text-[#8B1CFF] text-sm">or</span>
          <div className="flex-grow border-t border-gray-100"></div>
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-md hover:bg-gray-50 transition-colors mb-6">
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

        {/* Footer Link */}
        <p className="text-gray-600">
          Already have an account? <Link to="/login" className="text-[#8B1CFF] font-bold">Log In</Link>
        </p>

      </div>
    </div>
  );
}