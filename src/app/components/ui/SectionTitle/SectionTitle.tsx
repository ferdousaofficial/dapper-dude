interface SectionTitleProps {
  title: String;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className="capitalize lg:text-[45px] md:text-[40px] text-[36px] leading-[40px] font-bold text-center">{title}</h2>
);

export default SectionTitle;
