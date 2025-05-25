import Typography from "antd/es/typography/Typography";

interface Props {
    src: string;
    type: string;
    title?: string;
}

const AudioPlayer = ({ src, type, title }: Props) => {
    return (
        <div>
            <Typography>{title}</Typography>
            <audio controls>
                <source src={src} type={type} />
            </audio>
        </div>
    );
};

export default AudioPlayer;
