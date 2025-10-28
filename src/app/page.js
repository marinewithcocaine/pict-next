import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";
import MainSwiper from "@/components/MainSwiper/MainSwiper";
import Form from "@/components/Form/Form";
import { inputs } from "@/data/data";

// export async function generateMetadata() {
//   const meta = await mainApi.getMeta('main');
//   return meta;
// }

export default async function Page() {

  const projects = await mainApi.getMainPosts();
  const sliderProjects = await mainApi.getSliderPosts();

  return (
    <>
      <MainSwiper projects={sliderProjects} />
      <ProjectList projects={projects} />
      <Form title={"Хотите также? Давайте обсудим!"} inputs={inputs} buttonText={'Отправить'} />
    </>
  );
}
