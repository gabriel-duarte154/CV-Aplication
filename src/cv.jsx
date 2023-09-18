import { ReactComponent as EmailIcon } from './assets/email.svg';
import { ReactComponent as LocationIcon } from './assets/location.svg';
import { ReactComponent as PhoneIcon } from './assets/phone.svg';

function InfoItem({ data, Icon }) {
  return (
    data && (
      <div className="info-item">
        <Icon></Icon>
        {data}
      </div>
    )
  );
}

function Header({ data }) {
  return (
    <header className="cv_header">
      <div className="intro">
        <h1>{data.name}</h1>
      </div>

      <div className="info">
        <InfoItem data={data.email} Icon={EmailIcon}></InfoItem>
        <InfoItem data={data.phone} Icon={PhoneIcon}></InfoItem>
        <InfoItem data={data.address} Icon={LocationIcon}></InfoItem>
      </div>
    </header>
  );
}

function SectionEduacation({ data }) {
  return (
    <section className="cv_section">
      <h1 className="cv_title">Education</h1>
      {data.map((item, index) => (
        <EducationItem data={item} key={index} />
      ))}
    </section>
  );
}

function EducationItem({ data }) {
  return (
    <div className="cv_row">
      <div className="cv_column">
        <div className="cv_item">
          {data.endDate
            ? data.startDate + ' - ' + data.endDate
            : data.startDate}
        </div>
        <div className="cv_item">{data.location}</div>
      </div>
      <div className="cv_column">
        <div className="bold cv_item">{data.school}</div>
        <div className="cv_item">{data.degree}</div>
      </div>
    </div>
  );
}

function ExpirienceItem({ data }) {
  return (
    <div className="cv_row">
      <div className="cv_column">
        <div className="cv_item">
          {data.endDate
            ? data.startDate + ' - ' + data.endDate
            : data.startDate}
        </div>
        <div className="cv_item">{data.location}</div>
      </div>
      <div className="cv_column">
        <div className="bold">{data.company}</div>
        <div className="cv_item">{data.positionTitle}</div>
        <div className="cv_item">{data.description}</div>
      </div>
    </div>
  );
}

function SectionExperience({ data }) {
  return (
    <section className="cv_section">
      <h1 className="cv_title">Expirience</h1>
      {data.map((item, index) => (
        <ExpirienceItem data={item} key={index} />
      ))}
    </section>
  );
}

function Curriculum({ data }) {
  return (
    <div className="cv_wrapper">
      <Header data={data.personal} />
      <main className="cv_main">
        {data.education.length > 0 ? (
          <SectionEduacation data={data.education} />
        ) : (
          ''
        )}

        {data.experience.length > 0 ? (
          <SectionExperience data={data.experience} />
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default Curriculum;
