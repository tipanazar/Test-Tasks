import { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { getWords } from "../redux/dictionary/operations";

import Loader from "../shared/Components/Loader/Loader";
import LayoutPage from "../pages/LayoutPage/LayoutPage";

const WordsListPage = lazy(() =>
  import("../pages/WordsListPage/WordsListPage")
);
const WordAddingPage = lazy(() =>
  import("../pages/WordAddingPage/WordAddingPage")
);
const KnowledgeTestingPage = lazy(() =>
  import("../pages/KnowledgeTestingPage/KnowledgeTestingPage")
);
const TestingResultsPage = lazy(() =>
  import("../pages/TestingResultsPage/TestingResultsPage")
);
const TestingHistoryPage = lazy(() =>
  import("../pages/TestingHistoryPage/TestingHistoryPage")
);

function App() {
  const dispatch = useDispatch();
  dispatch(getWords());

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<WordsListPage />} />
          <Route path="add-word" element={<WordAddingPage />} />
          <Route path="testing" element={<KnowledgeTestingPage />} />
          <Route path="testing-results" element={<TestingResultsPage />} />
          <Route path="testing-history" element={<TestingHistoryPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
