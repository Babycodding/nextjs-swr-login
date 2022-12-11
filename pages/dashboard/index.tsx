import {
  Container,
  Grid,
  Collapse,
  Text,
  Card,
  Link,
  Input,
  Spacer,
  useSSR,
  Loading,
} from "@nextui-org/react";
import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import {
  Detail,
  getApp,
  Root,
  Root2,
} from "../../service/application/application.fetch";
import LayoutNav from "./layout";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const { isBrowser } = useSSR();

  const { data, isValidating } = useSWR(["get_app", search], getApp);
  return (
    <LayoutNav>
      <Container
        css={{
          width: "500px",
          backgroundColor: "$background",
          mt: "$8",
          minHeight: "500px",
          borderRadius: "5px",
        }}
      >
        <Grid.Container gap={2}>
          <Grid xs={12} css={{ mt: "$10" }}>
            {isBrowser && (
              <Input
                clearable
                bordered
                labelPlaceholder="Search Application"
                width="100%"
                onChange={(e: any) => {
                  setSearch(e.target.value);
                }}
                // initialValue="Search Application"
              />
            )}
          </Grid>
        </Grid.Container>
        {isValidating ? (
          <Grid.Container gap={2} justify="center">
            <Loading />
          </Grid.Container>
        ) : (
          <Grid.Container gap={2} justify="center">
            {data?.map((item: Root2, index: number) => {
              return (
                <Grid xs={12} key={index} css={{ d: "block" }}>
                  <Collapse.Group css={{ width: "100%" }}>
                    <Collapse title={item.categories_name} shadow>
                      {item.details.map((details: Detail, inx: number) => {
                        return (
                          <Card
                            css={{
                              mt: "$10",
                              p: "$6",
                              mw: "400px",
                              backgroundColor: "$backgroundContrast",
                            }}
                            key={inx}
                          >
                            <Card.Header>
                              {/* <img
                            alt="nextui logo"
                            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                            width="34px"
                            height="34px"
                          /> */}
                              <Grid.Container css={{ pl: "$6" }}>
                                <Grid xs={12}>
                                  <Text h4 css={{ lineHeight: "$xs" }}>
                                    {details.program_name}
                                  </Text>
                                </Grid>
                                <Grid xs={12}>
                                  <Text css={{ color: "$accents8" }}>
                                    {details.url_name}
                                  </Text>
                                </Grid>
                              </Grid.Container>
                            </Card.Header>
                            <Card.Footer>
                              <Link
                                // icon
                                color="primary"
                                target="_blank"
                                href={details.url_name}
                              >
                                เข้าใช้งาน {details.program_name}
                              </Link>
                            </Card.Footer>
                          </Card>
                        );
                      })}
                    </Collapse>
                  </Collapse.Group>
                </Grid>
              );
            })}
          </Grid.Container>
        )}
      </Container>
    </LayoutNav>
  );
}
