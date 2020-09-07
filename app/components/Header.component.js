import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Header = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <span className="navbar-brand mb-0">{t("header.title")}</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                {t("header.home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view">
                {t("header.view")}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                {t("header.create")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex btn-group">
          <button className="btn btn-secondary active" onClick={() => i18n.changeLanguage("en")}>
            EN
          </button>
          <button className="btn btn-secondary" onClick={() => i18n.changeLanguage("es")}>
            ES
          </button>
          <button className="btn btn-secondary" onClick={() => i18n.changeLanguage("fr")}>
            FR
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
