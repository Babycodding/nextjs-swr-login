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

const authenHost =
  "https://api-internal-sit.dohome.technology/authen-gm/oauth2/login";

export default function Home() {
  const { isBrowser } = useSSR();

  const [auth, setAuth] = useState<any>({
    username: "",
    password: "",
    moduleId: "web-authen",
  });

  const { loading, loggedOut, user, error, mutate } = useLogin(auth);

  const handleChange = (e: any) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleClick = () => {
    mutate(auth);
  };
  return (
    <>
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
