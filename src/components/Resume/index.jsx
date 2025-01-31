import { Header } from "./Header";
import { PersonalInfo } from "./PersonalInfo";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Footer } from "./Footer";

export const Resume = () => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto bg-white p-4 shadow-lg">
      <Header />
      <h1 className="text-2xl font-bold text-center mb-4">이 력 서</h1>
      <PersonalInfo />
      <Education />
      <Experience />
      <Footer />
    </div>
  );
};
