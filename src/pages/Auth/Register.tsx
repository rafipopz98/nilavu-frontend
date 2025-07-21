import { SignUpPage } from "../../components/ui/auth/sign-up";
import authPic from "/auth.jpeg";

const Register = () => {
  const handleSignUp = (data: { email: string; password: string }) => {
    console.log("Sign Up Data:", data);
  };
  return <SignUpPage heroImageSrc={authPic} onSignUp={handleSignUp} />;
};

export default Register;
