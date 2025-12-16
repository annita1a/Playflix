<template>
  <div class="rtl-box">
    <a class="btn btn-icon btn-setting" id="settingbutton" data-bs-toggle="offcanvas" data-bs-target="#live-customizer"
      role="button" aria-controls="live-customizer">
      <i class="ph ph-gear-six fs-5 text-white"></i>
    </a>
    <nav id="live-customizer" class="offcanvas live-customizer"
      :class="themeSchemeDirection !== 'ltr' ? 'offcanvas-start' : 'offcanvas-end'" tabindex="-1" data-bs-scroll="true"
      data-bs-backdrop="false" aria-labelledby="live-customizer-label">
      <div class="offcanvas-header gap-3 justify-content-between">
        <div class="d-flex align-items-center">
          <h5 id="live-customizer-label" class="offcanvas-title text-dark">
            {{ $t("streamSetting.live_customizer") }}
          </h5>
        </div>
        <div class="d-flex gap-1 align-items-center">
          <button class="btn btn-icon text-primary" data-reset="settings" data-bs-toggle="tooltip"
            data-bs-placement="left" aria-label="Reset All Settings" data-bs-original-title="Reset All Settings">
            <span class="btn-inner">
              <i class="ph-fill ph-arrows-clockwise fs-5"></i>
            </span>
          </button>
          <button type="button" class="btn btn-icon btn-close px-0 text-reset shadow-none text-dark"
            data-bs-dismiss="offcanvas" aria-label="Close">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div class="offcanvas-body pt-0">
        <div class="modes row row-cols-2 gx-2">
          <div class="col">
            <div data-setting="attribute" class="text-center w-100" @click="store.theme_scheme_direction('ltr')">
              <input id="theme-scheme-direction-ltr" type="radio" value="ltr" class="btn-check"
                name="theme_scheme_direction" data-prop="dir" :checked="store.theme_scheme_direction_value == 'ltr'" />
              <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-direction-ltr">
                {{ $t("streamSetting.ltr") }}</label>
            </div>
          </div>
          <div class="col">
            <div data-setting="attribute" class="text-center w-100" @click="store.theme_scheme_direction('rtl')">
              <input id="theme-scheme-direction-rtl" type="radio" value="rtl" class="btn-check"
                name="theme_scheme_direction" data-prop="dir" :checked="store.theme_scheme_direction_value == 'rtl'" />
              <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-direction-rtl">
                {{ $t("streamSetting.rtl") }}</label>
            </div>
          </div>
        </div>
        <div class="modes mt-3">
          <div class="color-customizer mb-3">
            <h6 class="mb-0 title-customizer">
              {{ $t("streamSetting.color_customizer") }}
            </h6>
          </div>
          <div class="row row-cols-2 gx-2">
            <div class="col mb-3">
              <div data-setting="attribute" class="text-center w-100" @click="store.theme_style_appearance('dark')">
                <input id="theme-scheme-color-netflix" type="radio" value="dark" class="btn-check"
                  name="theme_style_appearance" data-prop="data-bs-theme"
                  :checked="store.theme_style_appearance_value == 'dark'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-netflix">
                  {{ $t("streamSetting.netflix") }}</label>
              </div>
            </div>
            <div class="col mb-3">
              <div data-setting="attribute" class="text-center w-100" @click="store.theme_style_appearance('hotstar')">
                <input id="theme-scheme-color-hotstar" type="radio" value="hotstar" class="btn-check"
                  name="theme_style_appearance" data-prop="data-bs-theme"
                  :checked="store.theme_style_appearance_value == 'hotstar'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-hotstar">
                  {{ $t("streamSetting.hotstar") }}
                </label>
              </div>
            </div>
            <div class="col">
              <div data-setting="attribute" class="text-center w-100"
                @click="store.theme_style_appearance('amazonprime')">
                <input id="theme-scheme-color-prime" type="radio" value="amazonprime" class="btn-check"
                  name="theme_style_appearance" data-prop="data-bs-theme"
                  :checked="store.theme_style_appearance_value == 'amazonprime'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-prime">
                  {{ $t("streamSetting.prime") }}
                </label>
              </div>
            </div>
            <div class="col">
              <div data-setting="attribute" class="text-center w-100" @click="store.theme_style_appearance('hulu')">
                <input id="theme-scheme-color-hulu" type="radio" value="hulu" class="btn-check"
                  name="theme_style_appearance" data-prop="data-bs-theme"
                  :checked="store.theme_style_appearance_value == 'hulu'" />
                <label class="btn dir-btn cutomizer-button w-100" for="theme-scheme-color-hulu">
                  {{ $t("streamSetting.hulu") }}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useSetting } from "../store/setting";
import { ref, computed, watch, onMounted } from 'vue';
import { Tooltip } from 'bootstrap';
const store = useSetting();
const themeSchemeDirection = computed(() => store.theme_scheme_direction_value);
const render = ref(true);

watch(
  () => themeSchemeDirection.value,
  () => {
    render.value = false;
    setTimeout(() => {
      render.value = true;
    }, 0);
  }
);

onMounted(() => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach((el) => new Tooltip(el));
});
</script>
