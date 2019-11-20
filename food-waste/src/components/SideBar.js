import React from 'react';
import styles from './SideBar.module.css';
import Heart from './Heart';
import Search from './Search';
// import { Button, Icon, Label } from 'semantic-ui-react';

class SideBar extends React.Component {
	render() {
		return (
			<div className={styles.SideBar}>
				<div className={styles.Produkt}>Produkt</div>
				<Search />
				{/* <input className={styles.Input} />*/}
				<div className={styles.Quantity}>Ilość</div>
				<div className={styles.Kategory}>Kategoria</div>
				<div className={styles.Vawourites}>Ulubione</div>
				<Heart className={styles.Heart} />
			</div>
		);
	}
}

export default SideBar;
