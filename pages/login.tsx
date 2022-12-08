import {
  Card,
  Text,
  Container,
  Row,
  Grid,
  Input,
  Button,
} from "@nextui-org/react";

// const authenHost = "https://api-internal-sit.dohome.technology";
// const host = `${authenHost}/authen-gm/oauth2/login`;
// username: "",
//     password: "",
//     moduleId: "web-authen",

export default function Home() {
  return (
    <Container css={{ h: "100%" }}>
      <Row justify="center" align="center" css={{ h: "100%" }}>
        <Card css={{ mw: "400px" }}>
          <Card.Body>
            <Text h2 css={{ textAlign: "center" }}>
              Login with SWR
            </Text>
            <Grid.Container>
              <Grid xs={12} css={{ mb: 20 }}>
                <Input
                  clearable
                  label="Username"
                  placeholder="Username"
                  width="100%"
                />
              </Grid>
              <Grid xs={12} css={{ mb: 20 }}>
                <Input
                  clearable
                  label="Password"
                  placeholder="Password"
                  width="100%"
                  type="password"
                />
              </Grid>
              <Grid xs={12}>
                <Button css={{ display: "block", margin: "auto" }}>
                  Signin
                </Button>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
