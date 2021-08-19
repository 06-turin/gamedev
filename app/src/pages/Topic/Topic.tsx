import './styles.css';
import React, { FC, useEffect } from 'react';
import { GDButton } from 'components/atoms/GDButton/GDButton';
import classNames from 'classnames';
import avatarPlaceholder from 'assets/images/bomb.png';
import { useTranslation } from 'react-i18next';
import { BackButton } from 'components/molecules/BackButton/BackButton';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectComments, selectTopics } from 'store/forum/forumSelectors';
import { useMountEffect } from 'hooks/useMountEffect';
import {
  getCommentsAsync,
  setActiveCommentsPage,
  setActiveTopicTitle,
} from 'store/forum/forumActions';
import { useBoundAction } from 'hooks/useBoundAction';
import { Paginator } from 'components/molecules/Paginator/Paginator';
import { Comment } from 'api/types';
import { TopicRouteParamsType } from 'routes';

export type TopicPageProps = {
  className?: string
}

export const Topic: FC<TopicPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const getCommentsAsyncBounded = useBoundAction(getCommentsAsync);
  const setActiveTopicTitleBounded = useBoundAction(setActiveTopicTitle);
  const { activeTopicId, topicsList } = useSelector(selectTopics);
  const activeTopic = topicsList.find((topic) => topic.id === activeTopicId);
  const { commentsList, commentsPagesCount, activeCommentsPage } = useSelector(selectComments);
  const setActiveCommentsPageBounded = useBoundAction(setActiveCommentsPage);

  const { topicId } = useParams<TopicRouteParamsType>();

  setActiveTopicTitleBounded(activeTopic?.title);

  useMountEffect(() => getCommentsAsyncBounded({ topicId: activeTopicId || topicId, page: activeCommentsPage }));

  useEffect(() => getCommentsAsyncBounded(
    { topicId: activeTopicId, page: activeCommentsPage },
  ),
  [activeCommentsPage, activeTopicId, getCommentsAsyncBounded]);

  const renderComments = (comments: Comment[]) => comments.map(({
    username, updatedAt, text, avatar,
  }) => {
    const parsedDate = new Date(updatedAt).toLocaleDateString();

    return (
      <span className="topic__post">
        <div className="topic__author-container">
          <div className="topic__avatar-container">
            <img className="topic__avatar" src={avatar || avatarPlaceholder} alt="avatar" />
          </div>
          <span className="topic__username">{username}</span>
        </div>
        <div className="topic__content-container">
          <span>{parsedDate}</span>
          <span className="topic__content-text">{text}</span>
        </div>
      </span>
    );
  });

  return (
    <div className={classNames(['page', className])}>
      <h1 className="page__title">{t('topic')}</h1>
      <div className="topic">
        <span className="topic__title">{activeTopic?.title}</span>
        <div className="topic__posts-list">
          {renderComments(commentsList)}
        </div>
        <Paginator
          pagesCount={commentsPagesCount}
          currentPage={activeCommentsPage}
          pageChanger={setActiveCommentsPageBounded}
        />
      </div>
      <div className="page__footer-buttons">
        <BackButton />
        <GDButton title={t('new_post')} styleOption="secondary" size="l" onClick={() => history.push('/new-post')} />
      </div>
    </div>
  );
};
