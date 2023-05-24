export default interface User {
  id: string;
  name: string;
  email: string;
  favoriteLuminaries: {
    id: string;
  },
}