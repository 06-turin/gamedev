import './Forum.css';
import React, { FC } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { dummyTopics, topicsListHeader } from 'pages/Forum/constants';

export type ForumPageProps = {
  className?: string
}

export const Forum: FC<ForumPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const listHeader = topicsListHeader.map((item) => t(item));

  return (
    <div className={classNames(['page', className])}>
      <h1 className="page__title">{t('forum')}</h1>

      <div className="forum">
        <span className="forum__header">
          {listHeader.map((item) => <GDButton title={item} styleOption="secondary" size="l" />)}
        </span>
        <div className="forum__topics-list">
          {dummyTopics.map(({
            topic,
            author,
            postCount,
            viewsCount,
            lastReplay,
          }) => (
            <span className="forum__topic-list-item">
              <span className="forum__topic-list-item_align-left">{topic}</span>
              <span>{author}</span>
              <span>{postCount}</span>
              <span>{viewsCount}</span>
              <time>{lastReplay}</time>
            </span>
          ))}
        </div>
      </div>

      <div className="page__footer-buttons">
        <BackButton />
      </div>
    </div>
  );
};
