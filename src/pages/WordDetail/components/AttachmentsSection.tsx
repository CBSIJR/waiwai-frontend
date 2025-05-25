import { Image } from "antd";
import AudioPlayer from "./AudioPlayer";

interface Props {
    attachments: { data: Attachment[] };
    apiUrl: string;
}

const AttachmentsSection = ({ attachments, apiUrl }: Props) => {
    
    const imageAttachments = attachments.data.filter((item) =>
        item.content_type.includes("image/")
    );

    const audioAttachments = attachments.data.filter((item) =>
        item.content_type.includes("audio/")
    );

    const otherAttachments = attachments.data.filter(
        (item) =>
            !item.content_type.includes("image/") &&
            !item.content_type.includes("audio/")
    );

    return (
        <div className="space-y-6 mt-8">
            <h2 className="text-xl font-semibold text-body-color border-b pb-2">
                Anexos
            </h2>

            {imageAttachments.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Imagens</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {imageAttachments.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-lg overflow-hidden shadow-one"
                            >
                                <Image
                                    src={`${apiUrl}${item.url}`}
                                    alt={item.name || "Anexo de imagem"}
                                    className="object-cover w-full h-48"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {audioAttachments.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Áudios</h3>
                    <div className=" grid grid-cols-1 md:grid-cols-4">
                        {audioAttachments.map((item) => (
                            <AudioPlayer
                                key={item.id}
                                src={`${apiUrl}${item.url}`}
                                title={`Áudio ${item.id}`}
                                type={item.content_type}
                            />
                        ))}
                    </div>
                </div>
            )}

            {otherAttachments.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Outros anexos</h3>
                    <div className="space-y-2">
                        {otherAttachments.map((item) => (
                            <div
                                key={item.id}
                                className="p-3 border rounded-lg text-body-color"
                            >
                                Formato não suportado: {item.content_type}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {attachments.data.length === 0 && (
                <p className="text-body-color italic">
                    Esta palavra não contém nenhum anexo.
                </p>
            )}
        </div>
    );
};

export default AttachmentsSection;
