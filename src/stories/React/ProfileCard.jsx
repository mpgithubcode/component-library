import PropTypes from "prop-types";
import Heading1 from "./Heading1";
import Label from "./Label";
import Stats from "./Stats";

function ProfileCard({ image, prof_pic, name, age, location, stats, styles }) {

  return (
    <div className="card-container" style={styles.container}>
      <img src={image} style={styles.image}/>
      <div className="content-container" style={styles.content}>
        <img src={prof_pic} style={styles.prof_pic} />
        <span style={styles.info}>
          <Heading1 text={name} styles={styles.name} />
          <Label text={age} styles={styles.age}/>
        </span>
        <Label text={location} styles={styles.location}/>

        <div style={styles.stat_div}>
          {stats.map((content) => (
            <Stats stat={content.stat} metric={content.metric} styles={styles.stats} />
          ))}
        </div>
      </div>
    </div>
  )
}

ProfileCard.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  location: PropTypes.string,
  stats: PropTypes.array,
  styles: PropTypes.object,
}

export default ProfileCard
