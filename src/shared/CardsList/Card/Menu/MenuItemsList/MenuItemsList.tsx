import React from 'react';
import { GenericList} from '../../../../../generecList';
import { generateRandomIdForObject } from '../../../../../utils/react/generateId';
import { IconBlock, IconComments, IconSave, IconShare, IconSpan } from '../../../../Icons';
import styles from './menuitemslist.css';
import { EColors, Text } from '../../../../Text';
import ReactDOM from 'react-dom';


const dropdownLIST = generateRandomIdForObject([
  {text: 'Комментарии',
   textSize: 14,
   desctopSizeText: 14,
   tabletSizeText: 14,
   colorText: EColors.grey66,
   AsText: 'span',
   As: 'li',
   className: `${styles.menuItem} ${styles.none}`,
   svg: <IconComments />,
  },
  {text: 'Поделиться',
  textSize: 14,
  desctopSizeText: 14,
  tabletSizeText: 14,
  colorText: EColors.grey66,
  AsText: 'span',
  As: 'li',
  className: `${styles.menuItem} ${styles.none}`,
  svg: <IconShare/>
  },
  {text: 'Скрыть',
  textSize: 14,
  desctopSizeText: 14,
  tabletSizeText: 14,
  colorText: EColors.grey66,
  AsText: 'span',
  As: 'li',
  className: `${styles.menuItem}`,
  svg: <IconBlock/>,
  },
  {text: 'Сохранить',
  textSize: 14,
  desctopSizeText: 14,
  tabletSizeText: 14,
  colorText: EColors.grey66,
  AsText: 'span',
  As: 'li',
  className: `${styles.menuItem} ${styles.none}`,
  svg: <IconSave />
  },
  {text: 'Пожаловаться',
  textSize: 14,
  desctopSizeText: 14,
  tabletSizeText: 14,
  colorText: EColors.grey66,
  AsText: 'span',
  As: 'li',
  className: `${styles.menuItem}`,
  svg: <IconSpan />
  },
  {text: 'Закрыть',
  textSize: 14,
  desctopSizeText: 14,
  tabletSizeText: 14,
  colorText: EColors.grey66,
  AsText: 'span',
  As: 'li',
  className: `${styles.closeButton} ${styles.closeNone}`,
  }
])

interface IMenuItemsListProp {
  postID: string;
}



export function MenuItemsList({postID} : IMenuItemsListProp) {

  dropdownLIST.forEach(obj => {
    obj.postID = postID;
  })
  return (
    <ul className={styles.dropdown}>
      <GenericList list={dropdownLIST}/>
    </ul>
  );
}

