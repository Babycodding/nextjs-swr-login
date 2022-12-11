import { Container, Grid, Text } from "@nextui-org/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { getUser } from "../service/authen/authen.fetch";
import styles from "../styles/Home.module.css";

export default function Home() {
  // const localJson: any = localStorage.getItem("userModule");
  // const [user, setUser] = useState(JSON.parse(localJson));
  const { data, isValidating } = useSWR("get_user", getUser);
  useEffect(() => {
    console.log(isValidating);
  }, [data, isValidating]);
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Grid.Container gap={2} justify="center">
        <Grid xs={8}>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              textAlign: "center",
              display: "block",
              margin: "auto",
            }}
            weight="bold"
          >
            {data?.userName}
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
}
