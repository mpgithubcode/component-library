import PropTypes from "prop-types";
import React from 'react'
import Label from './Label'

const Stats = ({ stat, metric, styles }) => {
  return (
    <div styles={styles.div}>
      <Label text={stat} styles={styles.stat} />
      <Label text={metric} styles={styles.metric}/>
    </div>
  )
}

Stats.propTypes = {
  stat: PropTypes.string,
  metric: PropTypes.string,
  styles: PropTypes.object,
} 

export default Stats
