import React from "react"
import { useTranslation } from "react-i18next"

import Page from "../components/Page.component"

const HomePage = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <Page page="homePage">
      <h2>{t("homePage.title")}</h2>
    </Page>
  )
}

export default HomePage
