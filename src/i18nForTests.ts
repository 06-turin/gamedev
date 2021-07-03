import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: {
    en: {
      translations: {
        main: 'main',
        login: 'login',
        registration: 'registration',
        forum: 'forum',
        leaderboard: 'leaderboard',
        game: 'game',
        submit: 'submit',
        back: 'back',
        profile: 'profile',
        type_your_login: 'type your login',
        break_everything: 'break everything',
        error: 'error',
        start_game: 'start game',
        game_over: 'game over',
        play_again: 'play again',
        bombs: 'bombs',
        timer: 'timer',
        score: 'score',
        stage: 'stage',
        victory: 'victory',
        continue: 'continue',
        on_no: 'oh no',
        this_page_was_destroyed: 'this page was destroyed',
        oops: 'oops',
        something_went_wrong: 'something went wrong',
        we_are_looking_to_see_what_happened: 'we are looking to see what happened',
        boom: 'boom',
        register: 'register',
        just_play: 'just play',
        or: 'or',
        name: 'name',
        last_name: 'last name',
        'e-mail': 'e-mail',
        phone: 'phone',
        password: 'password',
        repeat: 'repeat',
        settings: 'settings',
        play: 'play',
        avatar: 'avatar',
        edit: 'edit',
        profile_edit: 'profile edit',
        nickname: 'nickname',
        remove_avatar: 'remove avatar',
        upload_avatar: 'upload avatar',
        change_password: 'change password',
        new_password: 'new password',
        password_edit: 'password edit',
        logout: 'logout',
        no_account: 'no account',
        topic: 'topic',
        author: 'author',
        posts: 'posts',
        views: 'views',
        last_reply: 'last reply',
        start_new_topic: 'start new topic',
        new_post: 'new post',
        type_your_message_here: 'type your message here',
        post: 'post',
        save: 'save',
        email: 'email',
        first_name: 'first name',
        second_name: 'second name',
        display_name: 'display name',
        updated_successfully: 'updated successfully',
        'no_account_?': 'no account ?',
        'register_!': 'register !',
        'just_play_!': 'just play !',
        'loading...': 'loading...',
        are_you_sure: 'are you sure',
        yes: 'yes',
        no: 'no',
        cancel: 'cancel',
        ok: 'ok',
      }
      ,
    },
  },
});

export default i18n;
