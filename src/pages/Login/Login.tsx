import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    const params = {
      login: login,
      password: password,
    };

    console.log(params);
  };

  return (
    <Layout>
      <h1>Login</h1>
      <form>
        <Input
          type="text"
          id="login"
          name="login"
          label="Login"
          onChange={handleLogin}
          placeholder="digite seu email"
        />

        <Input
          label="Senha"
          type="password"
          id="password"
          name="password"
          onChange={handlePassword}
        />

        <Button type="button" onClick={handleClick}>
          Login
        </Button>

        {/* <button type="button" onClick={handleClick}>
          Login
        </button> */}
      </form>
    </Layout>
  );
}
