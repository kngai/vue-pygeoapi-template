import Vue from 'vue'
import Vuex from 'vuex'

import base from './modules/base'
import collections from './modules/collections'
import collection from './modules/collection'
import items from './modules/items'
import item from './modules/item'
import processes from './modules/processes'
import proc from './modules/process'
import conformance from './modules/conformance'
import stac from './modules/stac'
import queryables from './modules/queryables'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  modules: {
    base,
    collections,
    collection,
    items,
    item,
    processes,
    proc, // cannot be "process" as it conflicts with process.env
    conformance,
    stac,
    queryables
  }
})
