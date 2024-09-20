import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div className="">
            <img src="/logo.svg" alt="logotipo" className="w-32" />
          </div>

          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'uppercase font-bold text-orange-500'
                  : 'uppercase font-bold text-white'
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/favoritos"
              className={({ isActive }) =>
                isActive
                  ? 'uppercase font-bold text-orange-500'
                  : 'uppercase font-bold text-white'
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
