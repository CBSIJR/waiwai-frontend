import {
    Application,
    Collaborators,
    Motivation,
    Products,
    Purpose,
} from "@/pages/Inicio/components";

const InicioPage: React.FC = () => {
    return (
        <>
            <Application />
            <Motivation />
            <Purpose />
            <Products />
            <Collaborators />
        </>
    );
};

export default InicioPage;
