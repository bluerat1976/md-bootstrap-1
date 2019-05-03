function hendleNavItems(navItems) {
  return navItems.map(el => ({
    ...el,
    customClass: window.location.pathname.indexOf(el.activeLocation) !== -1 ? 'active' : ' ',
  }));
}


export default function prepareFooter(footer) {
  return {
    ...footer,
    navItems: hendleNavItems(footer.navItems),
  };
}
