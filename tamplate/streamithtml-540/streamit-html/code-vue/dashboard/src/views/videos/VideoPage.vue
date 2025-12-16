<template>
  <b-row>
    <b-col sm="12">
      <div class="streamit-wraper-table">
        <b-card-header class="d-flex justify-content-between gap-3 flex-wrap align-items-center mb-4">
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative"> {{ $t('addpage.videos-list') }} </span>
          </h2>
          <b-button variant="primary" @click="offcanvasEnd = true"><i class="fa-solid fa-plus me-2"></i>{{
            $t('videolist.add_new') }}</b-button>
        </b-card-header>
        <div class="table-view table-space">
          <table id="seasonTable" ref="tableRef1"
            class="data-tables data-table-one table custom-table movie_table dataTable no-footer">
            <thead>
              <tr class="text-uppercase">
                <th class="sorting sorting_asc" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-sort="ascending" aria-label="
                                
                            : activate to sort column descending">
                  <input type="checkbox" class="form-check-input" />
                </th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Image: activate to sort column ascending">Image</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Title: activate to sort column ascending">Title</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Author: activate to sort column ascending">Author</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Date and Time: activate to sort column ascending">Date and Time</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Views: activate to sort column ascending">Views</th>
                <th class="sorting" tabindex="0" aria-controls="seasonTable" rowspan="1" colspan="1"
                  aria-label="Actions: activate to sort column ascending">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <b-offcanvas v-model="offcanvasEnd" class="offcanvas-width-80" header-close-class="me-0"
        :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
        <template #header>
          <h2 class="episode-playlist-title wp-heading-inline">
            <span class="position-relative">
              {{ $t('addpage.add-new-video') }}
            </span>
          </h2>
          <button type="button" class="btn-close" aria-label="Close"
            @click="offcanvasEnd = false"></button>
        </template>
        <b-form class="section-form">
          <b-row>
            <b-col lg="4">
              <InputField :label="$t('addpage.title')" name="name" type="text"
                :placeholder="$t('addpage.enter-title-of-video')" />
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
                <select ref="addAuthor" class="form-control select2-basic-multiple"
                  :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor">
                  <option value="0" selected>Admin</option>
                </select>
              </div>
            </b-col>
            <b-col lg="4">
              <div class="form-group">
                <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
                <select ref="addStatus" class="form-control select2-basic-multiple"
                  :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus">
                  <option value="0">Published</option>
                  <option value="1">Draft</option>
                </select>
              </div>
            </b-col>
          </b-row>

          <b-row class="mb-5">
            <QuillPage :quill-title="$t('addpage.embed-video-content')" />
          </b-row>

          <b-row>
            <b-col lg="3">
              <UploadImageVideo :upload-image-name="$t('addpage.thumbnail')" />
            </b-col>
            <b-col lg="9">
              <div class="form-group">
                <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.excerpt') }} </label>
                <textarea id="Description" class="form-control" rows="7"
                  :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
              </div>
            </b-col>
          </b-row>

          <b-card no-body class="streamit-tabs-card">
            <b-card-body>
              <b-row class="gy-4">
                <!-- Vertical Tab Nav -->
                <b-col lg="3">
                  <div class="streamit-verticle-tab">
                    <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs"
                      role="tablist" aria-orientation="vertical">
                      <button class="nav-link" :class="{ active: activeTab === 'general' }"
                        @click="activeTab = 'general'">
                        <span>{{ $t('addpage.general') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'category' }"
                        @click="activeTab = 'category'">
                        <span>{{ $t('widgetbasic.category') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'tags' }" @click="activeTab = 'tags'">
                        <span>{{ $t('addpage.tags') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'additional' }"
                        @click="activeTab = 'additional'">
                        <span>{{ $t('addpage.additional_data') }}</span>
                      </button>

                      <button class="nav-link" :class="{ active: activeTab === 'membership' }"
                        @click="activeTab = 'membership'">
                        <span>{{ $t('addpage.membership-level') }}</span>
                      </button>
                    </div>
                  </div>
                </b-col>

                <!-- Tab Content -->
                <b-col lg="9" class="edit-tab-content">
                  <div id="streamit-tabs-content" class="tab-content">
                    <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="movieMethod">{{ $t('addpage.language')
                                }}</label>
                              <select ref="addMovieMethod" class="form-control select2-basic-multiple"
                                :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddMovieMethod">
                                <option value="0">Upload movie</option>
                                <option value="1">Embed movie</option>
                                <option value="2">Movie URL</option>
                              </select>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <UploadImageVideo :upload-image-name="$t('addpage.upload-movie')" />
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.catalog-visibility') }}</label>
                            <div class="form-check d-block">
                              <input id="flexRadioDefault2" class="form-check-input" type="radio"
                                name="flexRadioDefault" />
                              <label class="form-check-label" for="flexRadioDefault2"> {{
                                $t('addpage.catalog-and-search-Results') }} </label>
                            </div>
                            <div class="form-check d-block">
                              <input id="flexRadioDefault3" class="form-check-input" type="radio"
                                name="flexRadioDefault" />
                              <label class="form-check-label" for="flexRadioDefault3"> {{ $t('addpage.catalog-only') }}
                              </label>
                            </div>
                            <div class="form-check d-block">
                              <input id="flexRadioDefault4" class="form-check-input" type="radio"
                                name="flexRadioDefault" />
                              <label class="form-check-label" for="flexRadioDefault4"> {{
                                $t('addpage.search-results-only') }}
                              </label>
                            </div>
                            <div class="form-check d-block">
                              <input id="flexRadioDefault5" class="form-check-input" type="radio"
                                name="flexRadioDefault" />
                              <label class="form-check-label" for="flexRadioDefault5"> {{ $t('addpage.hidden') }}
                              </label>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="genres">{{ $t('addpage.movie-time-duration')
                                }}</label>
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
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.featured') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault3"> {{
                                  $t('addpage.this-a-featured-movie')
                                  }} </label>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="category_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'category' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <div class="form-group mb-0">
                              <label class="form-label flex-grow-1" for="choose_cast">{{
                                $t('addpage.choose-video-category')
                                }}</label>
                              <div class="d-flex gap-2">
                                <div class="flex-grow-1">
                                  <select ref="addchooseCast" class="form-control select2-basic-multiple"
                                    :tabindex="tabindexaddchooseCast">
                                    <option>Action</option>
                                    <option>Adventure</option>
                                    <option>Horror</option>
                                    <option>Circus</option>
                                    <option>Comedy</option>
                                    <option>Crime</option>
                                  </select>
                                </div>
                                <button type="button" class="btn btn-primary">{{$t('addpage.add-btn')}}</button>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }"
                      role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="choice_tags">{{ $t('addpage.choose-tv-show-tags')
                            }}</label>
                          <select id="choice_tags" ref="choice_tags" class="form-control select2-basic-multiple"
                            multiple>
                            <option>Action</option>
                            <option>Adventure</option>
                            <option>Horror</option>
                            <option>Circus</option>
                            <option>Comedy</option>
                            <option>Crime</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div id="additionData_tab" class="tab-pane fade"
                      :class="{ 'show active': activeTab === 'additional' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <b-row>
                          <b-col lg="6">
                            <UploadImageVideo :upload-image-name="$t('addpage.trailer-logo')" />
                          </b-col>
                          <b-col lg="6">
                            <UploadImageVideo :upload-image-name="$t('addpage.trailer-image')" />
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="select_related_product">{{
                                $t('addpage.select-related-product') }}</label>
                              <select id="select_related_product" ref="select_related_product"
                                class="form-control select2-basic-multiple" multiple>
                                <option>Polo</option>
                                <option>T-Shirt</option>
                                <option>Cap</option>
                              </select>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <div class="form-group">
                              <label class="form-label flex-grow-1" for="select_download">{{
                                $t('addpage.show-download-button')
                                }}</label>
                              <select id="select_download" ref="select_download"
                                class="form-control select2-basic-multiple" multiple>
                                <option>No</option>
                                <option>Link</option>
                                <option>Upload</option>
                              </select>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.upcoming') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault3"> {{ $t('addpage.upcoming') }}
                                </label>
                              </div>
                            </div>
                          </b-col>
                          <b-col lg="6">
                            <b-row>
                              <label class="form-label">{{ $t('addpage.video-time-duration') }}</label>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="hours" value="0"
                                    :placeholder="$t('authentication.hours')" min="0" aria-invalid="false" />
                                </div>
                              </b-col>
                              <b-col lg="6">
                                <div class="form-group">
                                  <input type="number" class="form-control" name="minutes" value="0"
                                    :placeholder="$t('authentication.minutes')" min="0" max="59" aria-invalid="false" />
                                </div>
                              </b-col>
                            </b-row>
                          </b-col>
                          <b-col lg="6">
                            <label class="d-block form-label">{{ $t('addpage.notification') }}</label>
                            <div class="checkbox mb-3">
                              <div class="form-check">
                                <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                                <label class="form-check-label" for="flexCheckDefault3"> {{
                                  $t('addpage.notify-user-about-prod')
                                  }} </label>
                              </div>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                    </div>
                    <div id="membershipLevel_tab" class="tab-pane fade"
                      :class="{ 'show active': activeTab === 'membership' }" role="tabpanel">
                      <div class="p-4 px-2">
                        <div class="form-group">
                          <label class="form-label flex-grow-1" for="pmp_levels">{{ $t('addpage.choose-pmp-levels')
                            }}</label>
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
              <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i
                  class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
              <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2"
                @click="offcanvasEnd = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
            </div>
          </div>
        </template>
      </b-offcanvas>
    </b-col>
    <b-offcanvas v-model="offcanvasEnd1" class="offcanvas-width-80" header-close-class="me-0"
      :placement="themeSchemeDirection !== 'ltr' ? 'start' : 'end'">
      <template #header>
        <h2 class="episode-playlist-title wp-heading-inline">
          <span class="position-relative"> {{ $t('edit.edit_show_list') }} </span>
        </h2>
        <button type="button" class="btn-close" aria-label="Close"
          @click="offcanvasEnd1 = false"></button>
      </template>
      <b-form class="section-form">
        <b-row>
          <b-col lg="4">
            <InputField :label="$t('addpage.title')" name="name" type="text"
              :placeholder="$t('addpage.enter-title-of-video')"/>
          </b-col>
          <b-col lg="4">
            <div class="form-group">
              <label class="form-label flex-grow-1">{{ $t('addpage.author') }}</label>
              <select ref="addAuthor1" class="form-control select2-basic-multiple"
                :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddAuthor1">
                <option value="0" selected>Admin</option>
              </select>
            </div>
          </b-col>
          <b-col lg="4">
            <div class="form-group">
              <label class="form-label flex-grow-1">{{ $t('addpage.status') }}</label>
              <select ref="addStatus1" class="form-control select2-basic-multiple"
                :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddStatus1">
                <option value="0">Published</option>
                <option value="1">Draft</option>
              </select>
            </div>
          </b-col>
        </b-row>

        <b-row class="mb-5">
          <QuillPage :quill-title="$t('addpage.embed-video-content')" />
        </b-row>

        <b-row>
          <b-col lg="3">
            <UploadImageVideo :upload-image-name="$t('addpage.thumbnail')" :is-upload-image-default="true"
              :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
          </b-col>
          <b-col lg="9">
            <div class="form-group">
              <label class="form-label flex-grow-1" for="Description"> {{ $t('addpage.excerpt') }} </label>
              <textarea id="Description" class="form-control" rows="7"
                :placeholder="$t('addpage.enter-encerpt-movie')"></textarea>
            </div>
          </b-col>
        </b-row>

        <b-card no-body class="streamit-tabs-card">
          <b-card-body>
            <b-row class="gy-4">
              <!-- Vertical Tab Nav -->
              <b-col lg="3">
                <div class="streamit-verticle-tab">
                  <div class="nav flex-column nav-pills me-0 me-lg-3 mb-3 mb-md-0 list-inline streamit-tabs"
                    role="tablist" aria-orientation="vertical">
                    <button class="nav-link" :class="{ active: activeTab === 'general' }"
                      @click="activeTab = 'general'">
                      <span>{{ $t('addpage.general') }}</span>
                    </button>

                    <button class="nav-link" :class="{ active: activeTab === 'category' }"
                      @click="activeTab = 'category'">
                      <span>{{ $t('widgetbasic.widgetbasic') }}</span>
                    </button>

                    <button class="nav-link" :class="{ active: activeTab === 'tags' }" @click="activeTab = 'tags'">
                      <span>{{ $t('addpage.tags') }}</span>
                    </button>

                    <button class="nav-link" :class="{ active: activeTab === 'additional' }"
                      @click="activeTab = 'additional'">
                      <span>{{ $t('addpage.additional_data') }}</span>
                    </button>

                    <button class="nav-link" :class="{ active: activeTab === 'membership' }"
                      @click="activeTab = 'membership'">
                      <span>{{ $t('addpage.membership-level') }}</span>
                    </button>
                  </div>
                </div>
              </b-col>

              <!-- Tab Content -->
              <b-col lg="9" class="edit-tab-content">
                <div id="streamit-tabs-content" class="tab-content">
                  <div id="general_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'general' }"
                    role="tabpanel">
                    <div class="p-4 px-2">
                      <b-row>
                        <b-col lg="6">
                          <div class="form-group">
                            <label class="form-label flex-grow-1" for="movieMethod">{{ $t('addpage.language') }}</label>
                            <select ref="addMovieMethod1" class="form-control select2-basic-multiple"
                              :placeholder="$t('movielist.add_keywords')" :tabindex="tabindexaddMovieMethod1">
                              <option value="0">Upload movie</option>
                              <option value="1">Embed movie</option>
                              <option value="2">Movie URL</option>
                            </select>
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <UploadImageVideo :upload-image-name="$t('addpage.upload-movie')"
                            :is-upload-image-default="true"
                            :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
                        </b-col>
                      </b-row>
                      <b-row>
                        <b-col lg="6">
                          <label class="d-block form-label">{{ $t('addpage.catalog-visibility') }}</label>
                          <div class="form-check d-block">
                            <input id="flexRadioDefault2" class="form-check-input" type="radio"
                              name="flexRadioDefault" />
                            <label class="form-check-label" for="flexRadioDefault2"> {{
                              $t('addpage.catalog-and-search-Results') }} </label>
                          </div>
                          <div class="form-check d-block">
                            <input id="flexRadioDefault3" class="form-check-input" type="radio"
                              name="flexRadioDefault" />
                            <label class="form-check-label" for="flexRadioDefault3"> {{ $t('addpage.catalog-only') }}
                            </label>
                          </div>
                          <div class="form-check d-block">
                            <input id="flexRadioDefault4" class="form-check-input" type="radio"
                              name="flexRadioDefault" />
                            <label class="form-check-label" for="flexRadioDefault4"> {{
                              $t('addpage.search-results-only') }}
                            </label>
                          </div>
                          <div class="form-check d-block">
                            <input id="flexRadioDefault5" class="form-check-input" type="radio"
                              name="flexRadioDefault" />
                            <label class="form-check-label" for="flexRadioDefault5"> {{ $t('addpage.hidden') }} </label>
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <div class="form-group">
                            <label class="form-label flex-grow-1" for="genres">{{ $t('addpage.movie-time-duration')
                              }}</label>
                            <select ref="language1" class="form-control select2-basic-multiple" multiple>
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
                        <b-col lg="6">
                          <label class="d-block form-label">{{ $t('addpage.featured') }}</label>
                          <div class="checkbox mb-3">
                            <div class="form-check">
                              <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                              <label class="form-check-label" for="flexCheckDefault3"> {{
                                $t('addpage.this-a-featured-movie') }} </label>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <div id="category_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'category' }"
                    role="tabpanel">
                    <div class="p-4 px-2">
                      <b-row>
                        <b-col lg="6">
                          <div class="form-group mb-0">
                            <label class="form-label flex-grow-1" for="choose_cast">{{
                              $t('addpage.choose-video-category')
                              }}</label>
                            <div class="d-flex gap-2">
                              <div class="flex-grow-1">
                                <select ref="addchooseCast1" class="form-control select2-basic-multiple"
                                  :tabindex="tabindexaddchooseCast1">
                                  <option>Action</option>
                                  <option>Adventure</option>
                                  <option>Horror</option>
                                  <option>Circus</option>
                                  <option>Comedy</option>
                                  <option>Crime</option>
                                </select>
                              </div>
                              <button type="button" class="btn btn-primary">{{ $t('addpage.add-btn') }}</button>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <div id="tags_tab" class="tab-pane fade" :class="{ 'show active': activeTab === 'tags' }"
                    role="tabpanel">
                    <div class="p-4 px-2">
                      <div class="form-group">
                        <label class="form-label flex-grow-1" for="choice_tags">{{ $t('addpage.choose-tv-show-tags')
                          }}</label>
                        <select id="choice_tags1" ref="choice_tags1" class="form-control select2-basic-multiple"
                          multiple>
                          <option>Action</option>
                          <option>Adventure</option>
                          <option>Horror</option>
                          <option>Circus</option>
                          <option>Comedy</option>
                          <option>Crime</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div id="additionData_tab" class="tab-pane fade"
                    :class="{ 'show active': activeTab === 'additional' }" role="tabpanel">
                    <div class="p-4 px-2">
                      <b-row>
                        <b-col lg="6">
                          <UploadImageVideo :upload-image-name="$t('addpage.trailer-logo')"
                            :is-upload-image-default="true"
                            :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
                        </b-col>
                        <b-col lg="6">
                          <UploadImageVideo :upload-image-name="$t('addpage.trailer-image')"
                            :is-upload-image-default="true"
                            :default-image="generateImgPath('/assets/images/movie-thumb/gameofheros.webp')" />
                        </b-col>
                        <b-col lg="6">
                          <div class="form-group">
                            <label class="form-label flex-grow-1" for="select_related_product">{{
                              $t('addpage.select-related-product') }}</label>
                            <select id="select_related_product" ref="select_related_product1"
                              class="form-control select2-basic-multiple" multiple>
                              <option>Polo</option>
                              <option>T-Shirt</option>
                              <option>Cap</option>
                            </select>
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <div class="form-group">
                            <label class="form-label flex-grow-1" for="select_download">{{
                              $t('addpage.show-download-button') }}</label>
                            <select id="select_download" ref="select_download1"
                              class="form-control select2-basic-multiple" multiple>
                              <option>No</option>
                              <option>Link</option>
                              <option>Upload</option>
                            </select>
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <label class="d-block form-label">{{ $t('addpage.upcoming') }}</label>
                          <div class="checkbox mb-3">
                            <div class="form-check">
                              <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                              <label class="form-check-label" for="flexCheckDefault3"> {{ $t('addpage.upcoming') }}
                              </label>
                            </div>
                          </div>
                        </b-col>
                        <b-col lg="6">
                          <b-row>
                            <label class="form-label">{{ $t('addpage.video-time-duration') }}</label>
                            <b-col lg="6">
                              <div class="form-group">
                                <input type="number" class="form-control" name="hours" value="0"
                                  :placeholder="$t('authentication.hours')" min="0" aria-invalid="false" />
                              </div>
                            </b-col>
                            <b-col lg="6">
                              <div class="form-group">
                                <input type="number" class="form-control" name="minutes" value="0"
                                  :placeholder="$t('authentication.minutes')" min="0" max="59" aria-invalid="false" />
                              </div>
                            </b-col>
                          </b-row>
                        </b-col>
                        <b-col lg="6">
                          <label class="d-block form-label">{{ $t('addpage.notification') }}</label>
                          <div class="checkbox mb-3">
                            <div class="form-check">
                              <input id="flexCheckDefault3" class="form-check-input" type="checkbox" />
                              <label class="form-check-label" for="flexCheckDefault3"> {{
                                $t('addpage.notify-user-about-prod') }} </label>
                            </div>
                          </div>
                        </b-col>
                      </b-row>
                    </div>
                  </div>
                  <div id="membershipLevel_tab" class="tab-pane fade"
                    :class="{ 'show active': activeTab === 'membership' }" role="tabpanel">
                    <div class="p-4 px-2">
                      <div class="form-group">
                        <label class="form-label flex-grow-1" for="pmp_levels">{{ $t('addpage.choose-pmp-levels')
                          }}</label>
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
            <b-button variant="primary" type="submit" class="d-flex align-items-center gap-2"><i
                class="ph-fill ph-floppy-disk-back"></i>{{ $t('edit.save') }}</b-button>
            <b-button variant="outline-primary" type="button" class="d-flex align-items-center gap-2"
              @click="offcanvasEnd1 = false"><i class="ph ph-caret-double-left"></i>{{ $t('edit.close') }}</b-button>
          </div>
        </div>
      </template>
    </b-offcanvas>
  </b-row>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import Swal from 'sweetalert2';
import InputField from '@/components/partials/InputField.vue';
import useDataTable from '../../hooks/useDatatable';
import Choices from 'choices.js';
import { useSetting } from '@/store/pinia';
import QuillPage from '@/components/widgets/QuillPage.vue';
import UploadImageVideo from '@/components/widgets/UploadImageVideo.vue';
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
  { movie: '/assets/images/movie-thumb/gameofheros.webp', title: 'Game of Heros', author: 'Jenny', dateTime: '2025-01-08 04:43:37', views: '622 Views', checked: false },
  { movie: '/assets/images/movie-thumb/krishna.webp', title: 'Little Krishna', author: 'Jenny', dateTime: '2025-02-05 06:55:19', views: '614 Views', checked: false },
  { movie: '/assets/images/movie-thumb/reed-dog.webp', title: 'Red Dog', author: 'Jenny', dateTime: '2025-01-22 11:29:40', views: '538 Views', checked: false },
  { movie: '/assets/images/movie-thumb/frzzen.webp', title: 'Frozen', author: 'Jenny', dateTime: '2025-02-05 06:53:50', views: '859 Views', checked: false },
  { movie: '/assets/images/movie-thumb/tianic.webp', title: 'Titanic', author: 'Jenny', dateTime: '2025-01-22 11:31:52', views: '591 Views', checked: false },
  { movie: '/assets/images/movie-thumb/Adventure-1.webp', title: 'Adventure', author: 'Jenny', dateTime: '2024-12-27 05:57:56', views: '382 Views', checked: false },
  { movie: '/assets/images/movie-thumb/kung-fu-panda.webp', title: 'Kung Fu Panda', author: 'Jenny', dateTime: '2025-01-22 11:31:06', views: '737 Views', checked: false },
  { movie: '/assets/images/movie-thumb/red.webp', title: 'Red', author: 'Jenny', dateTime: '2025-01-24 11:52:45', views: '477 Views', checked: false },
  { movie: '/assets/images/movie-thumb/the-crew.webp', title: 'The Crew', author: 'Jenny', dateTime: '2025-01-22 11:24:08', views: '236 Views', checked: false },
  { movie: '/assets/images/movie-thumb/synchronic.webp', title: 'Synchronic', author: 'Jenny', dateTime: '2024-12-27 05:58:23', views: '206 Views', checked: false },
  { movie: '/assets/images/movie-thumb/lost-inst-space.webp', title: 'Lost In Space', author: 'Jenny', dateTime: '2025-01-28 10:51:12', views: '330 Views', checked: false },
  { movie: '/assets/images/movie-thumb/toddler.webp', title: 'Toddler', author: 'Jenny', dateTime: '2025-01-22 11:30:12', views: '742 Views', checked: false },
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
    title: 'Actions',
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

const addchooseCast = ref(null);
const tabindexaddchooseCast = '-1'; // Tab index

const choice_tags = ref(null);
const pmp_levels = ref(null);
const select_related_product = ref(null);
const select_download = ref(null);
const language = ref(null);

const addStatus1 = ref(null);
const tabindexaddStatus1 = '-1'; // Tab index

const addAuthor1 = ref(null);
const tabindexaddAuthor1 = '-1'; // Tab index

const addMovieMethod1 = ref(null);
const tabindexaddMovieMethod1 = '-1'; // Tab index

const addchooseCast1 = ref(null);
const tabindexaddchooseCast1 = '-1'; // Tab index

const choice_tags1 = ref(null);
const pmp_levels1 = ref(null);
const select_related_product1 = ref(null);
const select_download1 = ref(null);
const language1 = ref(null);

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
  new Choices(addchooseCast.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
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
  new Choices(select_download.value, {
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
  new Choices(addchooseCast1.value, {
    allowHTML: true,
    searchEnabled: true,
    shouldSort: true,
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
  new Choices(select_download1.value, {
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
