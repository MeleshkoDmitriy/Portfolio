"use client"
import styles from './SingleProjectPage.module.scss';
import { projects }from '../../../lib/data/data'
import { SingleProject } from '@/components/singleProject/SingleProject';
import NotFound from './not-found';

export default function SingleProjectPage({ params }: {
    params: { id: number }
}) {
    const projectArr = projects.filter(prj => prj.id == params.id);

    if(projectArr.length === 0) {
        return NotFound();
    }

    return (
        <>
            <SingleProject {...projectArr[0]} />
        </>
    )
}