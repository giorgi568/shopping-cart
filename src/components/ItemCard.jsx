import styles from '../styles/ItemCard.module.css';

export default function ItemCard({ item }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{item.title}</h3>
      <div className={styles.wrapper}>
        <img
          src={item.image}
          alt='image of the product'
          className={styles.img}
        />
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{item.description}</p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.wrapper2}>
          <div className={styles.ratingWrapper}>
            <img src='./star.svg' alt='rating' />
            <p>{item.rating.rate}</p>
          </div>
          <div className={styles.ratingWrapper}>
            <img src='./group.svg' alt='count' />
            <p>{item.rating.count}</p>
          </div>
        </div>
        <p className={styles.price}> {item.price}$ </p>
      </div>
    </div>
  );
}