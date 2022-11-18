import React from "react";
import { useTranslation } from "react-i18next";
import ReactMetaTags from "react-meta-tags";

import { Collection } from "components/Collection";
import { Layout } from "components/Layout";
import { WhitelistMint } from "components/Mint";

export const MintPage: React.FC = () => {
  const { t } = useTranslation("mint");

  return (
    <Layout fullWidth padded={false}>
      <ReactMetaTags>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
      </ReactMetaTags>
      <WhitelistMint />
      <Collection />
    </Layout>
  );
};
