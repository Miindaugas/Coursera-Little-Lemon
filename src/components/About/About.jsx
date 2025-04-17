import styles from './About.module.css'

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div>
        <h2>Little Lemon</h2>
        <p>Chicago</p>
        <p>
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who
          moved to the United States to pursue their shared dream of owning a
          restaurant.
        </p>
        <p>
          To craft the menu, Mario relies on family recipes and his experience
          as a chef in Italy. Adrian does all the marketing for the restaurant
          and led the effort to expand the menu beyond classic Italian to
          incorporate additional cuisines from the Mediterranean region.
        </p>
      </div>
      <div className={styles.gallery}>
        <img
          src={`${process.env.PUBLIC_URL}/asset/Mario%20and%20Adrian%20A.jpg`}
          alt="Mario and Adrian"
          width="270px"
        />
        <img
          src={`${process.env.PUBLIC_URL}/asset/Mario%20and%20Adrian%20b.jpg`}
          alt="Mario and Adrian"
          width="270px"
        />
      </div>
    </section>
  )
}
