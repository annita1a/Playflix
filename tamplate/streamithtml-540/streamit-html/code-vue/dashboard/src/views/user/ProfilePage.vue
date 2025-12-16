<template>
  <b-row>
    <b-col lg="12">
      <b-card>
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <div class="d-flex flex-wrap align-items-center">
            <div class="profile-img position-relative me-3 mb-3 mb-lg-0 profile-logo profile-logo1">
              <img src="/assets/images/author/01.png" alt="User-Profile"
                class="theme-color-default-img img-fluid rounded-pill avatar-100" loading="lazy" />
              <img src="/assets/images/author/02.png" alt="User-Profile"
                class="theme-color-purple-img img-fluid rounded-pill avatar-100" loading="lazy" />
              <img src="/assets/images/author/03.png" alt="User-Profile"
                class="theme-color-blue-img img-fluid rounded-pill avatar-100" loading="lazy" />
              <img src="/assets/images/author/04.png" alt="User-Profile"
                class="theme-color-green-img img-fluid rounded-pill avatar-100" loading="lazy" />
              <img src="/assets/images/author/05.png" alt="User-Profile"
                class="theme-color-yellow-img img-fluid rounded-pill avatar-100" loading="lazy" />
              <img src="/assets/images/author/06.png" alt="User-Profile"
                class="theme-color-pink-img img-fluid rounded-pill avatar-100" loading="lazy" />
            </div>
            <div class="d-flex flex-wrap align-items-center mb-3 mb-sm-0">
              <h4 class="me-2 h4">{{ $t('header.austin_robertson') }}</h4>
              <span> - {{ $t('user_profile.web_developer') }}</span>
            </div>
          </div>
          <ul
id="profile-pills-tab" class="d-flex nav nav-pills mb-0 text-center profile-tab" data-toggle="slider-tab"
            role="tablist">
            <li class="nav-item">
              <a
class="nav-link active show" data-bs-toggle="tab" href="#profile-feed" role="tab"
                aria-selected="true">{{ $t('user_profile.feed') }}</a>
            </li>
            <li class="nav-item">
              <a
class="nav-link" data-bs-toggle="tab" href="#profile-activity" role="tab"
                aria-selected="false">{{ $t('user_profile.activity') }}</a>
            </li>
            <li class="nav-item">
              <a
class="nav-link" data-bs-toggle="tab" href="#profile-friends" role="tab"
                aria-selected="false">{{ $t('user_profile.friends') }}</a>
            </li>
            <li class="nav-item">
              <a
class="nav-link" data-bs-toggle="tab" href="#profile-profile" role="tab"
                aria-selected="false">{{ $t('user_profile.profile') }}</a>
            </li>
          </ul>
        </div>
      </b-card>
    </b-col>
    <b-col lg="3">
      <news-widget></news-widget>
      <gallery-widget :list="gallery"></gallery-widget>
      <twitter-widget :list="feeds" />
    </b-col>

    <b-col lg="6">
      <div class="profile-content tab-content iq-tab-fade-up">
        <div id="profile-feed" class="tab-pane fade active show">
          <feed-widget name="user_profile.anna_sthesia" person1="user_profile.monty_carlo" person2="user_profile.paul_molive" />
        </div>
        <div id="profile-activity" class="tab-pane fade">
          <activity-widget />
        </div>
        <div id="profile-friends" class="tab-pane fade">
          <friends-widget :list="friends" />
        </div>
        <div id="profile-profile" class="tab-pane fade">
          <profile-widget
name="Austin Robertson" date="Feb 15, 2021" location="United States of America"
            email="austin@gmail.com" url="www.bootstrap.com" number="(001) 4544 565 456" />
        </div>
      </div>

    </b-col>
    <b-col lg="3">
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <h4 class="card-title">{{ $t('user_profile.about') }}</h4>
          </div>
        </div>
        <div class="card-body">
          <p>{{ $t('user_profile.lorem_ipsum1') }}</p>
          <div class="mb-1">{{ $t('user_profile.email') }}: <a href="#" class="ms-3">nikjone@demoo.com</a></div>
          <div class="mb-1">{{ $t('user_profile.phone') }}: <a href="#" class="ms-3">001 2351 256 12</a></div>
          <div>{{ $t('user_profile.location') }}: <span class="ms-3">USA</span></div>
        </div>
      </div>
      <story-widget :list="story" />
      <suggestion-widget :list="suggestion" />
    </b-col>
  </b-row>
</template>
<script>
import NewsWidget from '@/components/widgets/users/NewsWidget.vue';
import GalleryWidget from '@/components/widgets/users/GalleryWidget.vue';
import TwitterWidget from '@/components/widgets/users/TwitterWidget.vue';
import StoryWidget from '@/components/widgets/users/StoryWidget.vue';
import SuggestionWidget from '@/components/widgets/users/SuggestionWidget.vue';
import ActivityWidget from '@/components/widgets/users/ActivityWidget.vue';
import FriendsWidget from '@/components/widgets/users/FriendsWidget.vue';
import FeedWidget from '@/components/widgets/users/FeedWidget.vue';
import { useI18n } from 'vue-i18n'; // Import useI18n
import ProfileWidget from '@/components/widgets/users/ProfileWidget.vue';
export default {
  components: {
    NewsWidget,
    TwitterWidget,
    StoryWidget,
    SuggestionWidget,
    GalleryWidget,
    ActivityWidget,
    FriendsWidget,
    FeedWidget,
    ProfileWidget,
  },
  setup() {
    const { t } = useI18n(); // Get the t function
    const feeds = [
      {
        image: 'assets/images/avatars/03.png',
        heading: 'user_profile.wade_warren',
        subHeading: '@wade007',
  language1: 'user_profile.html',
  language2: 'user_profile.bootstrap',
        date: '07 Jan 2021',
        bgProfileColor: 'danger'
      },
      {
        image: 'assets/images/avatars/04.png',
        heading: 'user_profile.jane59',
        subHeading: '@jane59',
  language1: 'user_profile.js',
  language2: 'user_profile.bootstrap',
        date: '18 Feb 2021',
        bgProfileColor: 'primary'
      },
      {
        image: 'assets/images/avatars/02.png',
        heading: 'user_profile.guy_hawkins',
        subHeading: '@hawk_g',
  language1: 'user_profile.html',
  language2: 'user_profile.css',
        date: '15 Mar 2021',
        hrTag: "false",
        bgProfileColor: 'warning'
      },
    ];
    const friends = [
      {
        image: 'assets/images/avatars/01.png',
        name: 'user_profile.paul_molive',
        designation: 'Web Designer',
      },
      {
        image: 'assets/images/avatars/05.png',
        name: 'user_profile.paul_molive',
        designation: 'Trainee',
      },
      {
        image: 'assets/images/avatars/02.png',
        name: 'widgetcard.anna_mull',
        designation: 'Web Developer',
      },
      {
        image: 'assets/images/avatars/03.png',
        name: 'widgetcard.paige_turner',
        designation: 'Trainee',
      },
      {
        image: 'assets/images/avatars/04.png',
        name: 'user_profile.barb_ackue',
        designation: 'Web Designer',
      },
      {
        image: 'assets/images/avatars/05.png',
        name: 'user_profile.greta_life',
        designation: 'Tester',
      },
      {
        image: 'assets/images/avatars/03.png',
        name: 'user_profile.ira_membrit',
        designation: 'Android Developer',
      },
      {
        image: 'assets/images/avatars/02.png',
        name: 'user_profile.pete_sariya',
        designation: 'Web Designer',
      },
    ];
    const gallery = [
      {
        image: 'assets/images/author/01.png',
      },
      {
        image: 'assets/images/author/02.png',
      },
      {
        image: 'assets/images/author/03.png',
      },
      {
        image: 'assets/images/author/04.png',
      },
      {
        image: 'assets/images/author/05.png',
      },
      {
        image: 'assets/images/author/06.png',
      },
      {
        image: 'assets/images/gallary/08.png',
      },
      {
        image: 'assets/images/author/ava-monroe.webp',
      },
      {
        image: 'assets/images/author/jack-nicholson.webp',
      },
    ];
    const story = [
      {
        image: 'assets/images/author/02.png',
        design: 'user_profile.web_designer',
        time: '1 hour ago',
      },
      {
        image: 'assets/images/author/04.png',
        design: 'user_profile.app_design',
        time: '4 hour ago',
      },
      {
        image: 'assets/images/author/06.png',
        design: 'user_profile.abstract_design',
        time: '9 hour ago',
        margin_bottom: 'false'
      },
    ];
    const suggestion = [
      {
        image: 'assets/images/avatars/02.png',
        name: 'user_profile.paul_molive',
        mutualFriends: t('user_profile.mutual_friends', { count: 4 }),
      },
      {
        image: 'assets/images/avatars/03.png',
        name: 'widgetcard.robert_fox',
        mutualFriends: t('user_profile.mutual_friends', { count: 4 }),
      },
      {
        image: 'assets/images/avatars/04.png',
        name: 'widgetcard.jenny_wilson',
        mutualFriends: t('user_profile.mutual_friends', { count: 6 }),
      },
      {
        image: 'assets/images/avatars/05.png',
        name: 'widgetcard.cody_fisher',
        mutualFriends: t('user_profile.mutual_friends', { count: 8 }),
      },
      {
        image: 'assets/images/avatars/06.png',
        name: 'widgetcard.bessie_cooper',
        mutualFriends: t('user_profile.mutual_friends', { count: 1 }),
      },
      {
        image: 'assets/images/avatars/07.png',
        name: 'user_profile.wade_warren',
        mutualFriends: t('user_profile.mutual_friends', { count: 3 }),
      },
      {
        image: 'assets/images/avatars/08.png',
        name: 'user_profile.guy_hawkins',
        mutualFriends: t('user_profile.mutual_friends', { count: 12 }),
      },
      {
        image: 'assets/images/avatars/09.png',
        name: 'widgetcard.floyd_miles',
        mutualFriends: t('user_profile.mutual_friends', { count: 2 }),
        margin_bottom: 'false'
      },
    ];
    return {
      feeds,
      story,
      suggestion,
      gallery,
      friends,
    };
  },
};
</script>
