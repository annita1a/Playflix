<template>
  <b-row>
    <b-col sm="12">
      <div class="streamit-wraper-table">
        <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{ $t('sidebar.movies') }} </span>
          </h2>
          <b-button variant="primary" @click="offcanvasEnd = true"><i class="fa-solid fa-plus me-2"></i>{{ $t('movielist.add_movie') }}</b-button>
        </b-card-header>
        <div class="table-view table-space">
          <table id="seasonTable" ref="tableRef1" class="data-tables data-table-one table custom-table movie_table dataTable no-footer">
            <thead>
              <tr class="text-uppercase">
                <th
                  class="sorting sorting_asc"
                  tabindex="0"
                  aria-controls="seasonTable"
                  rowspan="1"
                  colspan="1"
                  aria-sort="ascending"
                  aria-label="
                                
                            : activate to sort column descending">
                  <input type="checkbox" class="form-check-input" />
                </th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Image: activate to sort column ascending">Image</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Title: activate to sort column ascending">Title</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Author: activate to sort column ascending">Author</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Date and Time: activate to sort column ascending">Date and Time</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Views: activate to sort column ascending">Views</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending">Status</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending">Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <b-offcanvas v-model="offcanvasEnd" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative">
              {{ $t('movielist.add_new_movie') }}
            </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd = false"></button>
        </template>
        <b-form class="section-form">
          <b-row>
            <b-col lg="4">
              <InputField :label="$t('addpage.title')" name="name" type="text" :placeholder="$t('addpage.enter-title-movie')" />
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
                <select ref="addAuthor" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor">
                  <option value="0" selected>Admin</option>
                </select>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
                <select ref="addStatus" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus">
                  <option value="0">Published</option>
                  <option value="1">Draft</option>
                </select>
              </div>
            </b-col>
          </b-row>

          <b-row class="mb-5">
            <QuillPage :quill-title="$t('addpage.content')" />
          </b-row>

          <b-row>
            <b-col lg="3">
              <UploadImageVideo :upload-image-name="$t('addpage.thumbnail')" />
            </b-col>
            <b-col lg="9">
              <div class="form-group">
                <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.excerpt') }} </label>
                <textarea id="Description" class="form-control" rows="7" :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="streamit-tabs-card">
            <b-card-body>
              <b-row class="gy-4">
                <!-- Vertical Tab Nav -->
                <b-col lg="3">
                  <div class="streamit-verticle-tab">
                    <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs" role="tablist" aria-orientation="vertical">
                      <button class="nav-link" :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">
                        <span>{{ $t('addpage.general') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'recommended' }" @click="activeTab = 'recommended'">
                        <span>{{ $t('addpage.recommended_movies') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'related' }" @click="activeTab = 'related'">
                        <span>{{ $t('addpage.related_videos') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'cast' }" @click="activeTab = 'cast'">
                        <span>{{ $t('addpage.cast') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'crew' }" @click="activeTab = 'crew'">
                        <span>{{ $t('addpage.crew') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'sources' }" @click="activeTab = 'sources'">
                        <span>{{ $t('addpage.sources') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'genres' }" @click="activeTab = 'genres'">
                        <span>{{ $t('addpage.genres') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'tags' }" @click="activeTab = 'tags'">
                        <span>{{ $t('addpage.tags') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'additional' }" @click="activeTab = 'additional'">
                        <span>{{ $t('addpage.additional_data') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'membership' }" @click="activeTab = 'membership'">
                        <span>{{ $t('addpage.membership-level') }}</span>
                      </button>
                    </div>
                  </div>
                </b-col>

                <!-- Tab Content -->
                <b-col lg="9" class="edit-tab-content">
                  <div id="streamit-tabs-content" class="tab-content">
                    <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="movieMethod">{{ $t('addpage.choose-movie-method') }}</label>
                              <select ref="addMovieMethod" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddMovieMethod">
                                <option value="0">Upload movie</option>
                                <option value="1">Embed movie</option>
                                <option value="2">Movie URL</option>
                              </select>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <UploadImageVideo :upload-image-name="$t('addpage.upload-movie')" :is-required-star="true" />
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.movie-release-date')" name="name" type="date" :placeholder="$t('addpage.enter-the-release-date-movie')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <b-row>
                              <label class="form-label">{{ $t('addpage.movie-time-duration') }}</label>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="hours" value="0" :placeholder="$t('authentication.hours')" min="0" aria-invalid="false" />
                                </div>
                              </b-col>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="minutes" value="0" :placeholder="$t('authentication.minutes')" min="0" max="59" aria-invalid="false" />
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.movie-censor-rating')" name="_movie_censor_rating" type="text" :placeholder="$t('addpage.enter-the-movie-censor-rating')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="genres">{{ $t('addpage.language') }}</label>
                              <select ref="language" class="form-control select2-basic-multiple" multiple>
                                <option>Upload movie</option>
                                <option>Embed movie</option>
                                <option>Movie URL</option>

                                <option>Afrikaans</option>
                                <option>አማርኛ</option>
                                <option>Aragonés</option>
                                <option>العربية</option>
                                <option>العربية المغربية</option>
                                <option>অসমীয়া</option>
                                <option>گؤنئی آذربایجان</option>
                                <option>Azərbaycan dili</option>
                                <option>Беларуская мова</option>
                                <option>Български</option>
                                <option>বাংলা</option>
                                <option>བོད་ཡིག</option>
                                <option>Bosanski</option>
                                <option>Català</option>
                                <option>Cebuano</option>
                                <option>Čeština</option>
                                <option>Cymraeg</option>
                                <option>Dansk</option>
                                <option>Deutsch (Schweiz)</option>
                                <option>Deutsch</option>
                                <option>Deutsch (Sie)</option>
                                <option>Deutsch (Österreich)</option>
                                <option>Deutsch (Schweiz, Du)</option>
                                <option>Dolnoserbšćina</option>
                                <option>རྫོང་ཁ</option>
                                <option>Ελληνικά</option>
                                <option>English (South Africa)</option>
                                <option>English (Australia)</option>
                                <option>English (UK)</option>
                                <option>English (New Zealand)</option>
                                <option>English (Canada)</option>
                                <option>Esperanto</option>
                                <option>Español de Perú</option>
                                <option>Español de México</option>
                                <option>Español de Colombia</option>
                                <option>Español</option>
                                <option>Español de Venezuela</option>
                                <option>Español de Ecuador</option>
                                <option>Español de República Dominicana</option>
                                <option>Español de Uruguay</option>
                                <option>Español de Puerto Rico</option>
                                <option>Español de Guatemala</option>
                                <option>Español de Costa Rica</option>
                                <option>Español de Chile</option>
                                <option>Español de Argentina</option>
                                <option>Eesti</option>
                                <option>Euskara</option>
                                <option>(فارسی (افغانستان</option>
                                <option>فارسی</option>
                                <option>Suomi</option>
                                <option>Français du Canada</option>
                                <option>Français</option>
                                <option>Français de Belgique</option>
                                <option>Friulian</option>
                                <option>Frysk</option>
                                <option>Gàidhlig</option>
                                <option>Galego</option>
                                <option>ગુજરાતી</option>
                                <option>هزاره گی</option>
                                <option>עִבְרִית</option>
                                <option>हिन्दी</option>
                                <option>Hrvatski</option>
                                <option>Hornjoserbšćina</option>
                                <option>Magyar</option>
                                <option>Հայերեն</option>
                                <option>Bahasa Indonesia</option>
                                <option>Íslenska</option>
                                <option>Italiano</option>
                                <option>日本語</option>
                                <option>Basa Jawa</option>
                                <option>ქართული</option>
                                <option>Taqbaylit</option>
                                <option>Қазақ тілі</option>
                                <option>ភាសាខ្មែរ</option>
                                <option>ಕನ್ನಡ</option>
                                <option>한국어</option>
                                <option>كوردی‎</option>
                                <option>Кыргызча</option>
                                <option>ພາສາລາວ</option>
                                <option>Lietuvių kalba</option>
                                <option>Latviešu valoda</option>
                                <option>Македонски јазик</option>
                                <option>മലയാളം</option>
                                <option>Монгол</option>
                                <option>मराठी</option>
                                <option>Bahasa Melayu</option>
                                <option>ဗမာစာ</option>
                                <option>Norsk bokmål</option>
                                <option>नेपाली</option>
                                <option>Nederlands (Formeel)</option>
                                <option>Nederlands (België)</option>
                                <option>Nederlands</option>
                                <option>Norsk nynorsk</option>
                                <option>Occitan</option>
                                <option>ਪੰਜਾਬੀ</option>
                                <option>Polski</option>
                                <option>پښتو</option>
                                <option>Português (AO90)</option>
                                <option>Português do Brasil</option>
                                <option>Português de Angola</option>
                                <option>Português</option>
                                <option>Ruáinga</option>
                                <option>Română</option>
                                <option>Русский</option>
                                <option>Сахалыы</option>
                                <option>سنڌي</option>
                                <option>සිංහල</option>
                                <option>Slovenčina</option>
                                <option>سرائیکی</option>
                                <option>Slovenščina</option>
                                <option>Shqip</option>
                                <option>Српски језик</option>
                                <option>Svenska</option>
                                <option>Kiswahili</option>
                                <option>Ślōnskŏ gŏdka</option>
                                <option>தமிழ்</option>
                                <option>தமிழ்</option>
                                <option>తెలుగు</option>
                                <option>ไทย</option>
                                <option>Tagalog</option>
                                <option>Türkçe</option>
                                <option>Татар теле</option>
                                <option>Reo Tahiti</option>
                                <option>ئۇيغۇرچە</option>
                                <option>Українська</option>
                                <option>اردو</option>
                                <option>O‘zbekcha</option>
                                <option>Tiếng Việt</option>
                                <option>简体中文</option>
                                <option>繁體中文</option>
                                <option>香港中文</option>
                              </select>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="recommendedMovies_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'recommended' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="genres">{{ $t('addpage.recommended_movies') }}</label>
                          <select ref="recommendedMovies" class="select2-basic-single form-control" multiple>
                            <option>Pushpa</option>
                            <option>The Conjuring</option>
                            <option>Giikre</option>
                            <option>Another Danger</option>
                            <option>Kung Fu Panda</option>
                            <option>John Wick</option>
                            <option>Spiderman</option>
                            <option>War For The Planet</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="relatedVideos_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'related' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group mb-0">
                          <label class="form-label flex-grow-1" for="related_videos">{{ $t('addpage.related_videos') }}</label>
                          <select ref="related_videos" class="form-control select2-basic-multiple" multiple>
                            <option>Little Krishna</option>
                            <option>Red Dog</option>
                            <option>Frozen</option>
                            <option>Titanic</option>
                            <option>Adventure</option>
                            <option>Kung Fu Panda</option>
                            <option>Red</option>
                            <option>The Crew</option>
                            <option>Synchronic</option>
                            <option>Lost In Space</option>
                            <option>The Dragon King</option>
                            <option>Sonil</option>
                            <option>Guilty</option>
                            <option>Toddler</option>
                            <option>Charlie Chaplin</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="cast_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'cast' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row class="gy-2">
                          <b-col lg="6">
                            <div class="form-group mb-0">
                              <label class="form-label flex-grow-1" for="choose_cast">{{ $t('addpage.choose-cast') }}</label>
                               <div class="d-flex gap-2">
                                  <div class="flex-grow-1">
                                  <select ref="addchooseCast" class="form-control select2-basic-multiple flex-grow-1" :tabindex="tabindexaddchooseCast">
                                      <option>Select Cast</option>
                                      <option>Ava Monroe</option>
                                      <option>Charles Melton</option>
                                      <option>Jack Nicholson</option>
                                      <option>James Stewart</option>
                                      <option>Jeff Bridges</option>
                                      <option>Jordan Grant</option>
                                      <option>Mark Smith</option>
                                      <option>Maxwell Carter</option>
                                      <option>Ruby Scott</option>
                                      <option>Michael Fox</option>
                                      <option>Ryan Pierce</option>
                                      <option>John Abraham</option>
                                      <option>Leena Burton</option>
                                      <option>Davina Decorous</option>
                                      <option>Thomas Bailey</option>
                                      <option>Kelly Reilly</option>
                                      <option>Smith Jonas</option>
                                      <option>Angel Louis</option>
                                      <option>Millar Joseph</option>
                                      <option>Mark Wilson</option>
                                      <option>Jack Walker</option>
                                      <option>Benjamin Hayes</option>
                                      <option>Olivia Foster</option>
                                      <option>Ethan Crawford</option>
                                      <option>Oliver Turner</option>
                                      <option>Maria Rodriguez</option>
                                    </select>
                                  </div>
                                  <button type="button" class="btn btn-primary">{{ $t('addpage.add-btn') }}</button>
                               </div>  
                            </div>
                          </b-col>                 
                        </b-row>
                      </div>
                    </div>
                    <div id="crew_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'crew' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row class="gy-2">
                          <b-col lg="6">
                            <div class="form-group mb-0">
                              <label class="form-label flex-grow-1" for="choose_crew">{{ $t('addpage.choose-crew-member') }}</label>
                               <div class="d-flex gap-2">
                                  <div class="flex-grow-1">
                                    <select ref="addchooseCrew" class="form-control select2-basic-multiple flex-grow-1" :tabindex="tabindexaddchooseCrew">
                                        <option>Select Crew</option>
                                        <option>Ava Monroe</option>
                                        <option>Charles Melton</option>
                                        <option>Jack Nicholson</option>
                                        <option>James Stewart</option>
                                        <option>Jeff Bridges</option>
                                        <option>Jordan Grant</option>
                                        <option>Mark Smith</option>
                                        <option>Maxwell Carter</option>
                                        <option>Ruby Scott</option>
                                        <option>Michael Fox</option>
                                        <option>Ryan Pierce</option>
                                        <option>John Abraham</option>
                                        <option>Leena Burton</option>
                                        <option>Davina Decorous</option>
                                        <option>Thomas Bailey</option>
                                        <option>Kelly Reilly</option>
                                        <option>Smith Jonas</option>
                                        <option>Angel Louis</option>
                                        <option>Millar Joseph</option>
                                        <option>Mark Wilson</option>
                                        <option>Jack Walker</option>
                                        <option>Benjamin Hayes</option>
                                        <option>Olivia Foster</option>
                                        <option>Ethan Crawford</option>
                                        <option>Oliver Turner</option>
                                        <option>Maria Rodriguez</option>
                                      </select>
                                  </div>
                                  <button type="button" class="btn btn-primary">{{ $t('addpage.add-btn') }}</button>
                                </div>
                              </div>  
                            </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="sources_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'sources' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <addSource />
                      </div>
                    </div>
                    <div id="genres_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'genres' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_genres">{{ $t('addpage.choose-movie-genres') }}</label>
                          <select ref="choice_genres" class="form-control select2-basic-multiple" multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Animation</option>
                            <option>Crime</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Romance</option>
                            <option>Action moview</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_tags">{{ $t('addpage.choose-movie-tags') }}</label>
                          <select id="choice_tags" ref="choice_tags" class="form-control select2-basic-multiple" multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Animation</option>
                            <option>Assassin</option>
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Family</option>
                            <option>Fantasy</option>
                            <option>History</option>
                            <option>Hitman</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Recommended</option>
                            <option>Revenge</option>
                            <option>Sci-Fi</option>
                            <option>Thriller</option>
                            <option>Animated Tag</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="additionData_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'additional' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.trailer-link')" name="Download URL" type="text" :placeholder="$t('addpage.enter-trailer-link')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.upcoming') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault3"> {{ $t('addpage.this-is-upcoming-movie') }}</label>
                              </div>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <UploadImageVideo :upload-image-name="$t('addpage.upload-potrait-image')" />
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label" for="imdb_rating">{{ $t('addpage.enter_imdb_rating') }}</label>
                              <input id="imdb_rating" type="number" class="form-control" value="0" aria-invalid="false" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="select_related_product">{{ $t('addpage.select-related-product') }}</label>
                              <select id="select_related_product" ref="select_related_product" class="form-control select2-basic-multiple" multiple>
                                <option>WordPress Pennant</option>
                                <option>Logo Collection</option>
                                <option>Beanie with Logo</option>
                                <option>T-Shirt with Logo</option>
                                <option>Single</option>
                                <option>Album</option>
                                <option>Polo</option>
                                <option>Long Sleeve Tee</option>
                                <option>Hoodie with Zipper</option>
                                <option>Hoodie with Pocket</option>
                                <option>Sunglasses</option>
                                <option>Cap</option>
                                <option>Belt</option>
                                <option>Beanie</option>
                                <option>T-Shirt</option>
                                <option>Hoodie with Logo</option>
                                <option>Hoodie</option>
                                <option>V-Neck T-Shirt</option>
                                <option>Round Neck T-Shirt</option>
                                <option>Magic Hat</option>
                                <option>Spider Cover</option>
                                <option>Sleeping Mask</option>
                                <option>Phone Cover</option>
                                <option>Black Bow</option>
                                <option>Coffee Cup</option>
                                <option>Boxing Gloves</option>
                                <option>Crown</option>
                                <option>Bag Pack</option>
                                <option>Vehicle Keychain</option>
                                <option>Green Specs</option>
                                <option>Cartoon Character</option>
                                <option>Red &amp; Black T-Shirt</option>
                                <option>Logo T-Shirt</option>
                                <option>Believe Mask</option>
                                <option>Keychain</option>
                                <option>Socks</option>
                                <option>Harry T-Shirt</option>
                                <option>Sunglasses</option>
                                <option>Black Cap</option>
                                <option>Round Badges</option>
                                <option>Carry Bag</option>
                                <option>Glossy Mug</option>
                                <option>Spider Pillow logo</option>
                                <option>Daily Diary</option>
                                <option>Floral Badges</option>
                              </select>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.upcoming') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault31" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault31"> {{ $t('addpage.this-is-upcoming-movie') }} </label>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="membershipLevel_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'membership' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="pmp_levels">{{ $t('addpage.choose-pmp-levels') }}</label>
                          <select ref="pmp_levels" class="form-control select2-basic-multiple" multiple>
                            <option>free</option>
                            <option>Monthly level</option>
                            <option>Annual</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-form>
        <template #footer>
          <div class="offcanvas-footer border-top">
            <div class="d-flex gap-3 p-3">
              <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2" @click="offcanvasEnd = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
        </template>
      </b-offcanvas>
      <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0" :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative">
              {{ $t('movielist.edit_new_movie') }}
            </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close" @click="offcanvasEnd1 = false"></button>
        </template>
        <b-form class="section-form">
          <b-row>
            <b-col lg="4">
              <InputField :label="$t('addpage.title')" name="name" type="text" model-value="arrival 1999" :placeholder="$t('addpage.enter-title-movie')" />
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
                <select ref="addAuthor1" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor1">
                  <option value="0" selected>Admin</option>
                </select>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
                <select ref="addStatus1" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus1">
                  <option value="0">Published</option>
                  <option value="1">Draft</option>
                </select>
              </div>
            </b-col>
          </b-row>

          <b-row class="mb-5">
            <QuillPage :quill-title="$t('addpage.content')" />
          </b-row>

          <b-row>
            <b-col lg="3">
              <UploadImageVideo :is-upload-image-default="true" :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" :upload-image-name="$t('addpage.thumbnail')" />
            </b-col>
            <b-col lg="9">
              <div class="form-group">
                <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.excerpt') }} </label>
                <textarea id="Description" class="form-control" rows="7" :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="streamit-tabs-card">
            <b-card-body>
              <b-row class="gy-4">
                <!-- Vertical Tab Nav -->
                <b-col lg="3">
                  <div class="streamit-verticle-tab">
                    <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs" role="tablist" aria-orientation="vertical">
                      <button class="nav-link" :class="{ active: activeTab === 'general' }" @click="activeTab = 'general'">
                        <span>{{ $t('addpage.general') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'recommended' }" @click="activeTab = 'recommended'">
                        <span>{{ $t('addpage.recommended_movies') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'related' }" @click="activeTab = 'related'">
                        <span>{{ $t('addpage.related_videos') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'cast' }" @click="activeTab = 'cast'">
                        <span>{{ $t('addpage.cast') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'crew' }" @click="activeTab = 'crew'">
                        <span>{{ $t('addpage.crew') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'sources' }" @click="activeTab = 'sources'">
                        <span>{{ $t('addpage.sources') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'genres' }" @click="activeTab = 'genres'">
                        <span>{{ $t('addpage.genres') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'tags' }" @click="activeTab = 'tags'">
                        <span>{{ $t('addpage.tags') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'additional' }" @click="activeTab = 'additional'">
                        <span>{{ $t('addpage.additional_data') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'membership' }" @click="activeTab = 'membership'">
                        <span>{{ $t('addpage.membership-level') }}</span>
                      </button>
                    </div>
                  </div>
                </b-col>

                <!-- Tab Content -->
                <b-col lg="9" class="edit-tab-content">
                  <div id="streamit-tabs-content" class="tab-content">
                    <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="movieMethod1">{{ $t('addpage.choose-movie-method') }}</label>
                              <select ref="addMovieMethod1" class="form-control select2-basic-multiple" :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddMovieMethod1">
                                <option value="0">Upload movie</option>
                                <option value="1">Embed movie</option>
                                <option value="2">Movie URL</option>
                              </select>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <UploadImageVideo :is-upload-image-default="true" :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" :upload-image-name="$t('addpage.upload-movie')" :is-required-star="true" />
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.movie-release-date')" model-value="January 17, 2025" name="name" type="date" :placeholder="$t('addpage.enter-the-release-date-movie')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <b-row>
                              <label class="form-label">{{ $t('addpage.movie-time-duration') }}</label>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="hours" value="2" :placeholder="$t('authentication.hours')" min="0" aria-invalid="false" />
                                </div>
                              </b-col>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="minutes" value="30" :placeholder="$t('authentication.minutes')" min="0" max="59" aria-invalid="false" />
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.movie-censor-rating')" model-value="NC-17" name="_movie_censor_rating" type="text" :placeholder="$t('addpage.enter-the-movie-censor-rating')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="genres1">{{ $t('addpage.language') }}</label>
                              <select ref="language1" class="form-control select2-basic-multiple" multiple>
                                <option selected>Upload movie</option>
                                <option>Embed movie</option>
                                <option>Movie URL</option>
                                <option>Afrikaans</option>
                                <option>አማርኛ</option>
                                <option>Aragonés</option>
                                <option>العربية</option>
                                <option>العربية المغربية</option>
                                <option>অসমীয়া</option>
                                <option>گؤنئی آذربایجان</option>
                                <option>Azərbaycan dili</option>
                                <option>Беларуская мова</option>
                                <option>Български</option>
                                <option>বাংলা</option>
                                <option>བོད་ཡིག</option>
                                <option>Bosanski</option>
                                <option>Català</option>
                                <option>Cebuano</option>
                                <option>Čeština</option>
                                <option>Cymraeg</option>
                                <option>Dansk</option>
                                <option>Deutsch (Schweiz)</option>
                                <option>Deutsch</option>
                                <option>Deutsch (Sie)</option>
                                <option>Deutsch (Österreich)</option>
                                <option>Deutsch (Schweiz, Du)</option>
                                <option>Dolnoserbšćina</option>
                                <option>རྫོང་ཁ</option>
                                <option>Ελληνικά</option>
                                <option>English (South Africa)</option>
                                <option>English (Australia)</option>
                                <option>English (UK)</option>
                                <option>English (New Zealand)</option>
                                <option>English (Canada)</option>
                                <option>Esperanto</option>
                                <option>Español de Perú</option>
                                <option>Español de México</option>
                                <option>Español de Colombia</option>
                                <option>Español</option>
                                <option>Español de Venezuela</option>
                                <option>Español de Ecuador</option>
                                <option>Español de República Dominicana</option>
                                <option>Español de Uruguay</option>
                                <option>Español de Puerto Rico</option>
                                <option>Español de Guatemala</option>
                                <option>Español de Costa Rica</option>
                                <option>Español de Chile</option>
                                <option>Español de Argentina</option>
                                <option>Eesti</option>
                                <option>Euskara</option>
                                <option>(فارسی (افغانستان</option>
                                <option>فارسی</option>
                                <option>Suomi</option>
                                <option>Français du Canada</option>
                                <option>Français</option>
                                <option>Français de Belgique</option>
                                <option>Friulian</option>
                                <option>Frysk</option>
                                <option>Gàidhlig</option>
                                <option>Galego</option>
                                <option>ગુજરાતી</option>
                                <option>هزاره گی</option>
                                <option>עִבְרִית</option>
                                <option>हिन्दी</option>
                                <option>Hrvatski</option>
                                <option>Hornjoserbšćina</option>
                                <option>Magyar</option>
                                <option>Հայերեն</option>
                                <option>Bahasa Indonesia</option>
                                <option>Íslenska</option>
                                <option>Italiano</option>
                                <option>日本語</option>
                                <option>Basa Jawa</option>
                                <option>ქართული</option>
                                <option>Taqbaylit</option>
                                <option>Қазақ тілі</option>
                                <option>ភាសាខ្មែរ</option>
                                <option>ಕನ್ನಡ</option>
                                <option>한국어</option>
                                <option>كوردی‎</option>
                                <option>Кыргызча</option>
                                <option>ພາສາລາວ</option>
                                <option>Lietuvių kalba</option>
                                <option>Latviešu valoda</option>
                                <option>Македонски јазик</option>
                                <option>മലയാളം</option>
                                <option>Монгол</option>
                                <option>मराठी</option>
                                <option>Bahasa Melayu</option>
                                <option>ဗမာစာ</option>
                                <option>Norsk bokmål</option>
                                <option>नेपाली</option>
                                <option>Nederlands (Formeel)</option>
                                <option>Nederlands (België)</option>
                                <option>Nederlands</option>
                                <option>Norsk nynorsk</option>
                                <option>Occitan</option>
                                <option>ਪੰਜਾਬੀ</option>
                                <option>Polski</option>
                                <option>پښتو</option>
                                <option>Português (AO90)</option>
                                <option>Português do Brasil</option>
                                <option>Português de Angola</option>
                                <option>Português</option>
                                <option>Ruáinga</option>
                                <option>Română</option>
                                <option>Русский</option>
                                <option>Сахалыы</option>
                                <option>سنڌي</option>
                                <option>සිංහල</option>
                                <option>Slovenčina</option>
                                <option>سرائیکی</option>
                                <option>Slovenščina</option>
                                <option>Shqip</option>
                                <option>Српски језик</option>
                                <option>Svenska</option>
                                <option>Kiswahili</option>
                                <option>Ślōnskŏ gŏdka</option>
                                <option>தமிழ்</option>
                                <option>தமிழ்</option>
                                <option>తెలుగు</option>
                                <option>ไทย</option>
                                <option>Tagalog</option>
                                <option>Türkçe</option>
                                <option>Татар теле</option>
                                <option>Reo Tahiti</option>
                                <option>ئۇيغۇرچە</option>
                                <option>Українська</option>
                                <option>اردو</option>
                                <option>O‘zbekcha</option>
                                <option>Tiếng Việt</option>
                                <option>简体中文</option>
                                <option>繁體中文</option>
                                <option>香港中文</option>
                              </select>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="recommendedMovies_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'recommended' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="genres1">{{ $t('addpage.recommended_movies') }}</label>
                          <select ref="recommendedMovies1" class="select2-basic-single form-control" multiple>
                            <option>Pushpa</option>
                            <option>The Conjuring</option>
                            <option>Giikre</option>
                            <option>Another Danger</option>
                            <option>Kung Fu Panda</option>
                            <option>John Wick</option>
                            <option>Spiderman</option>
                            <option>War For The Planet</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="relatedVideos_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'related' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group mb-0">
                          <label class="form-label flex-grow-1" for="related_videos1">{{ $t('addpage.related_videos') }}</label>
                          <select ref="related_videos1" class="form-control select2-basic-multiple" multiple>
                            <option>Little Krishna</option>
                            <option>Red Dog</option>
                            <option>Frozen</option>
                            <option>Titanic</option>
                            <option>Adventure</option>
                            <option>Kung Fu Panda</option>
                            <option>Red</option>
                            <option>The Crew</option>
                            <option>Synchronic</option>
                            <option>Lost In Space</option>
                            <option>The Dragon King</option>
                            <option>Sonil</option>
                            <option>Guilty</option>
                            <option>Toddler</option>
                            <option>Charlie Chaplin</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="cast_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'cast' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row class="gy-2">
                          <b-col lg="6">
                            <div class="form-group mb-0">
                              <label class="form-label flex-grow-1" for="choose_cast1">{{ $t('addpage.choose-cast') }}</label>
                              <div class="d-flex gap-2">  
                                <div class="flex-grow-1">
                                  <select ref="addchooseCast1" class="form-control select2-basic-multiple flex-grow-1" :tabindex="tabindexaddchooseCast1">
                                    <option>Select Cast</option>
                                    <option>Ava Monroe</option>
                                    <option>Charles Melton</option>
                                    <option>Jack Nicholson</option>
                                    <option>James Stewart</option>
                                    <option>Jeff Bridges</option>
                                    <option>Jordan Grant</option>
                                    <option>Mark Smith</option>
                                    <option>Maxwell Carter</option>
                                    <option>Ruby Scott</option>
                                    <option>Michael Fox</option>
                                    <option>Ryan Pierce</option>
                                    <option>John Abraham</option>
                                    <option>Leena Burton</option>
                                    <option>Davina Decorous</option>
                                    <option>Thomas Bailey</option>
                                    <option>Kelly Reilly</option>
                                    <option>Smith Jonas</option>
                                    <option>Angel Louis</option>
                                    <option>Millar Joseph</option>
                                    <option>Mark Wilson</option>
                                    <option>Jack Walker</option>
                                    <option>Benjamin Hayes</option>
                                    <option>Olivia Foster</option>
                                    <option>Ethan Crawford</option>
                                    <option>Oliver Turner</option>
                                    <option>Maria Rodriguez</option>
                                  </select>
                                </div>
                                <button type="button" class="btn btn-primary">{{ $t('addpage.add-btn') }}</button>
                            </div>
                          </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="crew_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'crew' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row class="gy-2">
                          <b-col lg="6">
                            <div class="form-group mb-0">
                              <label class="form-label flex-grow-1" for="choose_crew1">{{ $t('addpage.choose-crew-member') }}</label>
                                <select ref="addchooseCrew1" class="form-control select2-basic-multiple flex-grow-1" :tabindex="tabindexaddchooseCrew1">
                                  <option>Select Crew</option>
                                  <option>Ava Monroe</option>
                                  <option>Charles Melton</option>
                                  <option>Jack Nicholson</option>
                                  <option>James Stewart</option>
                                  <option>Jeff Bridges</option>
                                  <option>Jordan Grant</option>
                                  <option>Mark Smith</option>
                                  <option>Maxwell Carter</option>
                                  <option>Ruby Scott</option>
                                  <option>Michael Fox</option>
                                  <option>Ryan Pierce</option>
                                  <option>John Abraham</option>
                                  <option>Leena Burton</option>
                                  <option>Davina Decorous</option>
                                  <option>Thomas Bailey</option>
                                  <option>Kelly Reilly</option>
                                  <option>Smith Jonas</option>
                                  <option>Angel Louis</option>
                                  <option>Millar Joseph</option>
                                  <option>Mark Wilson</option>
                                  <option>Jack Walker</option>
                                  <option>Benjamin Hayes</option>
                                  <option>Olivia Foster</option>
                                  <option>Ethan Crawford</option>
                                  <option>Oliver Turner</option>
                                  <option>Maria Rodriguez</option>
                                </select>
                            </div>
                          </b-col>
                          <b-col lg="4">
                            <button type="button" class="btn btn-primary">{{ $t('addpage.add-btn') }}</button>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="sources_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'sources' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <addSource />
                      </div>
                    </div>
                    <div id="genres_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'genres' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_genres1">{{ $t('addpage.choose-movie-genres') }}</label>
                          <select ref="choice_genres1" class="form-control select2-basic-multiple" multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Animation</option>
                            <option>Crime</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Romance</option>
                            <option>Action moview</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_tags1">{{ $t('addpage.choose-movie-tags') }}</label>
                          <select id="choice_tags1" ref="choice_tags1" class="form-control select2-basic-multiple" multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Animation</option>
                            <option>Assassin</option>
                            <option>Comedy</option>
                            <option>Drama</option>
                            <option>Family</option>
                            <option>Fantasy</option>
                            <option>History</option>
                            <option>Hitman</option>
                            <option>Horror</option>
                            <option>Mystery</option>
                            <option>Recommended</option>
                            <option>Revenge</option>
                            <option>Sci-Fi</option>
                            <option>Thriller</option>
                            <option>Animated Tag</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="additionData_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'additional' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <InputField :label="$t('addpage.trailer-link')" name="Download URL" type="text" model-value="https://www.youtube.com/" :placeholder="$t('addpage.enter-trailer-link')" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.upcoming') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault3"> {{ $t('addpage.this-is-upcoming-movie') }}</label>
                              </div>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <UploadImageVideo :is-upload-image-default="true" :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" :upload-image-name="$t('addpage.upload-potrait-image')" />
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label" for="imdb_rating">{{ $t('addpage.enter_imdb_rating') }}</label>
                              <input id="imdb_rating" type="number" class="form-control" value="5" aria-invalid="false" />
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group mb-0">
                              <label class="form-label flex-grow-1" for="select_related_product1">{{ $t('addpage.select-related-product') }}</label>
                              <select id="select_related_product1" ref="select_related_product1" class="form-control select2-basic-multiple" multiple>
                                <option>WordPress Pennant</option>
                                <option>Logo Collection</option>
                                <option>Beanie with Logo</option>
                                <option>T-Shirt with Logo</option>
                                <option>Single</option>
                                <option>Album</option>
                                <option>Polo</option>
                                <option>Long Sleeve Tee</option>
                                <option>Hoodie with Zipper</option>
                                <option>Hoodie with Pocket</option>
                                <option>Sunglasses</option>
                                <option>Cap</option>
                                <option>Belt</option>
                                <option>Beanie</option>
                                <option>T-Shirt</option>
                                <option>Hoodie with Logo</option>
                                <option>Hoodie</option>
                                <option>V-Neck T-Shirt</option>
                                <option>Round Neck T-Shirt</option>
                                <option>Magic Hat</option>
                                <option>Spider Cover</option>
                                <option>Sleeping Mask</option>
                                <option>Phone Cover</option>
                                <option>Black Bow</option>
                                <option>Coffee Cup</option>
                                <option>Boxing Gloves</option>
                                <option>Crown</option>
                                <option>Bag Pack</option>
                                <option>Vehicle Keychain</option>
                                <option>Green Specs</option>
                                <option>Cartoon Character</option>
                                <option>Red &amp; Black T-Shirt</option>
                                <option>Logo T-Shirt</option>
                                <option>Believe Mask</option>
                                <option>Keychain</option>
                                <option>Socks</option>
                                <option>Harry T-Shirt</option>
                                <option>Sunglasses</option>
                                <option>Black Cap</option>
                                <option>Round Badges</option>
                                <option>Carry Bag</option>
                                <option>Glossy Mug</option>
                                <option>Spider Pillow logo</option>
                                <option>Daily Diary</option>
                                <option>Floral Badges</option>
                              </select>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.upcoming') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault31" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault31"> {{ $t('addpage.this-is-upcoming-movie') }} </label>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="membershipLevel_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'membership' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="pmp_levels1">{{ $t('addpage.choose-pmp-levels') }}</label>
                          <select ref="pmp_levels1" class="form-control select2-basic-multiple" multiple>
                            <option>free</option>
                            <option>Monthly level</option>
                            <option>Annual</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
        </b-form>
        <template #footer>
          <div class="offcanvas-footer border-top">
            <div class="d-flex gap-3 p-3">
              <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2" @click="offcanvasEnd1 = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
        </template>
      </b-offcanvas>
    </b-col>
  </b-row>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import QuillPage from '@/components/widgets/QuillPage.vue';
import useDataTable from '../../hooks/useDatatable';
import Choices from 'choices.js';
import { useSetting } from '@/store/pinia';
import UploadImageVideo from '@/components/widgets/UploadImageVideo.vue';
import AddSource from '@/components/widgets/AddSource.vue';

defineProps({
  name: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  duration: { type: String, default: '' },
  genres: { type: Array, default: () => [''] },
  quality: { type: String, default: '' },
  date: { type: String, default: '' },
  access: { type: Array, default: () => [''] },
  subtitles: { type: String, default: '' },
});

const activeTab = ref('general');

const tableData = ref([
  { movie: '/assets/images/movie-thumb/gameofheros.webp', title: 'Game of Heros', author: 'jenny', dateTime: '2025-06-23 12:18:49', views: '8099 views' },
  { movie: '/assets/images/movie-thumb/venom.webp', title: 'Venom', author: 'jenny', dateTime: '2024-12-28 11:10:29', views: '2387 views' },
  { movie: '/assets/images/movie-thumb/rabbit.webp', title: 'Rabbit', author: 'jenny', dateTime: '2025-05-30 03:59:11', views: '6779 views' },
  { movie: '/assets/images/movie-thumb/migration.webp', title: 'Migration', author: 'jenny', dateTime: '2025-05-23 08:31:29', views: '977 views' },
  { movie: '/assets/images/movie-thumb/krishna.webp', title: 'Krishna', author: 'jenny', dateTime: '2025-05-23 08:15:01', views: '3013 views' },
  { movie: '/assets/images/movie-thumb/kali.webp', title: 'Kali', author: 'jenny', dateTime: '2025-05-23 08:18:19', views: '1742 views' },
  { movie: '/assets/images/movie-thumb/joker.webp', title: 'Joker', author: 'jenny', dateTime: '2024-12-23 11:39:21', views: '960 views' },
  { movie: '/assets/images/movie-thumb/deadpool.webp', title: 'Deadpool', author: 'jenny', dateTime: '2025-01-22 09:35:00', views: '760 views' },
  { movie: '/assets/images/movie-thumb/any-name.webp', title: 'Any Name', author: 'jenny', dateTime: '2025-01-22 09:37:53', views: '853 views' },
  { movie: '/assets/images/movie-thumb/yoshi.webp', title: 'YoShi', author: 'jenny', dateTime: '2024-12-23 11:41:16', views: '775 views' },
  { movie: '/assets/images/movie-thumb/giirek.webp', title: 'Giikre', author: 'jenny', dateTime: '2024-12-23 11:40:57', views: '1463 views' },
  { movie: '/assets/images/movie-thumb/kung-fu-panda.webp', title: 'Kung Fu Panda', author: 'jenny', dateTime: '2024-12-23 11:40:25', views: '758 views' },
  { movie: '/assets/images/movie-thumb/war-for-the-planet.webp', title: 'War For The Planet', author: 'jenny', dateTime: '2024-12-23 11:37:27', views: '533 views' },
  { movie: '/assets/images/movie-thumb/chosfies.webp', title: 'Chosfies', author: 'jenny', dateTime: '2025-05-23 08:25:36', views: '5028 views' },
  { movie: '/assets/images/movie-thumb/the-hunter.webp', title: 'The Hunter', author: 'jenny', dateTime: '2025-07-09 10:38:07', views: '2345 views' }
]);

const columns = ref([
  {
    data: null,
    orderable: false,
    searchable: false,
    title: '<input type="checkbox" class="form-check-input">',
    render: function () {
      return `
       <input type="checkbox" class="form-check-input">
        `;
    },
  },
  {
    data: null,
    title: 'Image',
    render: function (row) {
      return `
      <div class="d-flex">
          <img src="${generateImgPath(row.movie)}" class="rounded-2 avatar avatar-55 img-fluid" />
      </div>
        `;
    },
  },
  {
    data: null,
    title: 'Title',
    render: function (row) {
      return `${row.title}
        `;
    },
  },
  {
    data: null,
    title: 'Author',
    render: function (row) {
      return `${row.author}`;
    },
  },
  { data: 'dateTime', title: 'Date And Time' },
  {
    data: null,
    title: 'Views',
    render: function (row) {
      return `${row.views}`;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Status',
    render: function () {
      return `
      <div class="d-flex justify-content-between">
          <div class="form-check form-switch">
              <input class="form-check-input form-switch-input" type="checkbox">
          </div>
      </div>
        `;
    },
  },
  {
    data: null,
    orderable: false,
    searchable: false,
    title: 'Action',
    render: function () {
      return `
       <div class="d-flex align-items-center list-user-action gap-2">
          <button type="button" class="btn btn-sm btn-icon btn-success-subtle rounded" data-bs-toggle="tooltip" data-table="action" data-id="0" data-method="edit" aria-label="Edit" data-bs-original-title="Edit">
              <i class="ph ph-pencil-simple fs-6"></i>
          </button>
          <a class="btn btn-sm btn-icon btn-danger-subtle delete-btn rounded" data-table="action" data-id="0" data-method="delete" href="#">
              <i class="ph ph-trash-simple fs-6"></i>
          </a>
          <a title="View" class="btn btn-sm btn-icon btn-info-subtle rounded" data-table="action" data-id="0" href="#"><i class="ph ph-eye fs-6"></i></a>
      </div>
        `;
    },
  },
]);

const showOffcanvas1 = () => {
  offcanvasEnd1.value = true;
};

const showAlert = () => {
  deleteSwal();
};
const tableRef1 = ref(null);
useDataTable({
  tableRef1: tableRef1,
  columns: columns.value,
  data: tableData.value,
  actionCallback: (data) => {
    switch (data.method) {
      case 'edit':
        showOffcanvas1();
        break;

      case 'delete':
        showAlert();
        break;

      default:
        break;
    }
  },
});

const generateImgPath = (path) => {
  return window.origin + import.meta.env.BASE_URL + path;
};

const offcanvasEnd = ref(false);
const offcanvasEnd1 = ref(false);

const deleteSwal = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You want to delete this item',
    icon: 'error',
    showCancelButton: true,
    backdrop: 'rgba(60,60,60,0.8)',
    confirmButtonText: 'Yes, delete it!',
    confirmButtonColor: '#c03221',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
    }
  });
};

const addStatus = ref(null);
const tabindexaddStatus = '-1'; // Tab index

const addAuthor = ref(null);
const tabindexaddAuthor = '-1'; // Tab index

const addMovieMethod = ref(null);
const tabindexaddMovieMethod = '-1'; // Tab index

const language = ref(null);
const recommendedMovies = ref(null);
const related_videos = ref(null);

const addchooseCast = ref(null);
const tabindexaddchooseCast = '-1'; // Tab index

const addchooseCrew = ref(null);
const tabindexaddchooseCrew = '-1'; // Tab index

const choice_genres = ref(null);
const choice_tags = ref(null);
const pmp_levels = ref(null);
const select_related_product = ref(null);

const addStatus1 = ref(null);
const tabindexaddStatus1 = '-1'; // Tab index

const addAuthor1 = ref(null);
const tabindexaddAuthor1 = '-1'; // Tab index

const addMovieMethod1 = ref(null);
const tabindexaddMovieMethod1 = '-1'; // Tab index

const language1 = ref(null);
const recommendedMovies1 = ref(null);
const related_videos1 = ref(null);

const addchooseCast1 = ref(null);
const tabindexaddchooseCast1 = '-1'; // Tab index

const addchooseCrew1 = ref(null);
const tabindexaddchooseCrew1 = '-1'; // Tab index

const choice_genres1 = ref(null);
const choice_tags1 = ref(null);
const pmp_levels1 = ref(null);
const select_related_product1 = ref(null);

onMounted(() => {
  new Choices(addAuthor.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addStatus.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addMovieMethod.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(language.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(recommendedMovies.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(related_videos.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(addchooseCast.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addchooseCrew.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(choice_genres.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(choice_tags.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(pmp_levels.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(select_related_product.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });

  new Choices(addAuthor1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addStatus1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addMovieMethod1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(language1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(recommendedMovies1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(related_videos1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(addchooseCast1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(addchooseCrew1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
  });
  new Choices(choice_genres1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(choice_tags1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(pmp_levels1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
  new Choices(select_related_product1.value, {
    allowHTML: true,
    searchEnabled: false,
    shouldSort: false,
    addItems: true,
    removeItems: true,
    removeItemButton: true,
  });
});
// Variables
const show = ref(false);

const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
// Life cycle hooks
watch(themeSchemeDirection, () => {
  show.value = false;
});
</script>