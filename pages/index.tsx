import Router from "next/router";
import {
  Card,
  Text,
  Container,
  Row,
  Grid,
  Input,
  Button,
  useSSR,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import useLogin from "../service/authen/authen.hook";
import { mutate } from "swr";
import { authen } from "../service/authen/authen.fetch";
import Head from "next/head";

const authenHost = `${process.env.NEXT_PUBLIC_HOST_ENDPOINT}${process.env.NEXT_PUBLIC_API_AUTHEN}`;

export default function Home() {
  const { isBrowser } = useSSR();

  const [auth, setAuth] = useState<any>({
    username: "",
    password: "",
    moduleId: "web-authen",
  });

  // จะยิงตลอด
  // const { loading, loggedOut, user, error, mutate } = useLogin(auth);

  const handleChange = (e: any) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    if (auth.username !== "" && auth.password !== "") {
      mutate(authenHost, authen(auth)).then((res: any) => {
        Router.push({ pathname: "/dashboard" });
      });
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container css={{ h: "100%" }}>
        <Row justify="center" align="center" css={{ h: "100%" }}>
          <Card css={{ mw: "400px" }}>
            <Card.Body>
              <Text h2 css={{ textAlign: "center" }}>
                Login with SWR
              </Text>

              {isBrowser && (
                <Grid.Container>
                  <Grid xs={12} css={{ mb: 20 }}>
                    <Input
                      clearable
                      label="Username"
                      placeholder="Username"
                      width="100%"
                      name="username"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={12} css={{ mb: 20 }}>
                    <Input
                      clearable
                      label="Password"
                      placeholder="Password"
                      width="100%"
                      type="password"
                      name="password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid xs={12}>
                    <Button
                      css={{ display: "block", margin: "auto" }}
                      onClick={handleClick}
                    >
                      Sign in
                    </Button>
                  </Grid>
                </Grid.Container>
              )}
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}
