/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

import { TlcenterListView, TlcenterView, TlprojectListView, TlprojectView } from './components';

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

export default function applyConfig(config) {
    config.views = {
    ...config.views,
    contentTypesViews: {
      ...config.views.contentTypesViews,
      tlcenter: TlcenterView,
      tlproject: TlprojectView,
    },
  };
  // Add here your project's configuration here by modifying `config` accordingly
  return config;
}
