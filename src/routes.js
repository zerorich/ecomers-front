// src/routes.js

// Статические пути
export const ROUTE = {
  HOME: '/',
  VEHICLES: '/vehicles',
  CONTACT: '/contact-us',
};

// Билдеры динамических путей
export const route = {
  home: () => ROUTE.HOME,
  vehicles: () => ROUTE.VEHICLES,
  vehicleById: (id) => `/vehicles/${id}`,
  contact: () => ROUTE.CONTACT,
};

// Вспомогательная функция для добавления query-параметров
export function withQuery(path, params) {
  if (!params || typeof params !== 'object') return path;
  const query = new URLSearchParams(
    Object.entries(params).reduce((acc, [k, v]) => {
      if (v === undefined || v === null || v === '') return acc;
      acc[k] = String(v);
      return acc;
    }, {})
  );
  const qs = query.toString();
  return qs ? `${path}?${qs}` : path;
}

// Опционально: список для меню/навигации
export const allRoutes = [
  { name: 'Home', path: ROUTE.HOME },
  { name: 'Vehicles', path: ROUTE.VEHICLES },
  { name: 'Contact', path: ROUTE.CONTACT },
];

// Удобные ссылки
export const LINKS = {
  home: ROUTE.HOME,
  vehicles: ROUTE.VEHICLES,
  vehicle: (id) => route.vehicleById(id),
  contact: ROUTE.CONTACT,
};


