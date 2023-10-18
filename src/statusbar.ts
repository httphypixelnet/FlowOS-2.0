
import { Plugin } from './types'

class StatusBar {
  element: HTMLElement

  constructor () {
    this.element = document.createElement('toolbar')

    document.body.appendChild(this.element)
  }

  add (item: Plugin): void {
    const element = document.createElement('div')
    element.setAttribute('data-toolbar-id', item.meta.pkg)

    this.element.appendChild(element)

    item.run(element)
  }

  async init (): Promise<void> {
    window.preloader.setStatus('adding plugins to statusbar...')

    for (const plugin of window.flow.plugins) {
      window.preloader.setStatus(`adding plugins to statusbar\n${plugin.meta.pkg}`)
      this.add(plugin)
    }

    await window.preloader.setDone('plugins')
  }
}

export default StatusBar
