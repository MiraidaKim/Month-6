import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import CharactersPage from "./features/characters/CharactersPage";
import CharacterDetail from "./features/characters/CharacterDetail";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <CharactersPage /> },
      { path: "character/:id", element: <CharacterDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
