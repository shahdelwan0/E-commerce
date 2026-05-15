import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function RegisterPage() {
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    displayName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [apiError, setApiError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    if (apiError) setApiError(null);
  };

  const validate = () => {
    const errors = {};
    if (!form.displayName.trim()) errors.displayName = "Display name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-().]{7,20}$/.test(form.phone)) {
      errors.phone = "Enter a valid phone number.";
    }
    if (!form.password) {
      errors.password = "Password is required.";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/.test(form.password)) {
      errors.password = "Password must be 8-20 characters and include uppercase, lowercase, number, and special character (@$!%*?&).";
    }
    if (!form.confirmPassword) {
      errors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    const { confirmPassword, ...userData } = form;
    try {
      await register(userData);
      console.log("✅ Register successful");
      navigate("/");
    } catch (err) {
      const msg =
        err?.response?.data?.errors?.[0] ||
        err?.response?.data?.message ||
        "Registration failed. Please try again.";
      setApiError(msg);
    }
  };

  // label width is fixed so all inputs start at same column
  const labelCls = "w-32 shrink-0 pt-2.5 text-xs font-medium text-stone-600";
  const inputCls = (err) =>
    `w-full rounded-lg border px-3 py-2.5 text-sm text-stone-800 placeholder-stone-400 outline-none transition focus:ring-2 focus:ring-amber-400 focus:border-amber-400 ${err ? "border-red-400 bg-red-50" : "border-stone-300 bg-white hover:border-stone-400"
    }`;

  const EyeIcon = ({ open }) =>
    open ? (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
      </svg>
    ) : (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg">

        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-bold tracking-tight text-stone-900">
              SHOP<span className="text-amber-500">.</span>
            </span>
          </Link>
          <p className="mt-2 text-sm text-stone-500">Create your account to get started</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
          <h1 className="text-xl font-semibold text-stone-800 mb-6">Create an account</h1>

          {/* Global API error */}
          {apiError && (
            <div className="mb-5 flex items-start gap-3 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              <svg className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {apiError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">

            {/* Display Name */}
            <div>
              <div className="flex items-start gap-3">
                <label className={labelCls}>Display name</label>
                <input type="text" name="displayName" value={form.displayName} onChange={handleChange} placeholder="John Doe" className={inputCls(fieldErrors.displayName)} />
              </div>
              {fieldErrors.displayName && <p className="mt-1 ml-[8.5rem] text-xs text-red-600">{fieldErrors.displayName}</p>}
            </div>

            {/* Email */}
            <div>
              <div className="flex items-start gap-3">
                <label className={labelCls}>Email address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" className={inputCls(fieldErrors.email)} />
              </div>
              {fieldErrors.email && <p className="mt-1 ml-[8.5rem] text-xs text-red-600">{fieldErrors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-start gap-3">
                <label className={labelCls}>Phone number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="01xxxxxxxxx" className={inputCls(fieldErrors.phone)} />
              </div>
              {fieldErrors.phone && <p className="mt-1 ml-[8.5rem] text-xs text-red-600">{fieldErrors.phone}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-start gap-3">
                <label className={labelCls}>Password</label>
                <div className="relative flex-1">
                  <input type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} placeholder="Min. 8 characters" className={inputCls(fieldErrors.password) + " pr-10"} />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition" tabIndex={-1}>
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
              </div>
              {fieldErrors.password && <p className="mt-1 ml-[8.5rem] text-xs text-red-600">{fieldErrors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <div className="flex items-start gap-3">
                <label className={labelCls}>Confirm password</label>
                <div className="relative flex-1">
                  <input type={showConfirm ? "text" : "password"} name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Repeat your password" className={inputCls(fieldErrors.confirmPassword) + " pr-10"} />
                  <button type="button" onClick={() => setShowConfirm((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition" tabIndex={-1}>
                    <EyeIcon open={showConfirm} />
                  </button>
                </div>
              </div>
              {fieldErrors.confirmPassword && <p className="mt-1 ml-[8.5rem] text-xs text-red-600">{fieldErrors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <p className="ml-[8.5rem] text-xs text-stone-500 leading-relaxed">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-amber-600 hover:underline">Terms of Service</a>{" "}
              and{" "}
              <a href="#" className="text-amber-600 hover:underline">Privacy Policy</a>.
            </p>

            {/* Submit + Sign in link */}
            {/* Submit + Sign in link */}
            <div className="flex flex-col items-center gap-3 ml-[8.5rem]">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Creating…
                  </>
                ) : (
                  "Create account"
                )}
              </button>
              <span className="text-sm text-stone-500">
                Have an account?{" "}
                <Link to="/login" className="font-medium text-amber-600 hover:underline">Sign in</Link>
              </span>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}