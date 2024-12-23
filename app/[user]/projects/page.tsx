//server component
import { createClient } from "@/utils/supabase/server";


export default async function Project() {
    //instancia de renderizado del componente
    const supabase = await createClient();
    const { data, error} = await supabase.from('project').select(`
        id,
        name_project,
        last_update,
        user(name)
    `)

    console.log(data, error)

    return (
        <>
            <ul>
                esto funciona supuestamente
            </ul> 
        {data?.map((project: any) => (
            <li key={project.id}>
                <h3>{project.name_project}</h3>
                <p>Last Update: {project.last_update}</p>
                <p>Author: {project.user.name}</p>
            </li>
        ))}
        </>
    );
}