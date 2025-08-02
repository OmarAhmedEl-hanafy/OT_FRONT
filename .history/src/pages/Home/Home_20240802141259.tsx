import { Suspense, lazy } from "react";
const Header = lazy(() => import("../../components/HomeComponents/Header"));
const TopFeatures = lazy(
  () => import("../../components/HomeComponents/TopFeatures")
);
const MoreAboutUs = lazy(
  () => import("../../components/HomeComponents/MoreAboutUs")
);
const SliderInMiddle = lazy(
  () => import("../../components/HomeComponents/SliderInMiddle")
);
// const WhyTraining = lazy(
//   () => import("../../components/HomeComponents/WhyTraining")
// );
const PopularCourses = lazy(
  () => import("../../components/HomeComponents/PopularCourses")
);
const FreeConsulting = lazy(
  () => import("../../components/HomeComponents/FreeConsulting")
);
const Nums = lazy(() => import("../../components/HomeComponents/Nums"));
const AssistantCoach = lazy(
  () => import("../../components/HomeComponents/AssistantCoach")
);
const StudentFeedback = lazy(
  () => import("../../components/HomeComponents/StudentFeedback")
);
const Blogs = lazy(() => import("../../components/HomeComponents/Blogs"));
const Achievement = lazy(
  () => import("../../components/HomeComponents/Achievement")
);

function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Suspense fallback={""}>
          <Header />
        </Suspense>
        <Suspense fallback={""}>
          <TopFeatures />
        </Suspense>
        <Suspense fallback={""}>
          <MoreAboutUs />
        </Suspense>
        <Suspense fallback={""}>
          <SliderInMiddle />
        </Suspense>
        {/* <Suspense fallback={""}>
          <WhyTraining />
        </Suspense> */}
        <Suspense fallback={""}>
          <PopularCourses />
        </Suspense>
        <Suspense fallback={""}>
          <FreeConsulting />
        </Suspense>
        <Suspense fallback={""}>
          <Nums />
        </Suspense>
        <Suspense fallback={""}>
          <AssistantCoach />
        </Suspense>
        <Suspense fallback={""}>
          <StudentFeedback />
        </Suspense>
        <Suspense fallback={""}>
          <Achievement />
        </Suspense>
        <Suspense fallback={""}>
          <Blogs />
        </Suspense>
      </div>
    </>
  );
}

export default Home;
