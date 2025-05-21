
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 631, hash: '85624c44699c5f68bde76657a73d40b8feded7090673ccb45d7c02cad1e49806', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1004, hash: '2ee364a5760770e7dded162c2ad701f9a3146305001c7e6eefeb159b6fe05a1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3098, hash: 'aef0ed686b0575d6014d71046743087058bfd19d688d9319e30e4bd694bb2b78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TAZMSP2Z.css': {size: 15, hash: 'sJ5RzYgp5+o', text: () => import('./assets-chunks/styles-TAZMSP2Z_css.mjs').then(m => m.default)}
  },
};
