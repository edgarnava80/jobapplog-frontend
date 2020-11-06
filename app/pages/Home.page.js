import React from { useState } 'react'
import { useTranslation } from 'react-i18next'
import Axios from 'axios'

import Page from '../components/Page.component'

const HomePage = () => {
  const [t, i18n] = useTranslation('global')
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [newUsername, setNewUsername] = useState()
  const [newEmail, setNewEmail] = useState()
  const [newPassword, setNewPassword] = useState()

  const handleLogin = async e => {
    e.PreventDefault()
    try{
      const res = await Axios.post('/api/v1/users', {username,password})
      
    }catch(err){
      console.log("Error loggin in.",err);
    }
  }
  const handleRegister = () => {}
  
  return (
    <Page page='homePage'>
      <p className='display-6 text-center'>{t('homePage.title')}</p>
      <div className='row row-cols-1 row-cols-md-2 align-items-center'>
        <div className='col p-2 mb-5'>
          <p className='text-muted h4'>{t('homePage.intro')}</p>
          <form onSubmit={handleLogin}>
            <div className='form-group'>
              <label htmlFor='username-register' className='text-muted mb-1'>
                <small>{t('homePage.username')}</small>
              </label>
              <input onChange={e => setUsername(e.target.value)} id='username-register' name='username' className='form-control' type='text' placeholder={t('homePage.loginusr')} autoComplete='off' />
            </div>
            <div className='form-group'>
              <label htmlFor='password-register' className='text-muted mb-1'>
                <small>{t('homePage.password')}</small>
              </label>
              <input onChange={e => setPassword(e.target.value)} id='password-register' name='password' className='form-control' type='password' placeholder={t('homePage.loginpass')} />
            </div>
            <button type='submit' className='px-4 mt-4 btn btn-success'>
              {t('homePage.login')}
            </button>
          </form>
        </div>
        <div className='col'>
          <p className='h5 text-center'>{t('homePage.signupmessage')}</p>
          <form onSubmit={handleRegister}>
            <div className='form-group'>
              <label htmlFor='username-register' className='text-muted mb-1'>
                <small>{t('homePage.username')}</small>
              </label>
              <input onChange={e => setNewUsername(e.target.value)} id='username-register' name='username' className='form-control' type='text' placeholder={t('homePage.signupusr')} autoComplete='off' />
            </div>
            <div className='form-group'>
              <label htmlFor='email-register' className='text-muted mb-1'>
                <small>{t('homePage.email')}</small>
              </label>
              <input onChange={e => setNewEmail(e.target.value)} id='email-register' name='email' className='form-control' type='text' placeholder={t('homePage.signupemail')} autoComplete='off' />
            </div>
            <div className='form-group'>
              <label htmlFor='password-register' className='text-muted mb-1'>
                <small>{t('homePage.password')}</small>
              </label>
              <input onChange={e => setNewPassword(e.target.value)} id='password-register' name='password' className='form-control' type='password' placeholder={t('homePage.signuppass')} />
            </div>
            <button type='submit' className='mt-4 btn btn-success'>
              {t('homePage.signup')}
            </button>
          </form>
        </div>
      </div>
    </Page>
  )
}

export default HomePage
