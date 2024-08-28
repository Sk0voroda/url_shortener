import { useAuth } from "./context/AuthProvider";

export const Home = () => {
  const { user } = useAuth();

  console.log(user);

  return <div>home</div>;
};
