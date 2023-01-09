import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const constantStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

class CowinDashboard extends Component {
  state = {data: [], status: constantStates.initial}

  componentDidMount() {
    this.getCovidDetails()
  }

  successView = () => {
    const {data} = this.state
    const {
      updatedLast7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = data

    return (
      <>
        <VaccinationCoverage details={updatedLast7DaysVaccination} />
        <VaccinationByGender details={vaccinationByGender} />
        <VaccinationByAge details={vaccinationByAge} />
      </>
    )
  }

  failureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-text-head">Something went wrong</h1>
    </div>
  )

  updateData = data => {
    const last7DaysVaccination = data.last_7_days_vaccination
    const vaccinationByAge = data.vaccination_by_age
    const vaccinationByGender = data.vaccination_by_gender

    const updatedLast7DaysVaccination = last7DaysVaccination.map(each => ({
      vaccineDate: each.vaccine_date,
      dose1: each.dose_1,
      dose2: each.dose_2,
    }))

    const details = {
      updatedLast7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    }
    this.setState({data: details, status: constantStates.success})
  }

  getCovidDetails = async () => {
    this.setState({status: constantStates.loading})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(vaccinationDataApiUrl)
    if (response.ok === true) {
      const data = await response.json()
      this.updateData(data)
    }
    if (response.ok === false) {
      this.setState({status: constantStates.failure})
      this.failureView()
    }
  }

  coWinDetails = () => {
    const {status} = this.state

    switch (status) {
      case constantStates.loading:
        return this.loader()
      case constantStates.success:
        return this.successView()
      case constantStates.failure:
        return this.failureView()
      default:
        return null
    }
  }

  renderLogoAndHeader = () => (
    <div className="logo-header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
        alt="website logo"
        className=" website-logo"
      />
      <h1 className="website-logo-heading">Co-WIN</h1>
    </div>
  )

  loader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    return (
      <div className="main-container">
        {this.renderLogoAndHeader()}
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        {this.coWinDetails()}
      </div>
    )
  }
}

export default CowinDashboard
