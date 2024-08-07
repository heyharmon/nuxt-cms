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

    getField(path) {
      return get(this.activeBlock.data, path)
    },

    setField(path, value) {
      set(this.activeBlock.data, path, value)
    },

    pushToCollection({path, value}) {
      let array = this.getField(path)
          array.push(value)
    },

    removeFromCollection(path, index) {
      let repeater = this.getField(path)
          repeater.splice(index, 1)
    },
    
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

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEditorStore, import.meta.hot));
}