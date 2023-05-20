import React from "react";
import { Layout, SEO } from "components/common";
import "./404.css";
import { Content } from "./styles";

export const PageNotFound = () => (
  <Layout>
    <SEO title="404: Not found" location="/404" />
    <Content>
      <h1>NOT FOUND</h1>
      <p>
        You just hit a route that doesn&#39;t exist... Please go back to{" "}
        <a href="https://aayannikhil.com" rel="noopener noreferrer">
          Home
        </a>
        .
      </p>
    </Content>
  </Layout>
);
