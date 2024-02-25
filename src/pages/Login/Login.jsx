import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
const Login = () => {
    const { singInUser} = useContext(AuthContext)
    const { state } = useLocation()
    const navigate = useNavigate()
    const handleSingIn = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email");
        const password = form.get("password")
        e.currentTarget.reset()
        singInUser(email, password)
            .then(() => {
                toast("Login Successfully")
                navigate(state)
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="mt-16">
            <h1 className="text-3xl font-bold text-center">Login Now!</h1>
            <div className="lg:w-3/4 mx-auto flex justify-center items-center">
                <form onSubmit={handleSingIn} className=" w-3/4 md:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary ">Login</button>
                        <p className="mt-3">Don't have Accont? Please <Link className="text-blue-600" to="/register">Register</Link></p>
                    </div>
                    {/* social login */}
                    <div className="flex items-center gap-5 mt-5">
                        <div className="w-60 h-[1px] bg-gray-400"></div>
                        <div>Or</div>
                        <div className="w-60 h-[1px] bg-gray-400"></div>
                    </div>
                    <SocialLogin state={state}></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;