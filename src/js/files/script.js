// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLock, bodyLockStatus, bodyUnlock, isMobile } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoad)

function pageLoad() {
  const htmlTag = document.documentElement

  document.addEventListener("click", e => {
    const targetElement = e.target

    let catalog = document.querySelector("[data-catalog]")

    if (catalog && targetElement.closest("[data-catalog-open]")) {
      // bodyLock()

      htmlTag.classList.toggle("open-catalog")
    }
    // || htmlTag.closest('.open-catalog') && !targetElement.closest(".catalog-header__body") && !targetElement.closest('[data-catalog-open]')
    if (
      htmlTag.closest(".open-catalog") &&
      !targetElement.closest(".catalog-header__body") &&
      !targetElement.closest("[data-catalog-open]")
    ) {
      htmlTag.classList.toggle("open-catalog")
    }

    /////

    if (targetElement.closest("[data-cart]")) {
      bodyLock()
      htmlTag.classList.add("open-cart")
    }

    if (
      (htmlTag.closest(".open-cart") &&
        !targetElement.closest(".cart__wrapper") &&
        !targetElement.closest("[data-cart]")) ||
      targetElement.closest("[data-cart-close]")
    ) {
      htmlTag.classList.remove("open-cart", "open-cart-form")
      bodyUnlock()
    }

    if (htmlTag.closest(".open-cart") && targetElement.closest("[data-cart-form]")) {
      htmlTag.classList.add("open-cart-form")
    }

    ///

    if (targetElement.closest("[data-filter]")) {
      bodyLock()
      htmlTag.classList.add("open-filter")
    }

    if (targetElement.closest("[data-filter-close]")) {
      htmlTag.classList.remove("open-filter")
      bodyUnlock()
    }
  })
}
