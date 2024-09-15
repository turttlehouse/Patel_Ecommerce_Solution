import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const LocationTrace = () => {
  const [breadcrumbs, setBreadcrumbs] = useState(['Home']);
  const location = useLocation();

  useEffect(() => {
    const pathArray = location.pathname.split('/').filter((x) => x);
    setBreadcrumbs(['Home', ...pathArray]);
  }, [location]);

  return (
    <nav className="bg-none mt-12 mx-28">
      <ul className="flex space-x-2 text-sm text-gray-600">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            <Link
              to={`/${breadcrumbs.slice(1, index + 1).join('/')}`}
              className={`hover:text-blue-600 ${index === breadcrumbs.length - 1 ? 'font-semibold' : ''}`}
            >
              {crumb}
            </Link>
            {index < breadcrumbs.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LocationTrace;
