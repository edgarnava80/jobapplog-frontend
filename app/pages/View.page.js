import React, { useEffect, useState } from "react"
import Axios from "axios"
import { useTranslation } from "react-i18next"

import Page from "../components/Page.component"
import AppCard from "../components/AppCard.component"

const ViewPage = () => {
  const [applications, setApplications] = useState([])
  const [t, i18n] = useTranslation("global")

  const getApplications = async () => {
    try {
      const response = await Axios("/api/v1/applications")
      if (response.data) {
        setApplications(response.data.data.applications)
        console.log("API call successfull!")
      } else {
        console.log("Empty response.")
      }
    } catch (err) {
      console.log("There was an error in the API call: " + err)
    }
  }

  useEffect(() => {
    getApplications()
  }, [])

  return (
    <Page page="viewAllPage">
      <h2>{t("viewAllPage.title")}</h2>
      <div className="row g-2 mt-4">
        {applications.map(app => (
          <div key={app._id} className="col-md-6">
            <AppCard app={app} />
          </div>
        ))}
      </div>
    </Page>
  )
}

export default ViewPage
