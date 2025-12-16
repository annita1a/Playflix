import { settingSlice } from './reducers'

export const {
    reset_state,
    app_name,
    theme_scheme_direction,
    theme_color,
    theme_language,
    setSetting
} = settingSlice.actions;
export default settingSlice.actions