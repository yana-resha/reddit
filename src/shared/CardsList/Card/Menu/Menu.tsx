import React, { useEffect } from 'react';
import styles from './menu.css';
import {pickFromSyntheticEvent} from '../../../../utils/react/pickFromSyntheticEvent'
import { CardsList } from '../../CardsList';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../../generecList';
import {generateRandomIdForObject, generateRandomString} from '../../../../utils/react/generateId';
import { IconMenu } from '../../../Icons';
import { MenuItemsList } from './MenuItemsList';



interface IIdPost {
  postID: string;
}

export function Menu({postID}: IIdPost) {

  return (
    <div className={styles.menu}>
    <Dropdown  button={
      <button className={styles.menuButton}>
        <IconMenu />
      </button>}>
      <MenuItemsList postID={postID}/>
    </Dropdown>
    </div>
  );
}
