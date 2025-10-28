import { mainApi } from "@/Utils/api";
import ProjectList from "@/components/ProjectList/ProjectList";
import { inputs } from "@/data/data";
import Form from "@/components/Form/Form";
import ProjectPar from "@/components/Project/Project";
import { notFound } from "next/navigation";
import Preloader from '@/components/Preloader/Preloader';
import { Suspense } from "react";

export async function generateStaticParams() {
    const posts = await mainApi.getContent();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }) {
    const projectSlug = await params.projectSlug;
    const meta = await (mainApi.getProject(projectSlug));
    if (!meta) {
        return {}
    }
    return meta.meta;
}

export default async function Project({ params }) {
    
    const project = await mainApi.getProject(params.projectSlug);

    if (!project) {
        notFound();
    }

    return (
        <Suspense fallback={<Preloader />}>
            <ProjectPar project={project.project} />
            <Form title={"Хотите также? Мы вам перезвоним!"} inputs={inputs} buttonText={'Отправить'} />
            <ProjectList projects={project.recProjects} title={'Посмотрите еще:'} />
        </Suspense>

    )
}