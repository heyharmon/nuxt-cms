import pages from '@/server/pages'
import get from "lodash/get";
import set from "lodash/set";

export const useEditorStore = defineStore('editor', {
  state: () => ({
    page: {},
    blocks: [],
    activeBlockId: null,
    show: {
      blocksPanel: true,
      designPanel: false,
      editorPanel: false,
      thumbnailsPanel: true,
    },
    buttonModal: {
      open: false,
    },
    filesModal: {
      open: false,
      selectMultiple: false,
      targetProp: ''
    },
  }),
  
  getters: {
    activeBlock: (state) => {
      if (!state.activeBlockId) return

      return state.blocks.find(
        block => block.id === state.activeBlockId
      )
    },
  },
  
  actions: {
    async showPage(path) {
      const page = pages.find((page) => page.path == path)
      this.page = page
      this.blocks = page.blocks
    },

    getValue(path) { // TODO: Rename to get getBlockData, so where it's used it's clear what it's getting
      return get(this.activeBlock.data, path)
    },

    setValue(path, value) { // TODO: Rename to get setBlockData, so where it's used it's clear what it's getting
      set(this.activeBlock.data, path, value)
    },

    pushToArray({path, value}) { // TODO: Rename to get pushToBlockDataArray, so where it's used it's clear what it's getting
      let array = this.getValue(path)
          array.push(value)

      console.log('Array: ', array)
    },

    removeFromRepeater(path, index) {
      let repeater = this.getValue(path)
          repeater.splice(index, 1)
      // pullAt(repeater, index)
    },

    // addImage(path, image) {
    //   this.activeBlock.data[path].push(image)
    // },
    
    // TODO: Move to a UI store
    showDefault() {
      this.activeBlockId = null

      this.show = {
        blocksPanel: true,
        designPanel: false,
        editorPanel: false,
        thumbnailsPanel: true,
      }
    },

    // TODO: Move to a UI store
    showEditorPanel(blockId) {
      this.activeBlockId = blockId
      
      this.show = {
        blocksPanel: false,
        designPanel: false,
        editorPanel: true,
        thumbnailsPanel: false,
      }
    },

    // TODO: Move to a UI store
    showDesignPanel() {
      this.activeBlockId = null
      
      this.show = {
        blocksPanel: false,
        designPanel: true,
        editorPanel: false,
        thumbnailsPanel: false,
      }
    },
  },
})

// export const usePageStore = defineStore('page', () => {d
//   const page = ref()

//   return { store }
// })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEditorStore, import.meta.hot));
}