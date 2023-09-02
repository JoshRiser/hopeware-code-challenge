import { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

Comic.propTypes = {
  comic: PropTypes.object,
}

function Comic({comic}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <>
      <div className={classnames(['comic', (loaded ? 'comic--loaded' : null)])}>
        <img src={comic.img} alt={comic.title} title={comic.alt} className="comic-image" onLoad={() => setLoaded(true)} />
        <div className="comic-details">
          <span className="details-num">#{comic.num}</span>
          <strong className="details-title">{comic.title}</strong>
          <span className="details-date">Date: {comic.month}/{comic.year}</span>
        </div>
      </div>
    </>
  )
}

export default Comic
