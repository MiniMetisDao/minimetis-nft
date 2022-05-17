import React from "react";
import { useTranslation } from "react-i18next";
import ReactMetaTags from "react-meta-tags";

import { Home } from "components/Home";
import { Layout } from "components/Layout";

export const HomePage: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <Layout fullWidth padded={false}>
      <ReactMetaTags>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
      </ReactMetaTags>
      <Home />
    </Layout>
  );
};
