import React from "react";
import { Navbar, Button, Link, Text, useSSR } from "@nextui-org/react";
import useSWR from "swr";
import { getUser } from "../../service/authen/authen.fetch";
import Head from "next/head";

interface Iprops {
  children?: React.ReactNode;
}

const RootLayout = ({ children }: Iprops) => {
  const { isBrowser } = useSSR();
  const { data, isValidating } = useSWR("get_user", getUser);

  return (
    <>
      <Head>
        <title>Welcome {data?.userName}</title>
      </Head>
      {isBrowser && (
        <Navbar isBordered variant={"static"}>
          <Navbar.Brand>
            {/* <AcmeLogo /> */}
            <Text b color="inherit" hideIn="xs">
              Dohome
            </Text>
          </Navbar.Brand>
          {/* <Navbar.Content hideIn="xs">
            <Navbar.Link href="#">Features</Navbar.Link>
            <Navbar.Link isActive href="#">
              Customers
            </Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Company</Navbar.Link>
          </Navbar.Content> */}
          <Navbar.Content>
            <Navbar.Item>
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
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
      )}

      {children}
    </>
  );
};

export default RootLayout;
