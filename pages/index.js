import React from 'react'
import { initStore, initialCards, addItem } from '../store'
import styles from './index.module.css'
import Card from '../pages/Card'
import Link from 'next/link';

class Index extends React.Component {
  // static async getInitialProps({ store }) {
  //   return store.dispatch(initialCards());
  // }
  static getInitialProps = initStore.getInitialAppProps((store) => async () => {
    return store.dispatch(initialCards());
  });
  render() {
    return (
      <div className={styles.app}>

        <header className={styles.header}>
          <Link href="/page2">

            <img src="/logo.png" className={styles.logo} alt="logo" />
          </Link>
        </header>
        <div className={styles.grid}>
          {this.props.cards.map(card => (
            <Card key={card.id} />
          ))}
        </div>
        {/* <button onClick={() => dispatch(addItem(item))}>Add Item</button> */}
      </div>
    )
  }
}

export default initStore.withRedux(Index)