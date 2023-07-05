import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CourseItem from '../CourseItem'
import Header from '../Header'

import {
  HomeCon,
  LoaderCon,
  EmptyViewCon,
  EmptyImg,
  EmptyHeading,
  ErrorInfo,
  ErrorRetryButton,
  CourseListCon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {CourseList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getCourseList()
  }

  getCourseList = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.logo_url,
      }))
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickRetry = () => {
    this.getCourses()
  }

  renderLoader = () => (
    <LoaderCon>
      <Loader type="ThreeDots" color="#4656a1" height={50} width={50} />
    </LoaderCon>
  )

  renderFailureView = () => (
    <EmptyViewCon>
      <EmptyImg
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <EmptyHeading>Oops! Something Went Wrong</EmptyHeading>
      <ErrorInfo>
        We cannot seem to find the page you are looking for.
      </ErrorInfo>
      <ErrorRetryButton
        type="button"
        className="retry-button"
        onClick={this.onClickRetry}
      >
        Retry
      </ErrorRetryButton>
    </EmptyViewCon>
  )

  renderCoursesList = () => {
    const {CourseList} = this.state

    return (
      <CourseListCon>
        {CourseList.map(each => (
          <CourseItem key={each.id} courseDetails={each} />
        ))}
      </CourseListCon>
    )
  }

  renderCourses = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderCoursesList()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <HomeCon>
        <Header />
        {this.renderCourses()}
      </HomeCon>
    )
  }
}

export default Home
