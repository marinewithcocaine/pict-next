import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";
import Form from "@/components/Form/Form";
import { inputs } from "@/data/data";

export async function generateMetadata() {
    const meta = await mainApi.getMeta('portfolio');
    return meta;
}

export default async function Portfolio() {

    const projects = await mainApi.getContent();

    return (
        <>
            <div className="filtered-projects">
                <div className="filtered-projects__title-wrapper">
                    <h2>Портфолио</h2>
                </div>
            </div>

            <ProjectList projects={projects} />
            <Form
                title={"Есть идея? Мы реализуем!"}
                inputs={inputs}
                buttonText={'Отправить'}
            />
        </>
    )
}
