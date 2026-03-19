// Menu configuration for navigation
export const pugazhMenuItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/'
  },
  {
    id: 'products',
    label: 'Products',
    path: '/products'
  },
  {
    id: 'about',
    label: 'About Us',
    path: '/about'
  },
  {
    id: 'contact',
    label: 'Contact Us',
    path: '/contact'
  }
];

export const rajmaniMenuItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/rajmani'
  },
  {
    id: 'about',
    label: 'About',
    path: '/rajmani#about'
  },
  {
    id: 'products',
    label: 'Products',
    path: '/rajmani#products'
  },
  {
    id: 'contact',
    label: 'Contact',
    path: '/rajmani#contact'
  }
];

// Get menu items based on current site
export const getMenuItems = (site = 'pugazh') => {
  return site === 'rajmani' ? rajmaniMenuItems : pugazhMenuItems;
};
