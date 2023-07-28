import { InternalSectionContent } from '../../../interfaces/internal-page.interface';
import InternalSection from '../../molecules/internal-section/InternalSection';
import './InternalContent.scss';

interface Props {
    sections: Array<InternalSectionContent[]>;
    parentSlug: string;
    title: string;
}

const InternalContent = ({ sections, parentSlug, title }: Props) => {

    const generateId = (index: number) => {
        return `${parentSlug}-${index}`
    }

    return (
        <section className='o-internal-content'>
            <div className='section-badge'>
                <p>{parentSlug.toUpperCase()}</p>
            </div>
            <h2>{title}</h2>
            {
                sections.map((section, index) => (
                    <InternalSection
                        key={generateId(index)}
                        section={section} />
                ))
            }
        </section>
    )
}

export default InternalContent