import React from 'react';
import styles from './PublicDate.css';
import luxon, {DateTime, Duration, Interval} from 'luxon'
import humanizeDuration from 'humanize-duration';

export function PublicDate({postCreated}) {
  let utcDate =  postCreated;
  let date = new Date(utcDate * 1000);
  let validDate = DateTime.local(date.getFullYear(), date.getMonth() + 1, date.getDate()).setLocale('ru').toFormat('d MMMM yyyy');
  const today = DateTime.now().setLocale('ru').toFormat('d MMMM yyyy');
  const now = new Date();
  const publicHours = (now.getHours() - date.getHours());
  const minutesDur = humanizeDuration(Duration.fromObject({minutes: now.getMinutes()}).minus(Duration.fromObject({minutes: date.getMinutes()})), {language: 'ru'});
  const hoursDur = humanizeDuration(Duration.fromObject({hours: now.getHours()}).minus(Duration.fromObject({hours: date.getHours()})), {language: 'ru'});

  let publicDate;
  if (validDate === today) {
    if (publicHours === 0) {
      publicDate = `${minutesDur} назад`;
    } else {
      publicDate = `${hoursDur} назад`;
    }
  } else {
    publicDate = validDate;
  }

  return (
    <span className={styles.createdAt}>
    <span className={styles.publishedLabel}>Опубликовано </span>
      {publicDate}
    </span>
  );
}
