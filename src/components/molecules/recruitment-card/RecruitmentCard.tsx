import './RecruitmentCard.scss';

interface Props {
    data: {
        image: string;
        title: string;
        description: string;
        buttonCopy: string;
        type: string;
    }
    sendType: (type: string) => void
}

const RecruitmentCard = ({ data, sendType }: Props) => {
    return (
        <div className='m-recruitment-card'>
            <img width={293} height={189.7} src={data.image} alt="imagen  de acompañamiento" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button
                className='btn-primary'
                onClick={() => sendType(data.type)}>
                {data.buttonCopy}
            </button>
        </div>
    )
}

export default RecruitmentCard