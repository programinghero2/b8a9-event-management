import { useContext } from 'react';
import { FaGoogle,FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SocialLogin = ({state}) => {
    const navigate = useNavigate()
    const {googleLogIn,githubLogIn} = useContext(AuthContext)
    const handleSocialLogin = media => {
        media()
        .then(() => {
            toast("Login Successfully")
            navigate(state)
        })
        .catch(error => {
            toast(error.message)
        })
    }
    return (
        <div className="flex flex-col mb-5 space-y-2 mt-3">
            <button onClick={() => handleSocialLogin(googleLogIn)} className="btn btn-outline text-[16px] normal-case">
                <FaGoogle></FaGoogle>
                Google
            </button>
            <button onClick={() => handleSocialLogin(githubLogIn)} className="btn btn-outline text-[16px] normal-case">
                <FaGithub></FaGithub>
                Github
            </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SocialLogin;