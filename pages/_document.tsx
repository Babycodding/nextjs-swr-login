import React from "react";
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
  DocumentContext,
} from "next/document";
import { CssBaseline } from "@nextui-org/react";

const Document = () => {
  return (
    <Html>
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export const getInitialProps: any = async (ctx: DocumentContext) => {
  return {
    props: {},
  };
};

export default Document;
