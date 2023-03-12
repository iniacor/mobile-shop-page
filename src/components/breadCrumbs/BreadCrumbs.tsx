import * as React from 'react';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import * as Styled from './BreadCrumbs.styled';
import { Link } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Breadcrumbs() {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/');
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" onClick={handleClick}>
      Home
    </Link>,
    <Typography key="2" color="inherit">
      Electronics
    </Typography>,
  ];

  return (
    <Styled.Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {breadcrumbs}
    </Styled.Breadcrumbs>
  );
}

// import * as React from 'react';
// import { useRoutes, useLocation } from 'react-router-dom';
// import * as Styled from './BreadCrumbs.styled';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
//   event.preventDefault();
//   console.info('You clicked a breadcrumb.');
// }

// export default function Breadcrumbs() {
//   const location = useLocation();
//   const routes = useRoutes([
//     { path: '/', breadcrumb: 'Home' },
//     { path: '/electronics', breadcrumb: 'Electronics' },
//     { path: '/electronics/:id', breadcrumb: ({ params }) => `Product ${params.id}` },
//   ]);
//   console.log(routes.length);

//   const pathnames = location.pathname.split('/').filter(x => x);
//   const breadcrumbs = pathnames.map((_, index) => {
//     const url = `/${pathnames.slice(0, index + 1).join('/')}`;
//     const route = routes.find(r => r.path === url);
//     return route && route.breadcrumb;
//   });

//   return (
//     <Styled.Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
//       {breadcrumbs.map((breadcrumb, index) => {
//         const route = routes[index];
//         if (route) {
//           return (
//             <Link
//               key={route.path}
//               underline="hover"
//               color={index === breadcrumbs.length - 1 ? 'text.primary' : 'inherit'}
//               href={route.path}
//               onClick={handleClick}
//             >
//               {breadcrumb}
//             </Link>
//           );
//         } else {
//           return (
//             <Typography key={breadcrumb} color="text.primary">
//               {breadcrumb}
//             </Typography>
//           );
//         }
//       })}
//     </Styled.Breadcrumbs>
//   );
// }
