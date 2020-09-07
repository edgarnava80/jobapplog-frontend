import React, { useState } from "react"
import { useLocation } from "react-router"
import { useTranslation } from "react-i18next"

import Page from "../components/Page.component"

const ViewAppPage = () => {
  const location = useLocation()
  const [application, setApplication] = useState(location.state.app)
  const [t, i18n] = useTranslation("global")

  // const getApplication = async () => {
  //   try {
  //     const response = await Axios.post("/api/v1/applications")
  //     if (response.data) {
  //       //setApplication(response.data.data.applications)
  //       console.log("API call successfull!"+response.data)
  //     } else {
  //       console.log("Empty response.")
  //     }
  //   } catch (err) {
  //     console.log("There was an error in the API call: " + err)
  //   }
  // }

  const handleSubmit = e => {
    e.preventDefault()
    console.log("From handle submit")
  }
  const handleEdit = e => {
    e.preventDefault()
    console.log("From handle edit" + application)
  }
  return (
    <Page page="viewOnePage">
      <h2>{t("viewOnePage.title")}</h2>
      {console.log(application.company)}
      <div className="container mt-3">
        <form onSubmit={handleSubmit} classame="needs-validation" noValidate>
          <div className="row form-group">
            <div className="col-md-6">
              <label htmlFor="company" className="text-muted mb-2">
                {t("fields.company")}
              </label>
              <input onChange={e => setApplication({ ...application, company: e.target.value })} id="company" className="form-control  mb-2" type="text" value={application.company} autoComplete="off" autoFocus required />
            </div>
            <div className="col-md-6">
              <label htmlFor="position" className="text-muted mb-2">
                {t("fields.position")}
              </label>
              <input onChange={e => setApplication({ ...application, position: e.target.value })} id="position" className="form-control  mb-2" type="text" value={application.position} autoComplete="off" autoFocus required />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <label htmlFor="source" className="text-muted mb-2">
                {t("fields.source")}
              </label>
              <input onChange={e => setApplication({ ...application, source: e.target.value })} id="source" className="form-control  mb-2" type="text" value={application.source} autoComplete="off" autoFocus required />
            </div>
            <div className="col-md-6">
              <label htmlFor="contact" className="text-muted mb-2">
                {t("fields.contact")}
              </label>
              <input onChange={e => setApplication({ ...application, contact: e.target.value })} id="contact" className="form-control" type="text" value={application.contact} autoComplete="off" autoFocus />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="link" className="text-muted mb-2">
              {t("fields.link")}
            </label>
            <input onChange={e => setApplication({ ...application, link: e.target.value })} id="link" className="form-control" type="text" value={application.link} autoComplete="off" autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="post-body" className="text-muted mb-2">
              {t("fields.description")}
            </label>
            <textarea onChange={e => setApplication({ ...application, description: e.target.value })} id="description" className="tall-textarea form-control mb-3" type="text" value={application.description}></textarea>
          </div>
          <button onClick={handleEdit} className="btn btn-primary mr-5">
            {t("viewOnePage.buttonEdit")}
          </button>
          <button className="btn btn-primary">{t("viewOnePage.buttonDelete")}</button>
        </form>
      </div>
    </Page>
  )
}

export default ViewAppPage
