import React, { useEffect, useState, useContext } from "react"
import { withRouter } from "react-router-dom"
import Axios from "axios"
import { useTranslation } from "react-i18next"

import Page from "../components/Page.component"
import GeneralContext from "../GeneralContext"

const CreatePage = props => {
  const [company, setCompany] = useState()
  const [position, setPosition] = useState()
  //const [date, setDate] = useState()
  const [source, setSource] = useState()
  const [contact, setContact] = useState()
  const [link, setLink] = useState()
  const [description, setDescription] = useState()
  const addFlashMessage = useContext(GeneralContext)

  const [t, i18n] = useTranslation("global")
  const createApplication = async () => {
    try {
      const response = await Axios.post("/api/v1/applications", { company, position, source, contact, link, description })
      console.log("Application succesfully created!" + response)
      props.history.push("/view")
      addFlashMessage(company + t("createPage.message"))
    } catch (err) {
      console.log("There was an error in the API call: " + err)
    }
  }
  useEffect(() => {
    console.log("In useEffect")
  }, [])
  const handleSubmit = e => {
    e.preventDefault()
    createApplication()
    console.log("Form submitted")
  }

  return (
    <Page page="createPage">
      <h2>{t("createPage.title")}</h2>
      <div className="container mt-3">
        <form onSubmit={handleSubmit} classame="needs-validation" noValidate>
          <div className="row form-group">
            <div className="col-md-6">
              <label htmlFor="company" className="text-muted mb-2">
                {t("fields.company")}
              </label>
              <input onChange={e => setCompany(e.target.value)} id="company" className="form-control  mb-2" type="text" placeholder="" autoComplete="off" autoFocus required />
            </div>
            <div className="col-md-6">
              <label htmlFor="position" className="text-muted mb-2">
                {t("fields.position")}
              </label>
              <input onChange={e => setPosition(e.target.value)} id="position" className="form-control  mb-2" type="text" placeholder="" autoComplete="off" autoFocus required />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <label htmlFor="source" className="text-muted mb-2">
                {t("fields.source")}
              </label>
              <input onChange={e => setSource(e.target.value)} id="source" className="form-control  mb-2" type="text" placeholder="" autoComplete="off" autoFocus required />
            </div>
            <div className="col-md-6">
              <label htmlFor="contact" className="text-muted mb-2">
                {t("fields.contact")}
              </label>
              <input onChange={e => setContact(e.target.value)} id="contact" className="form-control" type="text" placeholder="" autoComplete="off" autoFocus />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="link" className="text-muted mb-2">
              {t("fields.link")}
            </label>
            <input onChange={e => setLink(e.target.value)} id="link" className="form-control" type="text" placeholder="" autoComplete="off" autoFocus />
          </div>
          <div className="form-group">
            <label htmlFor="post-body" className="text-muted mb-2">
              {t("fields.description")}
            </label>
            <textarea onChange={e => setDescription(e.target.value)} id="description" className="tall-textarea form-control mb-3" type="text"></textarea>
          </div>
          <button className="btn btn-primary">{t("createPage.button")}</button>
        </form>
      </div>
    </Page>
  )
}

export default withRouter(CreatePage)
