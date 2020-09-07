import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

import Container from "./Container.component"

const Page = props => {
  const [t, i18n] = useTranslation("global")
  useEffect(() => {
    document.title = `${t(props.page + ".page")} | JobAppLog`
    window.scrollTo(0, 0)
  }, [])

  return <Container title={t(props.page + ".title")}>{props.children}</Container>
}

export default Page
