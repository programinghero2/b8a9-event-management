import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUser,profileUpdate} = useContext(AuthContext)
    const handleUser = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const fName = form.get("Fname");
        const LName = form.get("Lname");
        const name = fName + " " + LName;
        console.log(name)
        const imgeUrl = form.get("imageUrl");
        const email = form.get("email");
        const password = form.get("password")
        e.currentTarget.reset()
        if(password.length < 6) {
           return  toast("password must be 6 character")
        }
        if(!/^(?=.*[A-Z])(?=.*[\W_]).+$/.test(password)){
            return toast("password must be one capital letter and special character")
        }
        createUser(email,password)
        .then((result) => {
            toast("Register Successfully!")
            profileUpdate(name,imgeUrl)
            console.log(result.user)
        })
        .catch(error => {
            toast(error.message)
        })
    }
    return (
        <div className="mt-10 mb-10">
            <h1 className="text-3xl font-bold text-center">Register Now!</h1>
            <div className="w-3/4 mx-auto flex justify-center ">
                <form onSubmit={handleUser} className=" w-full md:w-3/4 lg:w-1/2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" placeholder="First name" name="Fname" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" placeholder="Last Name" name="Lname" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="Image URL" name="imageUrl" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Register</button>
                        <ToastContainer />
                        <p className="mt-3">Already Account? please <Link className="text-blue-600" to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;