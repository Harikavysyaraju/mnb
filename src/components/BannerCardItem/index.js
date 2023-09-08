// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {a} = props
  const {headerText, description, className} = a

  return (
    <li className={className}>
      <div>
        <h1 className="d">{headerText}</h1>
        <p className="e">{description}</p>
        <button type="button" className="f">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem

/* Write your code here. */
