import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Login as LoginApi } from "../../services/apiAuth";

function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      LoginApi({
        email,
        password,
      }),
    onSuccess: (user) => {

      queryClient.setQueryData(["user"],user.user)
      navigate("/dashboard",{replace:true});
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });
  return { login, isLoading };
}

export default useLogin;
