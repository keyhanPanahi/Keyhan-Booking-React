import { styled } from "styled-components";
import Spinner from "./Spinner";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const naviagate = useNavigate();
  //1.load athenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2.if there is no athenticated user redirect it to login page
  useEffect(function () {
    if (!isAuthenticated && !isLoading) naviagate("/login");
  }, [isAuthenticated,isLoading,naviagate]);

  //3.while loading show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4.if there is the user render the app
  if(isAuthenticated) return children;
}

export default ProtectedRoute;
