const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const device = {
  /**
   * modifiers: desktop/mobile
   */
  bind (el, { modifiers }) {
    // Чтобы не "моргало"
    const { desktop, mobile } = modifiers
    // Если мобильное устройство, а модификатор desktop, то скрываем
    if (isMobile && desktop) el.style.display = 'none'
    // Если десктоп, а модификатор mobile, то скрываем
    if (!isMobile && mobile) el.style.display = 'none'
  },
  inserted (el, { modifiers }) {
    const { desktop, mobile } = modifiers
    // Если мобильное устройство, а модификатор desktop, то удаляем
    if (isMobile && desktop) el.remove()
    // Если десктоп, а модификатор mobile, то удаляем
    if (!isMobile && mobile) el.remove()
  }
}

export default {
  install (Vue) {
    Vue.directive('if-device', device)
    Vue.prototype.$isMobile = () => isMobile
  }
}