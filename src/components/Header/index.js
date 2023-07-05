import {Link, withRoute} from 'react'
import {HeaderCon, WebLogo} from './styledComponents'

const Header = () => (
  <HeaderCon>
    <Link to="/">
      <WebLogo
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </HeaderCon>
)

export default withRoute(Header)
