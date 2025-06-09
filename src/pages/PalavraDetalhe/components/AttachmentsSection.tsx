import { API_BASE_URL } from "@/constraints";
import { Card, Button } from "antd";
import {
    PictureOutlined,
    SoundOutlined,
    FileOutlined,
    PaperClipOutlined,
} from "@ant-design/icons";
import { Attachment } from "../PalavraDetalhe.types";
import AudioPlayer from "./AudioPlayer";

interface AttachmentsSectionProps {
    attachments: { data: Attachment[] };
}

const AttachmentsSection = ({ attachments }: AttachmentsSectionProps) => {
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

    if (attachments.data.length === 0) {
        return (
            <Card className="mt-8 border-0 shadow-sm rounded-2xl">
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <PaperClipOutlined className="text-2xl text-gray-400" />
                    </div>
                    <p className="text-body-color/70 text-lg">
                        Esta palavra não possui anexos.
                    </p>
                </div>
            </Card>
        );
    }

    return (
        <div className="mt-4">
            <div className="space-y-8">
                <div className="flex items-center gap-3">
                    <PaperClipOutlined className="text-xl text-primary" />
                    <h2 className="text-2xl font-bold text-dark">Anexos</h2>
                    <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                        {attachments.data.length}
                    </span>
                </div>

                {imageAttachments.length > 0 && (
                    <>
                        <div className="flex items-center gap-2">
                            <PictureOutlined className="text-lg text-green-600" />
                            <h3 className="text-xl font-semibold text-dark">
                                Imagens
                            </h3>
                            <span className="bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded-full">
                                {imageAttachments.length}
                            </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {imageAttachments.map((item, index) => (
                                <div
                                    key={index}
                                    className="relative group overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white"
                                >
                                    <img
                                        src={`${API_BASE_URL}${item.url}`}
                                        alt={`Imagem ${index + 1}`}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Button
                                            type="primary"
                                            onClick={() =>
                                                window.open(
                                                    `${API_BASE_URL}${item.url}`,
                                                    "_blank"
                                                )
                                            }
                                            className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-2 shadow"
                                        >
                                            Visualizar
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {audioAttachments.length > 0 && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <SoundOutlined className="text-lg text-blue-600" />
                            <h3 className="text-xl font-semibold text-dark">
                                Áudios
                            </h3>
                            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-2 py-1 rounded-full">
                                {audioAttachments.length}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 gap-4">
                            {audioAttachments.map((item, index) => (
                                <AudioPlayer
                                    src={`${API_BASE_URL}${item.url}`}
                                    title={`Áudio ${index + 1}`}
                                    type={item.content_type}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {otherAttachments.length > 0 && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <FileOutlined className="text-lg text-orange-600" />
                            <h3 className="text-xl font-semibold text-dark">
                                Outros Arquivos
                            </h3>
                            <span className="bg-orange-100 text-orange-700 text-sm font-medium px-2 py-1 rounded-full">
                                {otherAttachments.length}
                            </span>
                        </div>

                        <div className="space-y-3">
                            {otherAttachments.map((item, index) => (
                                <Card
                                    key={item.id}
                                    className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                                <FileOutlined className="text-orange-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-dark">
                                                    Arquivo {index + 1}
                                                </p>
                                                <p className="text-sm text-body-color">
                                                    Tipo: {item.content_type}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AttachmentsSection;
