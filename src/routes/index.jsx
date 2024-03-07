import { Route, Routes } from "react-router";
import { LandingPage ,InscriptionPage, InterestPage, ClubPage, Dashboard, CalendrierPage, ListClubPage, ForumPage} from "../Page"

const routesData = [
    {path: '/', element: <LandingPage/>},
    {path: '/signing', element: <InscriptionPage/>},
    {path: '/interest', element: <InterestPage/>},
    {path: '/club/:id', element: <ClubPage/>},
    {path: '/dashboard', element: <Dashboard/>},
    {path: '/calendrier', element: <CalendrierPage/>},
    {path: '/clubs', element: <ListClubPage/>},
    {path: '/forum', element: <ForumPage/>},

]


export default function RoutesComponent() {
  return (
    <Routes>
      {routesData.map((route, index) => (
        <Route key={index} exact path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}
