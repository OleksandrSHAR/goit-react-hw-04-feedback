import { Titel } from './Section.style';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Titel>{title}</Titel>
      {children}
    </div>
  );
};
