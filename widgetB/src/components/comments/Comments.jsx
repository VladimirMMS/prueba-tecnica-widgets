
import PropTypes from 'prop-types'

export default function Comments({comment}) {
  return (
    <div className="comment-item">
    <p>{comment}</p>
  </div>
)
}

Comments.propTypes = {
    comment: PropTypes.string.isRequired,
  }
