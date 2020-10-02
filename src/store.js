import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: '1', title: 'Something', state: 'TASK_INBOX' },
      { id: '2', title: 'Something more', state: 'TASK_INBOX' },
      { id: '3', title: 'Something else', state: 'TASK_INBOX' },
      { id: '4', title: 'Something again', state: 'TASK_INBOX' },
    ],
    attributes: [
      {
        attribute: 'AttributeOne',
        value: 'ValueOne',
        keyEnabled: false,
        required: false, 
      },
      {
        attribute: 'AttributeTwo',
        value: 'ValueTwo',
        keyEnabled: true,
        required: false,
      },
      {
        attribute: 'AttributeThree',
        value: 'ValueThree',
        keyEnabled: false,
        required: true,
      },
      {
        attribute: 'AttributeFour',
        value: 'ValueFour',
        keyEnabled: true,
        required: true,
      },
    ],
    
    superSections: {
      superSection1: {
        sections: [
          section1 = {
            family1: {
              attributes: [
               {
                 attribute: 'AttributeOne',
                 value: 'ValueOne',
                 keyEnabled: false,
                 required: false, 
               },
               {
                 attribute: 'AttributeTwo',
                 value: 'ValueTwo',
                 keyEnabled: true,
                 required: false,
               },
               {
                 attribute: 'AttributeThree',
                 value: 'ValueThree',
                 keyEnabled: false,
                 required: true,
               },
               {
                 attribute: 'AttributeFour',
                 value: 'ValueFour',
                 keyEnabled: true,
                 required: true,
               },
              ],
              product: "Array of products"
            }, 
            family2: {
              attributes: [
               {
                 attribute: 'AttributeOne',
                 value: 'ValueOne',
                 keyEnabled: false,
                 required: false, 
               },
               {
                 attribute: 'AttributeTwo',
                 value: 'ValueTwo',
                 keyEnabled: true,
                 required: false,
               },
               {
                 attribute: 'AttributeThree',
                 value: 'ValueThree',
                 keyEnabled: false,
                 required: true,
               },
               {
                 attribute: 'AttributeFour',
                 value: 'ValueFour',
                 keyEnabled: true,
                 required: true,
               },
              ],
              product: "Array of products"
            },
          },
          section2 = {
            family1: {
              attributes: "attributes",
              product: "Array of products"
            }, 
            family2: {
              attributes: "attributes",
              product: "Array of products"
            },
          }
        ],
      },
      supersection2: {
        sections: [
          section1 = {
            family1: {
              attributes: "attributes",
              product: "Array of products"
            }, 
            family2: {
              attributes: "attributes",
              product: "Array of products"
            },
          },
          section2 = {
            family1: {
              attributes: "attributes",
              product: "Array of products"
            }, 
            family2: {
              attributes: "attributes",
              product: "Array of products"
            },
          }
        ],
      },
    }
  },
  mutations: {
    ARCHIVE_TASK(state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_ARCHIVED';
    },
    PIN_TASK(state, id) {
      state.tasks.find(task => task.id === id).state = 'TASK_PINNED';
    },
  },
  actions: {
    archiveTask({ commit }, id) {
      commit('ARCHIVE_TASK', id);
    },
    pinTask({ commit }, id) {
      commit('PIN_TASK', id);
    },
  },
});