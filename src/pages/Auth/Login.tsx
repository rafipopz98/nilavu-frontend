import { SignInPage } from "../../components/ui/auth/sign-in";
import authPic from "/auth.jpeg";

const Login = () => {
  const handleSignUp = (data: { email: string; password: string }) => {
    // Handle sign-up logic here
    console.log("Sign Up Data:", data);
  };
  return <SignInPage heroImageSrc={authPic} onSignIn={handleSignUp} />;
};

export default Login;
