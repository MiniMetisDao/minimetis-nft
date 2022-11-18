import React from "react";
import { useTranslation } from "react-i18next";
import ReactMetaTags from "react-meta-tags";

import { Collection } from "components/Collection";
import { Layout } from "components/Layout";
import { PublicMint } from "components/Mint";

export const PublicMintPage: React.FC = () => {
  const { t } = useTranslation("publicMint");

  return (
    <Layout fullWidth padded={false}>
      <ReactMetaTags>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
      </ReactMetaTags>
      <PublicMint />
      <Collection />
    </Layout>
  );
};
