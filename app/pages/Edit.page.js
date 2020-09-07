import React, { useState, useContext } from "react"
import { withRouter } from "react-router-dom"
import { useLocation } from "react-router"
import { useTranslation } from "react-i18next"
import Axios from "axios"

import Page from "../components/Page.component"
import GeneralContext from "../GeneralContext"

const EditPage = props => {
  const location = useLocation()
  const addFlashMessage = useContext(GeneralContext)
  const [application, setApplication] = useState(location.state.app)
  const [t, i18n] = useTranslation("global")

  const updateApplication = async () => {
    const url = "/api/v1/applications/" + application._id
    try {
      const response = await Axios.patch(url, { company: application.company, position: application.position })
      if (response.data) {
        props.history.push("/view")
        console.log("Update successfull!" + response.data)
        addFlashMessage(application.company + t("editPage.messageEdit"))
      } else {
        console.log("Empty response from update application.")
      }
    } catch (err) {
      console.log("There was an error in update application: " + err)
    }
  }
  const deleteApplication = async () => {
    const url = "/api/v1/applications/" + application._id
    try {
      const response = await Axios.delete(url)
      props.history.push("/view")
      console.log("Delete successfull!")
      addFlashMessage(application.company + t("editPage.messageDelete"))
    } catch (err) {
      console.log("There was an error in delete application: " + err)
    }
  }

  const handleDelete = e => {
    e.preventDefault()
    deleteApplication()
  }
  const handleEdit = e => {
    e.preventDefault()
    updateApplication()
  }

  return (
    <Page page="editPage">
      <h2>{t("editPage.title")}</h2>
      <div className="container mt-3">
        <form classame="needs-validation" noValidate>
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
              <input onChange={e => setApplication({ ...application, position: e.target.value })} id="position" className="form-control  mb-2" type="text" value={application.position} autoComplete="off" required />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <label htmlFor="source" className="text-muted mb-2">
                {t("fields.source")}
              </label>
              <input onChange={e => setApplication({ ...application, source: e.target.value })} id="source" className="form-control  mb-2" type="text" value={application.source} autoComplete="off" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="contact" className="text-muted mb-2">
                {t("fields.contact")}
              </label>
              <input onChange={e => setApplication({ ...application, contact: e.target.value })} id="contact" className="form-control" type="text" value={application.contact} autoComplete="off" />
            </div>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="link" className="text-muted mb-2">
              {t("fields.link")}
            </label>
            <input onChange={e => setApplication({ ...application, link: e.target.value })} id="link" className="form-control" type="text" value={application.link} autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="post-body" className="text-muted mb-2">
              {t("fields.description")}
            </label>
            <textarea onChange={e => setApplication({ ...application, description: e.target.value })} id="description" className="tall-textarea form-control mb-3" type="text" value={application.description}></textarea>
          </div>
          <button onClick={handleEdit} className="btn btn-primary mr-3">
            {t("editPage.buttonEdit")}
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            {t("editPage.buttonDelete")}
          </button>
        </form>
      </div>
    </Page>
  )
}

export default withRouter(EditPage)
